"use client";

import React, { useEffect, useState } from "react";
import { MdArrowForwardIos, FaHospital } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaLock, FaRupeeSign, FaSpinner } from "react-icons/fa";
import Swal from "sweetalert2";
import "swiper/css";
import axios from "axios";
import { MdOutlineHealthAndSafety } from "react-icons/md";

import { useRouter } from "next/navigation";
import { apilink } from "../../Component/common";

const page = () => {

  // const insuranceData = {
  //   "ResultIndex": "INS12345",
  //   "PlanCode": "PLAN001",
  //   "PlanName": "Comprehensive Travel Insurance",
  //   "PolicyStartDate": "2024-06-01",
  //   "PolicyEndDate": "2024-06-15",
  //   "Price": {
  //     "GrossFare": 1200,
  //     "Tax": 200,
  //     "Commission": 100,
  //     "TotalFare": 1500
  //   },
  //   "PremiumList": [
  //     {
  //       "PassengerCount": 1,
  //       "Premium": 1200
  //     }
  //   ],
  //   "CoverageDetails": [
  //     {
  //       "Coverage": "Medical Expenses",
  //       "SumInsured": 500000
  //     },
  //     {
  //       "Coverage": "Trip Cancellation",
  //       "SumInsured": 200000
  //     },
  //     {
  //       "Coverage": "Baggage Loss",
  //       "SumInsured": 50000
  //     },
  //     {
  //       "Coverage": "Flight Delay",
  //       "SumInsured": 10000
  //     }
  //   ]
  // }
  const router = useRouter();
  const [user, setUser] = useState();
  const [passengers, setPassengers] = useState([]);
  const [showForms, setShowForms] = useState([]);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [bookingResponse, setBookingResponse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [insuranceData, setSelectedPlan] = useState(null);
  useEffect(() => {
    const storedPlan = localStorage.getItem("selectedInsurancePlan");


      const parsedPlan = JSON.parse(storedPlan);
      setSelectedPlan(parsedPlan);
    
  }, []);
  
  // Log only after state updates
  useEffect(() => {
    if (insuranceData) {
    }
  }, [insuranceData]); 


  // Initialize passenger forms based on insurance data
  useEffect(() => {
    if (insuranceData?.PremiumList?.[0]?.PassengerCount) {
      const passengerCount = insuranceData.PremiumList[0].PassengerCount;
      const initialPassengers = Array(passengerCount)
        .fill()
        .map((_, index) => ({
          Title: "Mr",
          FirstName: "",
          LastName: "",
          DateOfBirth: "",
          Gender: 1,
          AddressLine1: "",
          City: "",
          CountryCode: "91",
          ContactNo: "",
          Email: "",
          IsLeadPax: index === 0,
        }));
      setPassengers(initialPassengers);
      setShowForms(Array(passengerCount).fill(true));
    }
  }, [insuranceData]);




  // Fetch user data
  useEffect(() => {
    const userid = JSON.parse(localStorage.getItem("NextGenUser"));
    if (!userid) router.push("/user/login");

    const fetchUserData = async () => {
      const data = await axios.get(`${apilink}/user/${userid}`);
      if (data.data.success) setUser(data.data.user);
    };
    fetchUserData();
  }, []);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedPassengers = [...passengers];
    updatedPassengers[index][name] = value;
    setPassengers(updatedPassengers);

    if (errors[`${name}_${index}`]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[`${name}_${index}`];
        return newErrors;
      });
    }
  };

  const toggleFormVisibility = (index) => {
    const updatedShowForms = [...showForms];
    updatedShowForms[index] = !updatedShowForms[index];
    setShowForms(updatedShowForms);
  };

  const validateAllForms = () => {
    const newErrors = {};
    passengers.forEach((passenger, index) => {
      if (!passenger.Title) newErrors[`Title_${index}`] = "Title is required.";
      if (!passenger.FirstName)
        newErrors[`FirstName_${index}`] = "First Name is required.";
      if (!passenger.LastName)
        newErrors[`LastName_${index}`] = "Last Name is required.";
      if (!passenger.Gender)
        newErrors[`Gender_${index}`] = "Gender is required.";
      if (!passenger.DateOfBirth)
        newErrors[`DateOfBirth_${index}`] = "Date of Birth is required.";
      if (!passenger.AddressLine1)
        newErrors[`AddressLine1_${index}`] = "Address is required.";
      if (!passenger.City) newErrors[`City_${index}`] = "City is required.";
      if (!passenger.ContactNo)
        newErrors[`ContactNo_${index}`] = "Contact Number is required.";
      else if (!/^\d{10}$/.test(passenger.ContactNo))
        newErrors[`ContactNo_${index}`] = "Phone Number must be 10 digits.";
      if (!passenger.Email) newErrors[`Email_${index}`] = "Email is required.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(passenger.Email))
        newErrors[`Email_${index}`] = "Invalid Email Address.";
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBookInsurance = async (e) => {
    e.preventDefault();
    const isValid = validateAllForms();

    const traceID = localStorage.getItem("selectedInsuranceTraceId");
    console.log("Trace ID:", traceID);

    if (isValid) {
      setIsLoading(true);
      const payload = {
        ResultIndex: insuranceData.ResultIndex,
        TraceId: traceID,

        PlanCode: insuranceData.PlanCode,
        PolicyStartDate: insuranceData.PolicyStartDate,
        PolicyEndDate: insuranceData.PolicyEndDate,
        Price: insuranceData.Price,
        Passenger: passengers.map((passenger) => ({
          Title: passenger.Title,
          BeneficiaryTitle:  passenger.Title,
          FirstName: passenger.FirstName,
          BeneficiaryName: `${passenger.Title} ${passenger.FirstName} ${passenger.LastName}`.trim(),
          LastName: passenger.LastName,
          "RelationShipToInsured": "Self",
          "RelationToBeneficiary": "Spouse",
          "PassportCountry": "IN",
          DateOfBirth: passenger.DateOfBirth,
          Gender: parseInt(passenger.Gender, 10),
          AddressLine1: passenger.AddressLine1,
          City: passenger.City,
          CountryCode: passenger.CountryCode,
          ContactNo: passenger.ContactNo,
          Email: passenger.Email,
          IsLeadPax: passenger.IsLeadPax,
        })),
      };

      try {
        const response = await axios.post(`${apilink}/insurance-book`, payload);
        setBookingResponse(response.data);
        setShowModal(true);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "Booking Failed",
          text:
            error.response?.data?.message ||
            "An error occurred while booking the insurance.",
          confirmButtonText: "OK",
        });
      }
    } else {
      alert(
        "Please fill out all required fields and fix the errors before submitting."
      );
    }
  };

  const closeModal = () => setShowModal(false);

  const InsuranceConfirmationModal = ({ bookingResponse, onClose }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-2xl">
          <h2 className="text-2xl font-bold text-center mb-4 text-[#DA5200]">
            🎉 Insurance Booked!
          </h2>
          <div className="space-y-4">
            <p>
              <strong>Policy Number:</strong> {bookingResponse.policyNumber}
            </p>
            <p>
              <strong>Plan Name:</strong> {insuranceData?.PlanName}
            </p>
            <p>
              <strong>Start Date:</strong>{" "}
              {new Date(insuranceData?.PolicyStartDate).toLocaleDateString()}
            </p>
            <p>
              <strong>End Date:</strong>{" "}
              {new Date(insuranceData?.PolicyEndDate).toLocaleDateString()}
            </p>
            <p>
              <strong>Total Premium:</strong> INR{" "}
              {insuranceData?.Price.GrossFare}
            </p>
          </div>
          <div className="mt-6 text-center">
            <button
              className="bg-[#DA5200] text-white px-6 py-2 rounded-full hover:bg-[#C44A00]"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="md:grid md:grid-cols-6 gap-5 mt-3 px-10">
      <div className="col-span-4 space-y-6">

      <div className="border rounded-lg shadow-lg">
          <div className="bg-[#D5EEFE] py-3 px-4 rounded-t-lg flex items-center gap-3">
            <div className="border-4 bg-white border-orange-100 h-10 w-10 flex justify-center items-center text-2xl rounded-full">
              <MdOutlineHealthAndSafety />
            </div>
            <span className="text-sm md:text-xl font-medium">
              Insurance Details
            </span>
          </div>
          <div className="p-4 space-y-4">
            <h3 className="text-xl font-semibold">{insuranceData?.PlanName}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {insuranceData?.CoverageDetails.map((coverage, index) => (
                <div key={index} className="flex justify-between">
                  <span>{coverage.Coverage}</span>
                  <span className="font-semibold">INR {coverage.SumInsured}</span>
                </div>
              ))}
            </div>
            <p>
              <strong>Policy Period:</strong>{" "}
              {new Date(insuranceData?.PolicyStartDate).toLocaleDateString()} -{" "}
              {new Date(insuranceData?.PolicyEndDate).toLocaleDateString()}
            </p>
          </div>
          
      </div>  


      <div className="border rounded-lg shadow-lg">

      <div className="bg-[#D5EEFE] py-3 px-4 rounded-t-lg flex items-center gap-3">
           
            <span className="text-sm md:text-xl font-medium">
              Traveller Details
            </span>
          </div>


      {passengers.map((passenger, index) => (
              <div key={index} className="m-4 rounded-lg shadow-lg border-2">
                <div className="flex items-center justify-between p-4">
                  <h3 className="text-lg font-semibold">
                    Traveller {index + 1}{" "}
                    {passenger.IsLeadPax ? "(Lead)" : ""}
                  </h3>
                  <button onClick={() => toggleFormVisibility(index)}>
              
                  </button>
                </div>
                {showForms[index] && (
                  <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    <div>
                      <label className="block text-[10px] font-bold">Title</label>
                      <select
                        name="Title"
                        value={passenger.Title}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full border p-2 rounded-md"
                        required
                      >
                        <option value="">Select</option>
                        <option value="Mr">Mr</option>
                        <option value="Ms">Ms</option>
                        <option value="Mrs">Mrs</option>
                      </select>
                      {errors[`Title_${index}`] && (
                        <p className="text-red-500 text-sm">
                          {errors[`Title_${index}`]}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="FirstName"
                        value={passenger.FirstName}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full border p-2 rounded-md"
                        required
                      />
                      {errors[`FirstName_${index}`] && (
                        <p className="text-red-500 text-sm">
                          {errors[`FirstName_${index}`]}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="LastName"
                        value={passenger.LastName}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full border p-2 rounded-md"
                        required
                      />
                      {errors[`LastName_${index}`] && (
                        <p className="text-red-500 text-sm">
                          {errors[`LastName_${index}`]}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold">
                        Gender
                      </label>
                      <select
                        name="Gender"
                        value={passenger.Gender}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full border p-2 rounded-md"
                        required
                      >
                        <option value="">Select</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other</option>
                      </select>
                      {errors[`Gender_${index}`] && (
                        <p className="text-red-500 text-sm">
                          {errors[`Gender_${index}`]}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        name="DateOfBirth"
                        value={passenger.DateOfBirth}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full border p-2 rounded-md"
                        required
                      />
                      {errors[`DateOfBirth_${index}`] && (
                        <p className="text-red-500 text-sm">
                          {errors[`DateOfBirth_${index}`]}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold">
                        Address
                      </label>
                      <input
                        type="text"
                        name="AddressLine1"
                        value={passenger.AddressLine1}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full border p-2 rounded-md"
                        required
                      />
                      {errors[`AddressLine1_${index}`] && (
                        <p className="text-red-500 text-sm">
                          {errors[`AddressLine1_${index}`]}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold">City</label>
                      <input
                        type="text"
                        name="City"
                        value={passenger.City}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full border p-2 rounded-md"
                        required
                      />
                      {errors[`City_${index}`] && (
                        <p className="text-red-500 text-sm">
                          {errors[`City_${index}`]}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold">
                        Contact Number
                      </label>
                      <input
                        type="text"
                        name="ContactNo"
                        value={passenger.ContactNo}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full border p-2 rounded-md"
                        required
                      />
                      {errors[`ContactNo_${index}`] && (
                        <p className="text-red-500 text-sm">
                          {errors[`ContactNo_${index}`]}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold">Email</label>
                      <input
                        type="email"
                        name="Email"
                        value={passenger.Email}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full border p-2 rounded-md"
                        required
                      />
                      {errors[`Email_${index}`] && (
                        <p className="text-red-500 text-sm">
                          {errors[`Email_${index}`]}
                        </p>
                      )}
                    </div>
                  </form>
                )}
              </div>
            ))}
          
      </div>

   
      


     

      
      </div>

    {/* Right Side: Price Summary */}
      <div className="w-full md:col-span-2 space-y-4 md:px-4">
        <div className="sticky top-0">
          <div className="border rounded shadow-lg">
            <div className="border rounded-t flex items-center px-3 py-2 bg-[#D1EAFF]">
              <h3>Price Summary</h3>
            </div>
            <div className="p-4 space-y-2">
              <div className="flex justify-between">
                <p>Travellers x {insuranceData?.PremiumList[0].PassengerCount}</p>
                <p className="flex items-center font-bold">
                  <FaRupeeSign /> {insuranceData?.Price.GrossFare}
                </p>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t pt-2">
                <p>Total</p>
                <p className="flex items-center">
                  <FaRupeeSign /> {insuranceData?.Price.GrossFare}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-3">
            <button
              className={`bg-[#DA5200] text-sm lg:text-lg text-white rounded-full w-1/2 md:w-[80%] py-2 flex justify-center items-center ${
                isLoading ? "opacity-75 cursor-not-allowed" : ""
              }`}
              onClick={handleBookInsurance}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Booking...
                </>
              ) : (
                "Book Insurance"
              )}
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <InsuranceConfirmationModal
          bookingResponse={bookingResponse}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default page;