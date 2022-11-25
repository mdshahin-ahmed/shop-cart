import React from "react";
import Header from "../Header/Header";
import HotDeals from "../HotHeals/HotDeals";
import TodayHotDeals from "../TodayHotDeals/TodayHotDeals";

const Home = () => {
  return (
    <div>
      <Header />
      <HotDeals></HotDeals>
      <TodayHotDeals></TodayHotDeals>
    </div>
  );
};

export default Home;
