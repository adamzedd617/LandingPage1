import React from "react";
import Banner1 from "../components/Banner1";
import Banner2 from "../components/Banner2";
import Brand from "../components/Brand";
import Rank from "../components/Rank";
import Subscribe from "../components/Subscribe";

import { homeBanner1, homeBanner2 } from "../components/data/Section1";
import Services from "../components/Services";

//group catalog for section

function Home() {
  return (
    <>
      <Banner1 {...homeBanner1} />
      <Brand />
      <Rank />
      <Banner2 {...homeBanner2} />
      <Services />
      <Banner1 {...homeBanner1} />
      <Subscribe />
    </>
  );
}
export default Home;
