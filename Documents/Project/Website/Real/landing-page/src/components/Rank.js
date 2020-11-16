import React from "react";
import "../styles/components/Rank.scss";

const data = [
  {
    id: 1,
    nums: "300+",
    name: "Reach Peoples",
  },
  {
    id: 2,
    nums: "250+",
    name: "Visitors",
  },
  {
    id: 3,
    nums: "20K+",
    name: "Downloads",
  },
  {
    id: 4,
    nums: "50K+",
    name: "Reviews",
  },
];

function Rank() {
  return (
    <section>
      <div className="container-rank_box">
        <div className="rank-row">
          {data.map((item) => (
            <div className="rank-col" key={item.id}>
              <h2>{item.nums}</h2>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rank;
