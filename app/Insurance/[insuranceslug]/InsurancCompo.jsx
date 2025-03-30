'use client'
import React, { useEffect, useState } from 'react'
import InsuranceHeader from '../../Component/AllComponent/InsuranceHeader'
import { FaHospital, FaPlane, FaMoneyBillWave, FaBaggageClaim } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getInsuranceSearch } from '../../Component/Store/slices/insuranceSearchSlice';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { useRouter } from "next/navigation";
const SkeletonCard = () => (
  <div className="bg-white shadow-lg rounded-2xl p-6 animate-pulse">
    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
    <ul className="mb-4">
      {[...Array(3)].map((_, index) => (
        <li key={index} className="flex items-center mb-1">
          <div className="h-4 w-4 bg-gray-200 rounded-full mr-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </li>
      ))}
    </ul>
    <div className="mt-4 text-center">
      <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-1"></div>
      <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto"></div>
    </div>
    <div className="mt-4 h-10 bg-gray-200 rounded-xl"></div>
  </div>
);

const InsurancCompo = ({ slug }) => {
  const [ipAddress, setIpAddress] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const { insuranceslug } = useParams();

  const decodedParams = decodeURIComponent(insuranceslug);
  const queryParams = Object.fromEntries(new URLSearchParams(decodedParams));

  const insuranceState = useSelector((state) => state.insurance || { info: [], isLoading: false, isError: false });
  const { info: plans, isLoading, isError } = insuranceState;

  // Load selected plan from localStorage on component mount
  useEffect(() => {
    const savedPlan = localStorage.getItem('selectedInsurancePlan');
    if (savedPlan) {
      setSelectedPlan(JSON.parse(savedPlan));
    }
  }, []);

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await axios.get("https://api64.ipify.org?format=json");
        setIpAddress(response.data.ip);
      } catch (error) {
        console.error("Error fetching IP:", error);
      }
    };
    fetchIp();
  }, []);

  useEffect(() => {
    if (queryParams.plancategory && queryParams.plancoverage && queryParams.plantype) {
      dispatch(
        getInsuranceSearch({
          plancategory: parseInt(queryParams.plancategory, 10),
          plancoverage: parseInt(queryParams.plancoverage, 10),
          plantype: parseInt(queryParams.plantype, 10),
          travelstartdate: queryParams.travelstartdate || "01/04/2025",
          travelenddate: queryParams.travelenddate || "10/04/2025",
          EndUserIp: ipAddress,
          paxage: queryParams.paxage ? queryParams.paxage.split(',').map(Number) : []
        })
      );
    }
  }, [ipAddress]);

  // Handle plan selection
  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    localStorage.setItem('selectedInsurancePlan', JSON.stringify(plan));
    router.push("/Insurance/checkout");
  };

  // Clear selected plan
  const clearSelectedPlan = () => {
    setSelectedPlan(null);
    localStorage.removeItem('selectedInsurancePlan');
  };


  // const handleSelectPlan = (plan) => {
  //   // Store selected plan in localStorage
  //   localStorage.setItem("selectedInsurancePlan", JSON.stringify(plan));
  
  //   // Redirect to the checkout page
  //   router.push("/Insurance/checkout");
  // };

  return (
    <>
      <InsuranceHeader />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Insurance Plans</h1>

        {/* Display Selected Plan */}
        {selectedPlan && (
          <div className="max-w-2xl mx-auto mb-8 bg-green-50 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-green-800 flex items-center">
              <FaHospital className="mr-2" /> Your Selected Plan
            </h2>
            <div className="bg-white p-4 rounded-xl">
              <h3 className="text-xl font-medium mb-2">{selectedPlan.PlanName}</h3>
              <ul className="text-gray-700 mb-4">
                {selectedPlan.CoverageDetails.map((coverage, index) => (
                  <li key={index} className="flex items-center mb-1">
                    <FaPlane className="mr-2 text-green-500" />
                    {coverage.Coverage}: <span className="ml-auto">INR {coverage.SumInsured}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <span className="text-xl font-bold text-gray-800">INR {selectedPlan.Price.GrossFare}</span>
                <p className="text-sm text-gray-500">(Gross Fare)</p>
              </div>
              <button
                onClick={clearSelectedPlan}
                className="mt-4 w-full bg-red-600 text-white py-2 rounded-xl hover:bg-red-700"
              >
                Remove Selection
              </button>
            </div>
          </div>
        )}

        {/* Plans List */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
            {[...Array(3)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : plans?.data?.Response?.Results?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
            {plans.data.Response.Results.map((plan) => (
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
                <button
                  onClick={() => handleSelectPlan(plan)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
                  disabled={selectedPlan?.PlanCode === plan.PlanCode}
                >
                  {selectedPlan?.PlanCode === plan.PlanCode ? 'Selected' : 'Select Plan'}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Plans Found</h2>
            <p className="text-gray-600">
              Try selecting a different Plan Category, Plan Coverage, or Plan Type to find available insurance options.
            </p>
          </div>
        )}
      </div>
    </>
  )
}

export default InsurancCompo