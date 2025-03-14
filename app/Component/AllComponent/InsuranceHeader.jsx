"use client";

import Navbar from "./Navbar";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { getInsuranceSearch } from "../Store/slices/insuranceSearchSlice";

export default function InsuranceHeader() {
  const planCategories = [
    
    { id: 1, title: "DomesticTravelPolicy" },
    { id: 2, title: "OverseasTravelInsurance" },
    { id: 3, title: "StudentOverseasInsurance" },
    { id: 4, title: "SchengenOverseasInsurance" },
    { id: 5, title: "InboundTravelPolicy" },
    { id: 6, title: "CancellationInsurance" },
  ];

  const planCoverage = [
    { id: 1, name: "US" },
    { id: 2, name: "Non_US" },
    { id: 3, name: "WorldWide" },
    { id: 4, name: "India" },
    { id: 5, name: "Asia" },
    { id: 6, name: "Canada" },
    { id: 7, name: "Australia" },
    { id: 8, name: "SchenegenCountries" },
  ];

  const dispatch=useDispatch();

   const [isOpen, setIsOpen] = useState(null);
  const [alldata,setallData]=useState({Plan_Category:{title:planCategories[0].title,num:planCategories[0].id}   , Plan_Coverage:{name:planCoverage[0].name,num:planCoverage[0].id}   })



  const DropDownHandler = (auth) => {
    setIsOpen((prevVal) => (prevVal === auth ? null : auth));
  };
  const handeldate =(e)=>{
console.log( new Date(e.target.value),"sadfwdcfwefcwe")
  }


  const handelIncSearch=()=>{
    console.log(alldata)
    dispatch(getInsuranceSearch({PlanCategory:alldata.Plan_Category.num,PlanCoverage:alldata.Plan_Coverage.num,PlanType:alldata.Plan_Type  ,TravelStartDate:alldata.TravelStartDate,  TravelEndDate:alldata.TravelEndDate}))
  }




  return (
    <>
      <div className="relative px-5 md:px-16 xl:px-32   pt-10 ">
        <div className="bg-gradient-to-r from-[#002043] to-[#004080] h-[6rem] absolute inset-0 -z-10 " />

        <div className="InsuranceHeader  shadow-2xl bg-red-500  e rounded-md   ">
          <div className="bg-gray-200 border-b rounded-sm shadow">
            <Navbar />
          </div>
          <div className="bg-white flex flex-wrap  lg:flex-nowrap items-center gap-5 md:gap-8 py-5 px-4 md:px-4 ">
            <div className="flex flex-col  w-full justify-between lg:w-fit md:flex-row gap-4 md:gap-4">
              <div className=" w-full">
                
                <p>              TravelStartDate</p>
                                <input
                  type="date"
                  id="startDate"
                  onChange={(e)=>{ setallData(  {...alldata , TravelStartDate: new Date(e.target.value)} ) }}

                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="w-full">
                <p>TravelEndDate</p>
                <input
                                  onChange={(e)=>{ setallData(  {...alldata , TravelEndDate: new Date(e.target.value)} ) }}

                  type="date"
                  id="endDate"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            <ul className="list-none text-nowrap relative z-50  flex flex-col   xl:flex-row   gap-4 md:gap-4">
             <div className="flex gap-3 items-center ">
               {/* Plan Category Dropdown */}
<div className="flex flex-col gap-3">
               <li
                className="flex relative items-center gap-2 cursor-pointer"
                onClick={() => DropDownHandler("Category")}
              >
                <span className="text-sm md:text-base">Plan Category</span>
               
                <IoIosArrowDown
                  className={`transition-transform ${
                    isOpen === "Category" ? "rotate-180" : "rotate-0"
                  }`}
                />
             

                {isOpen === "Category" && (
                  <ul className="mt-2 z-50  absolute bg-white  text-black top-10 md:top-12 left-0 w-max shadow-md rounded-md p-2" onMouseLeave={()=>setIsOpen("")} >
                    {planCategories.map((category) => (
                      <li
                        onClick={() => {  setIsOpen(""), setallData({...alldata,Plan_Category:{title:category.title,num:category.id }}) } }
                        
                        key={category.id}
                        className="py-1 px-2 hover:bg-gray-100 cursor-pointer text-sm md:text-base border-b-[#48484873] border-b-2"
                      >
                        {category.title}
                      </li>
                    ))}
                  </ul>
                )}


              </li>
              <p>{alldata.Plan_Category.title}</p>
              </div>
              {/* Plan Coverage Dropdown */}
              <div className="flex flex-col gap-3 items-center">
              <li
                className="flex relative items-center gap-2 cursor-pointer"
                onClick={() => DropDownHandler("Coverage")}
              >
                <span className="text-sm md:text-base">Plan Coverage</span>
                <IoIosArrowDown
                  className={`transition-transform ${
                    isOpen === "Coverage" ? "rotate-180" : "rotate-0"
                  }`}
                />
                {isOpen === "Coverage" && (
                  <ul className="mt-2 z-50 absolute bg-white text-black top-10 md:top-12 left-0  w-max shadow-md rounded-md p-2" onMouseLeave={()=>setIsOpen("")}>
                    {planCoverage.map((item) => (
                      <li
                      onClick={() => {  setIsOpen(""), setallData({...alldata,Plan_Coverage:{name:item.name,num:item.id}}) } }
                      key={item.id}
                        className="py-1 px-2 hover:bg-gray-100 cursor-pointer text-sm md:text-base"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
             
              <p>{alldata.Plan_Coverage.name}</p>
              </div>


             </div>

              {/* Plan Type Radio Buttons */}
              <li className="flex flex-col  items-start md:items-center gap-3">
                <h4 className="text-sm md:text-base font-semibold">
                  Plan Type
                </h4>
                <div className="flex flex-row items-start md:items-center gap-2">
                  <div>
                    <input
                      id="SingleType"
                      type="radio"
                      name="planType"
                      className="mr-2"
                      value={"1"}
                      onClick={(e) => {  setIsOpen(""), setallData({...alldata, Plan_Type:e.target.value}) } }

                    />
                    <label
                      htmlFor="SingleType"
                      className="text-sm md:text-base"
                    >
                      Single Type = 1
                    </label>
                  </div>
                  <div>
                    <input
                      id="AMT2"
                      type="radio"
                      value={"2"}
                      name="planType"
                      className="mr-2"
                      onClick={(e) => {  setIsOpen(""), setallData({...alldata, Plan_Type:e.target.value}) } }


                    />
                    <label htmlFor="AMT2" className="text-sm md:text-base">
                      AMT = 2
                    </label>
                  </div>
                </div>
              </li>
            </ul>
            <button className=" bg-[#0c3a48] text-white p-3 px-4 rounded-md" onClick={handelIncSearch}>Search Ins</button>
          </div>

         
        </div>
      </div>
    </>
  );
}
