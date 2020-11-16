import React from "react";
import "../styles/components/Services.scss";
import { Button } from "./Button";

const label = [
  {
    id: 1,
    img: "airbnb",
    name: "Service 1",
    nameDesc: "Description Here...",
  },
  {
    id: 2,
    img: "airbnb",
    name: "Service 2",
    nameDesc: "Description Here...",
  },
  {
    id: 3,
    img: "airbnb",
    name: "Service 3",
    nameDesc: "Description Here...",
  },
  {
    id: 4,
    img: "airbnb",
    name: "Service 4",
    nameDesc: "Description Here...",
  },
];

function Services() {
  return (
    <section>
      <div className="service-container">
        <h2 className="service-title">Most Desired Subjects</h2>
        <div className="service-row">
          <div className="service-col">
            {label.map((item) => (
              <div className="service-card " key={item.id}>
                <img
                  src={require(`../assets/${item.img}.svg`).default}
                  alt={item.name}
                />
                <h4 className="name">{item.name}</h4>
                <p className="nameDesc">{item.nameDesc}</p>
                <Button buttonStyle="btn--outline">See More..</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
