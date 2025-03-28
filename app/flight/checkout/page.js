"use client";

import React, { useEffect, useState } from "react";

import Review from "../../Component/AllComponent/checkout/Review";
import Travellers from "../../Component/AllComponent/checkout/Travellers";
import Payment from "../../Component/AllComponent/checkout/Payment";
import { MdArrowForwardIos } from "react-icons/md";

const page = () => {
  const [activeTab, setActiveTab] = useState(2);
  const [CheckOutData, setCheckOutData] = useState();
 
   useEffect(() => {
     let dataS = localStorage.getItem("checkOutFlightDetail");
 
    //  console.log(JSON.parse(dataS))
 
     setCheckOutData(JSON.parse(dataS));
   }, []);


   const tabs = [
    {
      id: 1,
      label: "Reviews",
      content: <Review setActiveTab={setActiveTab}  CheckOutData={CheckOutData}/>,
    },
    {
      id: 2,
      label: "Travellers",
      content: <Travellers fdatas={ CheckOutData}  setActiveTab={setActiveTab} />,
    },
    { id: 3, label: "Payment", content: <Payment CheckOutData={CheckOutData} /> },
  ];



  return (
    <div className="px-2 sm:px-5 py-10 xl:px-40  xl:py-20">
 
      <div className="flex items-center">
       
      </div>

      <div>
        {tabs.map(
          (tab, idx) =>
            activeTab === tab.id && <div key={idx}>{tab.content}</div>
        )}
      </div>
    </div>
  );
};

export default page;
