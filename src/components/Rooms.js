/** @format */

import React, { useState } from "react";
import { Card } from "antd";
import { HomeFilled } from "@ant-design/icons";
import "../style/form.css";
const Home = ({ initialState, aire }) => {
  const { Meta } = Card;
  const [libre, setLibre] = useState(initialState);
  const [air, setAire] = useState(aire);
  const data = () => {
    return (
      <div className='row'>
        <h1>{libre ? <h1>Libre</h1> : <h1>Ocupado</h1>}</h1>
        <button
          name='aire'
          // type='primary'
          style={{
            backgroundColor: libre ? "#00ff44" : "#ff0000"
          }}
          className='circle'
          onClick={() => {
            setLibre((prevState) => !prevState);
          }}></button>
      </div>
    );
  };
  const info = () => {
    return (
      <div>
        {air ? (
          <p style={{ textAlign: "center" }}>Aire acondicionado</p>
        ) : (
          <p style={{ textAlign: "center" }}>Comun</p>
        )}
      </div>
    );
  };
  return (
    <Card
      hoverable
      style={{ width: 240, padding: "15px", borderRadius: "10px" }}
      cover={<HomeFilled style={{ fontSize: "50px" }} />}>
      <Meta title={info()} description={data()} />
    </Card>
  );
};

export default Home;
