import { Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { FaFan, FaLightbulb } from "react-icons/fa";
import { GiBedLamp } from "react-icons/gi";
import { deveiceList, icon } from "database/Deveices/DeveicesConfig";
import "./Deveices.css";

const renderDeveices = () => {
  let data = deveiceList.map((deveice, index) => {
    return (
      <Col span={8} key={deveice.id}>
        <Card
          hoverable
          // style={{
          //   width: 300,
          //   paddingLeft: "10px",
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   marginBottom: "20px",
          // }}
          cover={icon.get(deveice.icon)}
        >
          <Meta title={deveice.name} description={deveice.description} />
        </Card>
      </Col>
    );
  });
  return data;
};

function Deveices(props) {
  return (
    <div className="deveices">
      <Row justify="start">
        {renderDeveices()}
      </Row>
    </div>
  );
}

export default Deveices;
