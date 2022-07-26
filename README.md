# Hướng dẫn
 Cài đặt thư viện:
- ESP8266
- PubSubClient
- ArduinoJson: bản 5.

Triển khai trên cloud (AWS)
- Create EC2 cloud AWS
- config port inbound and outbound
- open terminal on EC2 Ubuntu and clone project
- run project follow below step

1, Cài đặt kết nối với database:
- Trong thư mục IoT-Group13/server mở file .env
- Trong đó có các hằng số:
	- PORT=4000     <cổng khởi chạy cho server>

2, Khởi chạy server (NodeJS):
- Mở terminal tới thư mục IoT-Group13/server
- Tải các thư viện cần thiết cho server bằng lệnh: npm i
- Chạy server bằng lệnh: npm start
- Test api trên postman thông qua địa chỉ localhost:4000

3, Chạy giao diện web (được xây dựng bằng ReactJS):
- Mở terminal tới thư mục IoT-Group13/web_client/frontend
- Tải các thư viện cần thiết cho frontend: npm i
- Khởi chạy giao diện: npm start
- Chờ đến khi hiển thị trên trình duyệt ở địa chỉ localhost:3000
