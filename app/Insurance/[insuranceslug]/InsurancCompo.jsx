import React from 'react'
import InsuranceHeader from '../../Component/AllComponent/InsuranceHeader'
import { FaHospital, FaPlane, FaMoneyBillWave, FaBaggageClaim } from "react-icons/fa";





const plans = [
    {
      PlanCode: "4",
      PlanName: "SANKASH 50D 30 DAYS (additional 10% cashback)",
      CoverageDetails: [
        { Coverage: "Hospitalization expenses for Injury", SumInsured: "50000" },
        { Coverage: "Outpatient Treatment Expenses for Injury", SumInsured: "20000" },
        { Coverage: "Medical Evacuation", SumInsured: "50000" },
        { Coverage: "Personal Accident", SumInsured: "300000" },
        { Coverage: "Trip Cancellation", SumInsured: "10000" },
        { Coverage: "Trip Interruption & Curtailment", SumInsured: "10000" },
        { Coverage: "Repatriation of remains", SumInsured: "50000" },
        { Coverage: "Total Loss of Checked-in Baggage", SumInsured: "3000" },
        { Coverage: "Delay of Checked-in Baggage", SumInsured: "1000" },
      ],
      Price: { Currency: "INR", GrossFare: 143 },
    },
    {
      PlanCode: "8",
      PlanName: "SANKASH 100D 30 DAYS (additional 10% cashback)",
      CoverageDetails: [
        { Coverage: "Hospitalization expenses for Injury", SumInsured: "100000" },
        { Coverage: "Outpatient Treatment Expenses for Injury", SumInsured: "50000" },
        { Coverage: "Medical Evacuation", SumInsured: "50000" },
        { Coverage: "Personal Accident", SumInsured: "400000" },
        { Coverage: "Trip Cancellation", SumInsured: "10000" },
        { Coverage: "Trip Interruption & Curtailment", SumInsured: "10000" },
        { Coverage: "Repatriation of remains", SumInsured: "50000" },
        { Coverage: "Total Loss of Checked-in Baggage", SumInsured: "4000" },
        { Coverage: "Delay of Checked-in Baggage", SumInsured: "2000" },
      ],
      Price: { Currency: "INR", GrossFare: 207 },
    },
    {
      PlanCode: "12",
      PlanName: "SANKASH 200D 30 DAYS (additional 10% cashback)",
      CoverageDetails: [
        { Coverage: "Hospitalization expenses for Injury", SumInsured: "200000" },
        { Coverage: "Outpatient Treatment Expenses for Injury", SumInsured: "50000" },
        { Coverage: "Medical Evacuation", SumInsured: "50000" },
        { Coverage: "Personal Accident", SumInsured: "500000" },
        { Coverage: "Trip Cancellation", SumInsured: "10000" },
        { Coverage: "Trip Interruption & Curtailment", SumInsured: "10000" },
        { Coverage: "Repatriation of remains", SumInsured: "50000" },
        { Coverage: "Total Loss of Checked-in Baggage", SumInsured: "5000" },
        { Coverage: "Delay of Checked-in Baggage", SumInsured: "2000" },
      ],
      Price: { Currency: "INR", GrossFare: 226 },
    },
  ];
  








const InsurancCompo = ({slug}) => {
  return (
    <>
    <InsuranceHeader />


    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Insurance Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.PlanCode} className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <FaHospital className="mr-2 text-blue-500" /> {plan.PlanName}
            </h2>
            <ul className="text-gray-700 mb-4">
              {plan.CoverageDetails.map((coverage, index) => (
                <li key={index} className="flex items-center mb-1">
                  <FaPlane className="mr-2 text-green-500" />
                  {coverage.Coverage}: <span className="ml-auto">INR {coverage.SumInsured}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-center">
              <span className="text-xl font-bold text-gray-800">INR {plan.Price.GrossFare}</span>
              <p className="text-sm text-gray-500">(Gross Fare)</p>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default InsurancCompo