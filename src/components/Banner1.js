import React from "react";

import { Link } from "react-router-dom";
import { Button } from "./Button";
import "../styles/components/Button.css";
import "../styles/components/Banner1.css";

function Banner1({
  lightBg,
  titleTopLine,
  topLine,
  lightText,
  lightTextDesc,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={lightBg ? "home_hero-section" : "home_hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home_hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home_hero-text-wrapper">
                <div className="top-line">
                  {titleTopLine} <br /> {topLine}{" "}
                  <span className={lightText ? "heading" : "heading dark"}>
                    {headLine}
                  </span>
                </div>

                <p
                  className={
                    lightTextDesc
                      ? "home_hero-subtitle dark"
                      : "home_hero-subtitle"
                  }
                >
                  {description}
                </p>
                <Link to="/contact">
                  <Button buttonSize="btn--large" buttonColor="blue">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="col">
              <div className="home_home-img-wrapper">
                <img
                  src={require(`../assets/${img}.svg`).default}
                  alt={alt}
                  className="home_hero-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner1;
