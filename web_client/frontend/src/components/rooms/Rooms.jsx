import { Col, Row } from "antd";
import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "./Rooms.css";
// import imgModelHome from "image/model_home.jpg";

import { roomList, imageRoom } from "database/Rooms/Roomsconfig";
import { useHistory, useParams } from "react-router-dom";

// import LivingRoom from "image/living_room.jpg";
// import BedRoom from "image/bed_room.jpg";
// import KichentRoom from "image/kichent_room.jpeg";
// import StudyRoom from "image/study_room.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 540,
    marginBottom: 15,
    marginRight: 15,
  },
});

const renderRooms = (classes, history) => {
  let rooms = roomList.map((room, index) => {
    return (
      <Col span={12} key={room.id} >
        <Card className={classes.root} onClick={()=>{history.push(`/rooms/${room.id}`)}}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Image smart home"
              height="240"
              image={imageRoom.get(room.image)}
              title={room.name}
            />
            <CardContent style={{padding: "4px"}}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                {room.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Col>
    );
  });
  return rooms;
};

function Rooms(props) {
  const classes = useStyles();
  const history = useHistory();
  
  return (
    <div className="rooms">
      <Row>{renderRooms(classes, history)}</Row>
    </div>
  );
}

export default Rooms;
