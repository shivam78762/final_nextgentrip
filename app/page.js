"use client";
import React from "react";
import Topbar from "./Component/Topbar";
import Header from "./Component/AllComponent/Header";
import TopFlight from "./Component/AllComponent/TopFlight";
import Book from "./Component/AllComponent/Book";
import TipsTricks from "./Component/AllComponent/TipsTricks";
import CustomSlider from "./Component/AllComponent/Slider";
import { redirect } from "next/navigation";
import { development } from "./Component/common";
import Reviews from "./Component/AllComponent/Reviews";

import FeaturedProperties from "./Component/AllComponent/FeaturedProperties";

const page = () => {
  if (development == "production") {
    redirect("/maintenance");
  }
  return (
    <>
      <Header />
      <div className="hidden md:block">
        <CustomSlider />
      </div>

      <TopFlight />

      <Book />

      <TipsTricks />

      <Reviews />
    </>
  );
};

export default page;
