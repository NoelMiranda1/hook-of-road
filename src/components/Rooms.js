import React, { useState } from "react";
import { Card } from "antd";
import { HomeFilled } from "@ant-design/icons";
const Home = ({ initialState, aire }) => {
  const { Meta } = Card;
  const [libre, setLibre] = useState(initialState);
  const [air, setAire] = useState(aire);
  const data = () => {
    return (
      <>
        <h1>{libre ? <h1>libre</h1> : <h1>Ocupado</h1>}</h1>
        <button
          name="aire"
          type="primary"
          style={{
            backgroundColor: libre ? "#00ff44" : "#ff0000",
            height: "38px",
            borderWidth: 0.01,
            borderRadius: "5px",
          }}
          onClick={() => {
            setLibre((prevState) => !prevState);
          }}
        >
          {libre ? (
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "#fff",
              }}
            >
              libre
            </h2>
          ) : (
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "#fff",
              }}
            >
              ocupado
            </h2>
          )}
        </button>
      </>
    );
  };
  const info = () => {
    return <div>{air ? <p>aire</p> : <p>comun</p>}</div>;
  };
  return (
    <Card
      hoverable
      style={{ width: 240, padding: "15px", borderRadius: "10px" }}
      cover={<HomeFilled style={{ fontSize: "50px" }} />}
    >
      <Meta title={info()} description={data()} />
    </Card>
  );
};

export default Home;
