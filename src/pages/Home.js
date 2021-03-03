import React from "react";
import Lat from "../components/Layout";
import Rooms from "../components/Rooms";
import "../style/responsivecard.css";
const Home = () => {
  return (
    <Lat>
      <div>
        <h1
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "25px" }}
        >
          Habitaciones
        </h1>
        <div className="scre">
          <div
            className="cont"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                margin: "20px",
              }}
            >
              <Rooms initialState={true} aire={true} />
            </div>
            <div
              style={{
                margin: "20px",
              }}
            >
              <Rooms initialState={true} aire={true} />
            </div>
            <div
              style={{
                margin: "20px",
              }}
            >
              <Rooms initialState={true} aire={false} />
            </div>
          </div>
          <div
            className="cont"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                margin: "20px",
              }}
            >
              <Rooms initialState={true} aire={false} />
            </div>
            <div
              style={{
                margin: "20px",
              }}
            >
              <Rooms initialState={true} aire={false} />
            </div>
            <div
              style={{
                margin: "20px",
              }}
            >
              <Rooms initialState={true} aire={false} />
            </div>
          </div>
        </div>
      </div>
    </Lat>
  );
};

export default Home;
