import React from "react";
import "../styles/components/Brand.scss";

const log = [
  {
    id: 1,
    img: "airbnb",
    name: "Airbnb Company",
  },
  {
    id: 2,
    img: "apple",
    name: "Apple Company",
  },
  {
    id: 3,
    img: "windows",
    name: "Windows Company",
  },
  {
    id: 4,
    img: "intel",
    name: "Intel Company",
  },
];

function Brand() {
  return (
    <section className="container-catalog">
      <div className="catalog-box">
        <div
          className="catalog-row gallery js-flickity"
          data-flickity-options='{ "wrapAround": true }'
        >
          {log.map((item) => (
            <div className="catalog-col gallery-cell" key={item.id}>
              <img
                src={require(`../assets/${item.img}.svg`).default}
                alt={item.name}
              />
            </div>
          ))}
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flickity/1.0.0/flickity.pkgd.js"></script>
    </section>
  );
}

export default Brand;
