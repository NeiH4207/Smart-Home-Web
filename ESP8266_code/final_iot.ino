#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <Servo.h>
#include <DHT.h>
#include <SimpleTimer.h>

#include <ArduinoJson.h>

// Cập nhật thông tin wifi
//#define ssid "Onii-chan"
//#define password "999999999"

#define ssid "hai ngo"
#define password "xaugai0607"

//#define ssid "thang"
//#define password "1234567890"

//#define ssid "12345678"
//#define password "88888888"

//#define ssid "TP-Link_C124"
//#define password "46527981"

// Thông tin về MQTT Broker
#define mqtt_server "ithust.xyz" // Thay bằng thông tin của bạn
#define mqtt_topic_pub "demo"       //Giữ nguyên nếu bạn tạo topic tên là demo
#define mqtt_topic_sub "helo"
#define Fan D6 // bed room
#define ledPin2 D2 // living room
#define ledPin3 D3 // living room
#define ledPin6 D4 // kitchen 
#define ledPin10 D5 // bed room
#define LightSensor D1
#define LedLightSensor D7

//#define mqtt_user "esp8266"    //Giữ nguyên nếu bạn tạo user là esp8266 và pass là 123456
//#define mqtt_pwd "123456"

const uint16_t mqtt_port = 1883; //Port của CloudMQTT

//Khai báo chân của cảm biến nhiệt độ chân D0
const int DHTTYPE = DHT11;
const int DHTPIN = D0;
int value, real_value;
DHT dht(DHTPIN, DHTTYPE);

Servo servo; // khai báo đối tượng servo
int pos; // góc hiện tại của servo

WiFiClient espClient;
PubSubClient client(espClient);

long lastMsg = 0;
char msg[50];

void controlServo(int param)
{
  if (pos < param) {
    for (pos; pos <= param; pos += 1) {
      servo.write(pos);
      delay(10);
    }
  } else {
    for (pos; pos >= param; pos -= 1) {
      servo.write(pos);
      delay(10);
    }
  }
}

void setup()
{
    Serial.begin(115200);
    //set up wifi
    setup_wifi();
    
    dht.begin(); //khỏi động cảm biến đo nhiệt độ độ ẩm
    pinMode(Fan, OUTPUT);
    pinMode(ledPin2, OUTPUT); // Khai báo đèn id 1
    pinMode(ledPin3, OUTPUT); // Khai báo đèn id 2
    pinMode(ledPin6, OUTPUT); // Khai báo đèn id 3
    pinMode(ledPin10, OUTPUT); // Khai báo đèn id 6
    pinMode(LightSensor, INPUT); // Khai báo chân cảm biến ánh sáng
    pinMode(LedLightSensor, OUTPUT); // Khái báo đèn ngoài sân
    servo.attach(D8); // khai báo chấn điều khiển servo

    //set up pubsub
    client.setServer(mqtt_server, mqtt_port);
    client.setCallback(callback);

    digitalWrite(Fan, LOW);
    digitalWrite(ledPin2, LOW);
    digitalWrite(ledPin3, LOW);
    digitalWrite(ledPin6, LOW);
    digitalWrite(ledPin10, LOW);
    digitalWrite(LedLightSensor, LOW);

    delay(10);
    
}

// Hàm kết nối wifi
void setup_wifi()
{
    delay(10);
    Serial.println();
    Serial.print("Connecting to ");
    Serial.println(ssid);
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED)
    {
        delay(500);
        Serial.print(".");
    }
    Serial.println("");
    Serial.println("WiFi connected");
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());
}

// Hàm call back để nhận dữ liệu
void callback(char *topic, byte *payload, unsigned int length)
{
    String message="";
    String id="";
    String status="";
    boolean flagStatus=false;
    Serial.print("Message arrived [");
    Serial.print(topic);
    Serial.print("] ");
    for (int i = 0; i < length; i++)
    {
        char c = (char)payload[i];
        Serial.print(c);
        message.concat(c);
        if(c=='-'){
          flagStatus=true;
          continue;
        }
        if(flagStatus){
          status.concat(c);
        }else{
          id.concat(c);
        }
        
    }
    Serial.print(message);
    int idint=atoi(id.c_str());

  switch (idint){
   case 1:
       if (status.equals("on")){
          digitalWrite(Fan, HIGH);
        } else {
          digitalWrite(Fan, LOW);
        }
        break;
   case 2:
       if (status.equals("on")){
          digitalWrite(ledPin2, HIGH);
        } else {
          digitalWrite(ledPin2, LOW);
        }
        break;
   case 3:
       if (status.equals("on")){
          digitalWrite(ledPin3, HIGH);
        } else {
          digitalWrite(ledPin3, LOW);
        }
        break;
   case 6:
       if (status.equals("on")){
          digitalWrite(ledPin6, HIGH);
        } else {
          digitalWrite(ledPin6, LOW);
        }
        break;
   case 10:
       if (status.equals("on")){
          digitalWrite(ledPin10, HIGH);
        } else {
          digitalWrite(ledPin10, LOW);
        }
        break;   
    case 17:
        if (status.equals("on")){
          controlServo(180);
        }else if (status.equals("off")){
          controlServo(0);
        }else{
          controlServo(atoi(status.c_str()));
        }
        break;
             
  }

}

// Hàm reconnect thực hiện kết nối lại khi mất kết nối với MQTT Broker
void reconnect()
{
    // Chờ tới khi kết nối
    while (!client.connected())
    {
        Serial.print("Attempting MQTT connection...");
        // Thực hiện kết nối với mqtt user và pass
        if (client.connect("ESP8266Client"))
        {
            Serial.println("connected");
            // Khi kết nối sẽ publish thông báo
            client.publish(mqtt_topic_pub, "ESP_reconnected");
            // ... và nhận lại thông tin này
            client.subscribe(mqtt_topic_sub);
        }
        else
        {
            Serial.print("failed, rc=");
            Serial.print(client.state());
            Serial.println(" try again in 5 seconds");
            // Đợi 5s
            delay(5000);
        }
    }
}

void loop()
{
    // Kiểm tra kết nối
    if (!client.connected())
    {
        reconnect();
    }

    client.loop();
    digitalWrite(LedLightSensor,digitalRead(LightSensor));

    // Sau mỗi 2s sẽ thực hiện publish dòng hello world lên MQTT broker và
    long now = millis();
    if (now - lastMsg > 2000)
    {
//        Serial.println(digitalRead(LightSensor));

        //đọc nhiệt độ, độ ẩm
        float h = dht.readHumidity();    //Đọc độ ẩm
        float t = dht.readTemperature(); //Đọc nhiệt độ

        lastMsg = now;
        StaticJsonBuffer<300> JSONbuffer;
        JsonObject &JSONencoder = JSONbuffer.createObject();

        //Sửa property thành camelCase
        JSONencoder["humidityAir"] = h;
        JSONencoder["temperature"] = t;

        char JSONmessageBuffer[100];
        JSONencoder.printTo(JSONmessageBuffer, sizeof(JSONmessageBuffer));

        client.publish(mqtt_topic_pub, JSONmessageBuffer);
    }
}
