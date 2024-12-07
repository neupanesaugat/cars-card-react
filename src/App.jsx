import React from "react";
import Cars from "./Cars";

const carsData = [
  {
    id: 1,
    img: "https://archive.izmostock.com/img-get/I0000E04Fp6Bmrdo/t/150/I0000E04Fp6Bmrdo.jpg",
    name: "Hyundai i20",
    brand: "Hyundai",
    model: "i20",
    date: "2016",
    price: 12100,
  },
  {
    id: 2,
    img: "https://archive.izmostock.com/img-get/I0000jAor7AUxlqk/t/150/I0000jAor7AUxlqk.jpg",
    name: "Jaguar F-Type",
    brand: "Jaguar",
    model: "F-Type S Coupe",
    date: "2017",
    price: 33187,
  },
  {
    id: 3,
    img: "https://archive.izmostock.com/img-get/I0000al5_nMPFWy4/t/150/I0000al5_nMPFWy4.jpg",
    name: "Mercedes AMG",
    brand: "Mercedes",
    model: "AMG GT AMG GT Roadster",
    date: "2018",
    price: 127900,
  },
  {
    id: 4,
    img: "https://archive.izmostock.com/img-get/I0000NEzTy4dSNtE/t/150/I0000NEzTy4dSNtE.jpg",
    name: "Jeep Cherokee",
    brand: "Jeep",
    model: "Cherokee Latitude SUV",
    date: "2018",
    price: 24395,
  },
  {
    id: 5,
    img: "https://archive.izmostock.com/img-get/I0000zahP0T253Gc/t/150/I0000zahP0T253Gc.jpg",
    name: "Lamborghini Huracan",
    brand: "Lamborghini",
    model: "Huracan LP 610 4 Coupe",
    date: "2017",
    price: 237995,
  },
  {
    id: 6,
    img: "https://archive.izmostock.com/img-get/I0000E4iZe_nWApQ/t/150/I0000E4iZe_nWApQ.jpg",
    name: "Toyota Landcruiser",
    brand: "Toyota",
    model: "Landcruiser Premium SUV",
    date: "2018",
    price: 56844,
  },
];
const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "9rem",
        gap: "3rem",
      }}
    >
      {carsData.map((item, index, array) => {
        return (
          <Cars
            key={item.key}
            image={item.img}
            name={item.name}
            brand={item.brand}
            model={item.model}
            date={item.date}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default App;
