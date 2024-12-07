import React from "react";

const imgStyle = {
  height: 184,
  width: "100%",
};

const Cars = (props) => {
  return (
    <div
      style={{
        width: 270,
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {props.price >= 100000 ? (
        <h1 style={{ marginLeft: "4.5rem", fontFamily: "serif" }}>Luxury</h1>
      ) : null}
      <img src={props.image} alt={props.name} style={imgStyle} />
      <h1 style={{ marginLeft: "3rem", fontFamily: "fantasy" }}>
        {props.name}
      </h1>

      <div
        style={{
          marginLeft: "10px",
          fontWeight: "bold",
          fontFamily: "initial",
        }}
      >
        <p>Brand: {props.brand}</p>
        <p>Model: {props.model}</p>
        <p>Date: {props.date}</p>
        <p>Price($USD): {props.price}</p>
      </div>
    </div>
  );
};

export default Cars;
