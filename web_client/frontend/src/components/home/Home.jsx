import { Col, Row } from "antd";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Home.css";

import { Card as CardAntd } from "antd";

const imgHome = `${process.env.PUBLIC_URL}image/home.jpg`;
const imgModelHome = `${process.env.PUBLIC_URL}image/model_home.jpg`;

const { Meta } = CardAntd;

const useStyles = makeStyles({
  root: {
    maxWidth: 540,
    marginBottom: 15,
  },
});

function Home(props) {
  const classes = useStyles();
  return (
    <div className="home">
      <Row>
        <Col span={12}>
          <Row style={{marginBottom: "15px"}}>
            <CardAntd
              hoverable
              style={{ height: "370px"}}
            //   style={{ width: "540px", height: "312px", marginBottom: "15px" }}
            >
              <Typography gutterBottom variant="h5" component="p">
                Smart Home 1:
              </Typography>
              <Typography gutterBottom variant="body1" component="p">
              The house consists of two roofs stretching down to a narrow area, the whole house is painted white, combined with many layers of glass and large cedar wood panels.
              </Typography>
              <Typography gutterBottom variant="body1" component="p">
              In the middle of the house is a smartly designed high space that runs the entire length of the house, linking all other spaces of the house. Create harmony between the front and back of the house.
              </Typography>
              <Typography gutterBottom variant="body1" component="p">
              The basement of the house is designed differently to help light penetrate deeply, ensuring a living space filled with natural light throughout the day.
              </Typography>
            </CardAntd>
          </Row>

          <Row>
            <CardAntd
              hoverable
              style={{ height: "370px"}}
            >
              <Typography gutterBottom variant="h5" component="p">
                Smart Home 2:
              </Typography>
              <Typography gutterBottom variant="body1" component="p">
              In winter the entire valley is surrounded by fog, but the house is kept warm thanks to the smart design that helps to store solar energy, and the heating system.
              </Typography>
              <Typography gutterBottom variant="body1" component="p">
              Since the owner of the house works on a farm and raises cattle, the house is designed to have a good view to easily monitor the cattle in the valley through the large windows. Each room has a far-reaching view of the grasslands.
              </Typography>

            </CardAntd>
          </Row>
        </Col>

        <Col span={12}>
          <Row>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Image smart home"
                  height="302"
                  image={imgHome}
                  title="Image smart home"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    Smart Home 1
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Row>

          <Row>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Image smart home"
                  height="295"
                  image={imgModelHome}
                  title="Modeling of smart home"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    Smart home 2
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
