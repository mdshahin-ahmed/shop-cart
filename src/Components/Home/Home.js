import React from "react";
import Header from "../Header/Header";
import HotDeals from "../HotHeals/HotDeals";
import SearchItem from "../SearchedItem/SearchItem";
import TodayHotDeals from "../TodayHotDeals/TodayHotDeals";

const Home = () => {
  return (
    <div>
      <Header />
      <HotDeals></HotDeals>
      <TodayHotDeals></TodayHotDeals>
      <SearchItem></SearchItem>
    </div>
  );
};

export default Home;
