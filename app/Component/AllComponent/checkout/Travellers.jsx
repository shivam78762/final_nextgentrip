"use client";

import React, { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoAirplaneSharp } from "react-icons/io5";
import { IoIosThumbsUp } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { FaArrowDown, FaRupeeSign } from "react-icons/fa";
import { RiArrowDropDownLine, RiHospitalLine } from "react-icons/ri";
import { FaArrowDown19, FaCheck } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import Swal from 'sweetalert2';
import "swiper/css";
import Image from "next/image";
import axios from "axios";
import { apilink } from "../../common";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa";

const Page = ({ setActiveTab,fdatas, price }) => {

  const router = useRouter();

  const [user, setUser] = useState();
  const [cardDetailsError, setCardDetailsError] = useState(false);
  const [showAdult, setShowAdult] = useState(true);
  const [activeOption, setActiveOption] = useState("cards");
  const [passengers, setPassengers] = useState();
  // const [bookingResponse, setBookingResponse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [bookingResponse, setBookingResponse] = useState(null);
  const [userInfo,setUserinfo] = useState();

  const [showForms, setShowForms] = useState([true]); // Track visibility for each passenger form

  const [isLoading, setIsLoading] = useState(false); // State to manage loading





  useEffect(() => {
    
    const fetchUserData = async (userId) => {
      try {
        const { data } = await axios.get(`${apilink}/user/${userId}`);
        setUserinfo(data.user);
        

        // If you need to update passengers with user info
        if (data.user && passengers.length > 0) {
          const updatedPassengers = [...passengers];
          updatedPassengers[0] = {
            ...updatedPassengers[0],
            FirstName: data.user.name || "",
            Email: data.user.email || "",
          };
          setPassengers(updatedPassengers);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Failed to fetch user data", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    };

    // Get user ID from localStorage and fetch data
    const userid = JSON.parse(localStorage.getItem("NextGenUser"));
    if (!userid) {
      router.push("/user/login");
    } else {
      fetchUserData(userid);
    }
  }, []);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedPassengers = [...passengers];
    updatedPassengers[index][name] = value;
    setPassengers(updatedPassengers);

    // Clear errors for the current field
    if (errors[`${name}_${index}`]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[`${name}_${index}`];
        return newErrors;
      });
    }
  };


  
  // Toggle visibility of a specific passenger form
  const toggleFormVisibility = (index) => {
    const updatedShowForms = [...showForms];
    updatedShowForms[index] = !updatedShowForms[index];
    setShowForms(updatedShowForms);
  };

  // Validate all form fields for all passengers
  const validateAllForms = () => {
    const newErrors = {};

    passengers.forEach((passenger, index) => {
      // Required fields validation
      if (!passenger.Title) {
        newErrors[`Title_${index}`] = "Title is required.";
      }
      if (!passenger.FirstName) {
        newErrors[`FirstName_${index}`] = "First Name is required.";
      }
      if (!passenger.LastName) {
        newErrors[`LastName_${index}`] = "Last Name is required.";
      }
      if (!passenger.Gender) {
        newErrors[`Gender_${index}`] = "Gender is required.";
      }
      if (!passenger.DateOfBirth) {
        newErrors[`DateOfBirth_${index}`] = "Date of Birth is required.";
      }
      if (!passenger.PassportNo) {
        newErrors[`PassportNo_${index}`] = "Passport Number is required.";
      } else if (passenger.PassportNo.length !== 8) {
        newErrors[`PassportNo_${index}`] = "Passport Number must be 8 characters long.";
      }
      if (!passenger.PassportExpiry) {
        newErrors[`PassportExpiry_${index}`] = "Passport Expiry Date is required.";
      } else {
        const currentDate = new Date();
        const expiryDate = new Date(passenger.PassportExpiry);
        if (expiryDate <= currentDate) {
          newErrors[`PassportExpiry_${index}`] = "Passport Expiry Date must be in the future.";
        }
      }
      if (!passenger.AddressLine1) {
        newErrors[`AddressLine1_${index}`] = "Address is required.";
      }
      if (!passenger.City) {
        newErrors[`City_${index}`] = "City is required.";
      }
      if (!passenger.ContactNo) {
        newErrors[`ContactNo_${index}`] = "Contact Number is required.";
      } else if (!/^\d{10}$/.test(passenger.ContactNo)) {
        newErrors[`ContactNo_${index}`] = "Phone Number must be 10 digits long.";
      }
      if (!passenger.Email) {
        newErrors[`Email_${index}`] = "Email is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(passenger.Email)) {
        newErrors[`Email_${index}`] = "Invalid Email Address.";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };


  const now = new Date(Date.now())
const  addate = new Date(fdatas?.addat);
const differenceInMinutes = (now - addate) / (1000 * 60);
  useEffect(() => {
    const initialPassengers = () => {
      let passengers = [];
      if (fdatas?.data?.FareBreakdown) {
        fdatas.data.FareBreakdown.forEach((fare) => {
          for (let i = 0; i < fare.PassengerCount; i++) {
            passengers.push({
              Title: "Mr",
              FirstName: "",
              LastName: "",
              PaxType: fare.PassengerType, // 1 for Adult, 2 for Child, etc.
              DateOfBirth: "",
              Gender: 1,
              PassportNo: "",
              PassportExpiry: "",
              AddressLine1: "",
              City: "",
              CountryCode: "91",
              ContactNo: "",
              Nationality: "IN",
              Email: "",
              IsLeadPax: i === 0,
            });
          }
        });
      }
      ("Initial Passengers:", passengers);
      setPassengers(passengers);
    };

    initialPassengers();
  }, [fdatas]);










  const addTraveler = () => {
    const newTraveler = {
      Title: "Mr",
      FirstName: "",
      LastName: "",
      PaxType: 1,
      DateOfBirth: "",
      Gender: 1,
      PassportNo: "",
      PassportExpiry: "",
      AddressLine1: "",
      City: "",
      CountryCode: "91",
      ContactNo: "",
      Nationality: "IN",
      Email: "",
      IsLeadPax: false,
    };
    setPassengers([...passengers, newTraveler]);
  };

  const handlebook = async (e) => {
    e.preventDefault();

    const isValid = validateAllForms();

    if (!isValid) {
      alert("Please fill out all required fields and fix the errors before submitting.");
      return;
    }

    const fareBreakdown = fdatas?.data?.FareBreakdown;
    setIsLoading(true);

    // Prepare the payload
    const payload = {
      ResultIndex: fdatas?.ResultIndex,
      EndUserIp: fdatas?.ip,
      TraceId: fdatas?.traceid,
      fFareBreakdown: fareBreakdown,
      email: userInfo.email,
      user_id : userInfo.id,
      Passengers: passengers.map((passenger) => {
        const passengerFare = fareBreakdown.find(
          (fare) => fare.PassengerType === passenger.PaxType
        );

        const baseFarePerPassenger = passengerFare?.BaseFare / passengerFare?.PassengerCount;
        const taxPerPassenger = passengerFare?.Tax / passengerFare?.PassengerCount;

        return {
          Title: passenger.Title,
          FirstName: passenger.FirstName,
          LastName: passenger.LastName,
          PaxType: passenger.PaxType,
          DateOfBirth: passenger.DateOfBirth,
          Gender: parseInt(passenger.Gender, 10),
          PassportNo: passenger.PassportNo,
          PassportExpiry: passenger.PassportExpiry,
          AddressLine1: passenger.AddressLine1,
          City: passenger.City,
          CellCountryCode: passenger.CountryCode,
          CountryCode: "IN",
          ContactNo: passenger.ContactNo,
          Email: passenger.Email,
          IsLeadPax: passenger.IsLeadPax,
          Fare: {
            Currency: passengerFare?.Currency,
            BaseFare: baseFarePerPassenger,
            Tax: taxPerPassenger,
            YQTax: passengerFare?.YQTax,
            AdditionalTxnFeePub: fdatas?.data?.Fare.AdditionalTxnFeePub,
            AdditionalTxnFeeOfrd: fdatas?.data?.Fare.AdditionalTxnFeeOfrd,
            OtherCharges: fdatas?.data?.Fare.OtherCharges,
            Discount: fdatas?.data?.Fare.Discount,
            PublishedFare: fdatas?.data?.Fare.PublishedFare,
            OfferedFare: fdatas?.data?.Fare.OfferedFare,
            TdsOnCommission: fdatas?.data?.Fare.TdsOnCommission,
            TdsOnPLB: fdatas?.data?.Fare.TdsOnPLB,
            TdsOnIncentive: fdatas?.data?.Fare.TdsOnIncentive,
            ServiceFee: fdatas?.data?.Fare.ServiceFee,
          },
        };
      }),
    };



    const checkOutFlightDetail = JSON.parse(localStorage.getItem("checkOutFlightDetail"));
    const isLCC = checkOutFlightDetail?.IsLCC === true;
    const apiEndpoint = isLCC ? `${apilink}/flight-book-llc` : `${apilink}/flight-book`;

    try {
      const response = await axios.post(apiEndpoint, payload);
     

      if (response?.data?.status === 'success') {
        Swal.fire({
          icon: 'success',
          title: 'Booking Successful',
          text: `Your flight has been booked successfully! PNR: ${response.data.data.Response.PNR}`,
          confirmButtonText: 'OK',
        });
      } else {
        handleBookingError(response.data);
      }
    } catch (error) {
      console.error("Error booking flights:", error);

      if (error.response) {
        const errorData = error.response.data;

        // Handle duplicate booking error
        if (errorData?.status === "error" && errorData?.message?.includes("already been processed")) {
          Swal.fire({
            icon: 'warning',
            title: 'Duplicate Booking',
            text: `${errorData.message}${errorData.pnr ? ` PNR: ${errorData.pnr}` : ''}`,
            footer: errorData.action || 'Please check your booking history or start a new search.',
            confirmButtonText: 'OK',
          }).then(() => {
            // Optionally redirect to booking history
            // window.location.href = '/booking-history';
          });
        } 
        // Handle session expiration
        else if (errorData?.error?.includes("TraceId is expired")) {
          Swal.fire({
            icon: 'error',
            title: 'Session Expired',
            text: 'Your booking session has expired. Please search for flights again.',
            confirmButtonText: 'OK',
          }).then(() => {
            window.location.href = '/flight-search';
          });
        } 
        // Generic backend error
        else {
          Swal.fire({
            icon: 'error',
            title: 'Booking Failed',
            text: errorData?.message || 'An error occurred during booking.',
            confirmButtonText: 'OK',
          });
        }
      } else if (error.request) {
        Swal.fire({
          icon: 'error',
          title: 'Network Error',
          text: 'Please check your internet connection and try again.',
          confirmButtonText: 'OK',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Unexpected Error',
          text: 'An unexpected error occurred. Please try again.',
          confirmButtonText: 'OK',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookingError = (data) => {
    Swal.fire({
      icon: 'error',
      title: 'Booking Failed',
      text: data?.message || 'An error occurred while processing your booking.',
      confirmButtonText: 'OK',
    });
  };


  const closeModal = () => {
    setShowModal(false);
  };


  useEffect(() => {
    const userid = JSON.parse(localStorage.getItem("NextGenUser"));
    if (!userid) router.push("/user/login");

    const fetchuserData = async () => {
      const data = await axios.get(`${apilink}/user/${userid}`);
      if (data.data.success) {
        setUser(data.data.user);
      }
      else{
    
      }
    };
    fetchuserData();
  }, []);



  const formatDate = (dateStr) => {
    const targetDate = new Date(dateStr);
    const options = { weekday: "short", day: "2-digit", month: "short", year: "numeric" };
    const formattedDate = targetDate.toLocaleDateString("en-US", options);
    const [weekday, month, day, year] = formattedDate.split(/[\s,]+/);
    return `${weekday}-${day} ${month} ${year}`;
  };
  const formatDateTime = (dateTimeStr) => {
    const date = new Date(dateTimeStr);

    // Format the date
    const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    // Format the time
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${ampm}`;

    return { formattedDate, formattedTime };
  };




  const BookingConfirmationModal = ({ bookingResponse, onClose }) => {
    const { PNR, BookingId, Passenger, FlightItinerary, traceId, token, userIp } = bookingResponse;
    const passenger = Passenger[0]; // Assuming there's at least one passenger
    const segment = FlightItinerary.Segments[0]; // Assuming there's at least one segment

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white max-h-[70vh] overflow-y-auto p-6 rounded-lg shadow-lg w-11/12 max-w-2xl transform transition-all duration-300 scale-95 hover:scale-100">
          <h2 className="text-2xl font-bold text-center mb-4 text-[#DA5200]">🎉 Booking Confirmed!</h2>


          <table className="w-full mb-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Field</th>
                <th className="p-2 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-semibold">PNR</td>
                <td className="p-2 text-blue-600">{PNR}</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-semibold">Booking ID</td>
                <td className="p-2 text-blue-600">{BookingId}</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-semibold">Passenger Name</td>
                <td className="p-2 text-blue-600">{passenger.FirstName} {passenger.LastName}</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-semibold">Contact Number</td>
                <td className="p-2 text-blue-600">{passenger.ContactNo}</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-semibold">Email</td>
                <td className="p-2 text-blue-600">{passenger.Email}</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-semibold">Trace ID</td>
                <td className="p-2 text-blue-600">{traceId}</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-semibold">Token</td>
                <td className="p-2 text-blue-600">{token}</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-semibold">User IP</td>
                <td className="p-2 text-blue-600">{userIp}</td>
              </tr>
            </tbody>
          </table>


          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">✈️ Flight Detailscccc</h3>
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 text-left">Field</th>
                  <th className="p-2 text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Airline</td>
                  <td className="p-2">{segment.Airline.AirlineName} ({segment.Airline.AirlineCode})</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Flight Number</td>
                  <td className="p-2">{segment.Airline.FlightNumber}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Departure</td>
                  <td className="p-2">
                    {segment.Origin.Airport.CityName} ({segment.Origin.Airport.AirportCode}) at {new Date(segment.Origin.DepTime).toLocaleString()}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Arrival</td>
                  <td className="p-2">
                    {segment.Destination.Airport.CityName} ({segment.Destination.Airport.AirportCode}) at {new Date(segment.Destination.ArrTime).toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>


          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              🎟️ Your ticket will be sent to your email ID. Please take a screenshot of this page for your reference.
            </p>
          </div>


          <div className="mt-6 flex justify-center">
            <button
              className="bg-[#DA5200] text-white px-6 py-2 rounded-full hover:bg-[#C44A00] transition-all duration-300"
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
    <div className="">
      <div className="md:grid md:grid-cols-6 gap-5 mt-3">
        {/* Left Side: Flight and Traveler Details */}
        <div className="col-span-4 leftSide space-y-6">
          {/* Flight Details Section */}
          <div className="FirstChild border rounded-lg shadow-lg">
            <div className="bg-[#D5EEFE] py-3 px-4 rounded-t-lg">
              <div className="flex items-center gap-3">
                <div className="border-4 bg-white border-orange-100 h-10 w-10 flex justify-center items-center text-2xl rounded-full">
                  <GiAirplaneDeparture />
                </div>
                <div className="flex justify-between gap-10">
                <span className="text-sm md:text-xl font-medium">Flight Detail</span>
                <span className="text-sm md:text-xl font-medium text-red-700">
                  { differenceInMinutes>11  && <span>Token is Expire Search flight again</span> }
                </span>
                </div>
              </div>
            </div>



            <div className=" ">
              <div className=" rounded-sm border  px-3 py-4 relative space-y-5">
                <h3 className="bg-gray-600 text-white text-xs w-fit px-3 font-bold rounded-br-xl absolute top-0 left-0">
                  Depart
                </h3>
                <div className="flex items-center gap-3 text-md md:text-xl">
                  <IoAirplaneSharp className=" font-bold -rotate-45" />
                  <div className="flex items-center gap-1">
                    <h4 className="">{fdatas?.data?.Segments[0][0]?.Origin?.Airport?.CityName} - {fdatas?.data?.Segments[0][0]?.Destination?.Airport?.CityName}  </h4>
                    <p className="border-s-2 border-black px-2  text-sm">
                      {formatDate(fdatas?.data?.Segments[0][0]?.Origin?.DepTime)}
                    </p>
                  </div>
                </div>
                <div className="flex  gap-5 flex-col  md:flex-row items-start  justify-between space-y-4 lg:space-y-0 lg:space-x-4">
                  <div className="flex items-center gap-4 ">
                    <img
                      src={`/images/${fdatas?.data?.Segments[0][0]?.Airline?.AirlineCode}.png`}
                      alt=""
                      className="h-10 w-10 rounded-lg"
                    />
                    <div>
                      <p className="text-sm md:text-lg">{fdatas?.data?.Segments[0][0]?.Airline?.AirlineName}</p>
                      <p className="text-xs">{fdatas?.data?.Airline?.Segments[0][0]?.AirlineCode}-{fdatas?.data?.Segments[0][0]?.Airline?.FlightNumber}</p>
                      <p className="text-xs">{[
                        "All",
                        "Economy",
                        "PremiumEconomy",
                        "Business",
                        "PremiumBusiness",
                        "First",
                      ].filter((inf, ind) => { ind + 1 == fdatas?.data?.Segments[0][0]?.CabinClass })}</p>
                    </div>
                  </div>

                  <div className="flex  w-full  gap-2 justify-between md:w-[70%] md:px-3">
                    <div className="flex flex-col gap-1  items-start">
                      <h4 className="font-extrabold text-md md:text-xl">
                        {formatDateTime(fdatas?.data?.Segments[0][0]?.Origin?.DepTime).formattedTime}
                      </h4>
                      <div className="flex flex-col text-xs ">
                        <span className="font-bold text-nowrap">
                          {fdatas?.data?.Segments[0][0]?.Origin?.Airport?.CityName}  ({fdatas?.data?.Segments[0][0]?.Origin?.Airport?.AirportCode} )
                        </span>
                        <span>{formatDate(fdatas?.data?.Segments[0][0]?.Origin?.DepTime)}</span>
                        <span>Terminal -1</span>
                      </div>
                    </div>

                    <div className="flex  flex-col gap-4 items-center">
                      <p className="text-xs">{Math.floor(fdatas?.data?.Segments[0][0]?.Duration / 60)}h-{fdatas?.data?.Segments[0][0]?.Duration % 60}m</p>
                      <div className="border-t-2 border-black border-dotted w-full flex justify-center relative">
                        <div className="absolute -top-3 bg-white text-lg rounded-full">
                          <GiAirplaneDeparture />
                        </div>
                      </div>
                      {fdatas?.data?.IsRefundable ? <span className="border border-green-400 px-6 md:px-8 m-0 py-1 rounded-full font-bold text-[0.5rem]">
                        REFUNDABLE
                      </span> : <span className="border border-red-400 px-6 md:px-8 m-0 py-1 rounded-full font-bold text-[0.5rem]">
                        NO REFUNDABLE
                      </span>}

                    </div>

                    <div className="flex flex-col gap-1 items-start">
                      <h4 className="font-extrabold text-sm md:text-xl">
                        {formatDateTime(fdatas?.data?.Segments[0][0]?.Destination?.ArrTime).formattedTime}
                      </h4>
                      <div className="flex flex-col text-xs ">
                        <span className="text-nowrap font-bold">
                          {fdatas?.data?.Segments[0][0]?.Destination?.Airport?.CityName}  ({fdatas?.data?.Segments[0][0]?.Destination?.Airport?.AirportCode} )
                        </span>
                        <span>{formatDate(fdatas?.data?.Segments[0][0]?.Destination?.ArrTime)}</span>
                        <span>Terminal -2</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start gap-5">
                  <h3 className="bg-gray-200  font-bold w-fit text-gray-800 rounded-full px-5 text-xs py-1">
                    saver
                  </h3>
                  <p className="text-xs text-gray-400">Fare Rules Baggage</p>
                </div>
                {/* payment page part */}
                <div className="border-2 ">
                  <div className="p-2 bg-gray-50">
                    <div className="flex justify-between items-center mx-20  text-sm font-semibold">
                      <p className="text-gray-400">Airline</p>
                      <p className="text-gray-400">Check-in-Baggage</p>
                      <p className="text-gray-400">Cabin Baggage</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start p-2">
                    <div className="flex justify-start items-center w-[35%] gap-6">
                      <div className="flex  items-center   md:bg-transparent px-3 rounded-t-lg md:rounded-t-none py-4 md:py-0">
                        <img
                          src={`/images/${fdatas?.data?.Segments[0][0]?.Airline?.AirlineCode}.png`}
                          alt="refund policy"
                          className="h-7 w-h-7 rounded-lg"
                        />
                      </div>
                      <div className="">

                        <h6 className=" text-black text-sm font-semibold capitalize">
                          {fdatas?.data?.Segments[0][0]?.Airline?.AirlineName}
                        </h6>
                        <p className="text-gray-500 text-[12px] font-semibold">
                          {fdatas?.data?.Segments[0][0]?.Airline?.AirlineCode}-{fdatas?.data?.Segments[0][0]?.Airline?.FlightNumber}
                        </p>
                      </div>
                    </div>
                    <div className="text-black text-sm font-semibold capitalize  w-[28%]">
                      {fdatas?.data?.Segments[0][0]?.Baggage}
                    </div>
                    <div className="text-black text-sm font-semibold capitalize w-[20%]">
                      {fdatas?.data?.Segments[0][0]?.CabinBaggage}
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>


          <div className="FirstChild border rounded-lg shadow-lg">
            <div className="bg-[#D5EEFE] py-3 px-4 rounded-t-lg">
              <div className="flex items-center gap-3">
                <div className="border-4 bg-white border-orange-100 h-10 w-10 flex justify-center items-center text-2xl rounded-full">
                  <GiAirplaneDeparture />
                </div>
                <div>
                <span className="text-sm md:text-xl font-medium">Traveller Details</span> 
                
                </div>

              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">ADULT</h3>


              {passengers?.map((passenger, index) => (
                <div key={index} className="m-4 rounded-lg shadow-lg border-2">
                  <div className="flex items-center justify-between p-4">
                    <div className="flex gap-4 items-center">
                      <input type="checkbox" className="h-6 w-6" />
                      <h3 className="text-lg font-semibold">
                        {passenger.Title} {passenger.FirstName}
                      </h3>
                    </div>
                    <button onClick={() => toggleFormVisibility(index)}>
                      <RiArrowDropDownLine className="text-4xl" />
                    </button>
                  </div>

                  {showForms[index] && (
                    <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 border rounded-md shadow-lg">

                      <div>
                        <label className="block text-[10px] font-bold text-gray-900 mb-1">Title</label>
                        <select
                          name="Title"
                          value={passenger.Title}
                          onChange={(e) => handleChange(e, index)}
                          className="w-full border border-gray-300 rounded-md p-2"
                          required
                        >
                          <option value="">Select Title</option>
                          <option value="Mr">Mr</option>
                          <option value="Ms">Ms</option>
                          <option value="Mrs">Mrs</option>
                        </select>
                        {errors[`Title_${index}`] && (
                          <p className="text-red-500 text-sm">{errors[`Title_${index}`]}</p>
                        )}
                      </div>


                      <div>
                        <label className="block text-[10px] font-bold text-gray-900 mb-1">First Name</label>
                        <input
                          type="text"
                          name="FirstName"
                          value={passenger.FirstName}
                          onChange={(e) => handleChange(e, index)}
                          className="w-full border border-gray-300 rounded-md p-2"
                          required
                        />
                        {errors[`FirstName_${index}`] && (
                          <p className="text-red-500 text-sm">{errors[`FirstName_${index}`]}</p>
                        )}
                      </div>


                      <div>
                        <label className="block text-[10px] font-bold text-gray-900 mb-1">Last Name</label>
                        <input
                          type="text"
                          name="LastName"
                          value={passenger.LastName}
                          onChange={(e) => handleChange(e, index)}
                          className="w-full border border-gray-300 rounded-md p-2"
                          required
                        />
                        {errors[`LastName_${index}`] && (
                          <p className="text-red-500 text-sm">{errors[`LastName_${index}`]}</p>
                        )}
                      </div>


                      <div>
                        <label className="block text-[10px] font-bold text-gray-900 mb-1">Gender</label>
                        <select
                          name="Gender"
                          value={passenger.Gender}
                          onChange={(e) => handleChange(e, index)}
                          className="w-full border border-gray-300 rounded-md p-2"
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="1">Male</option>
                          <option value="2">Female</option>
                          <option value="3">Other</option>
                        </select>
                        {errors[`Gender_${index}`] && (
                          <p className="text-red-500 text-sm">{errors[`Gender_${index}`]}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-gray-900 mb-1">Date of Birth</label>
                        <input
                          type="date"
                          name="DateOfBirth"
                          value={passenger.DateOfBirth}
                          onChange={(e) => handleChange(e, index)}
                          className="w-full border border-gray-300 rounded-md p-2"
                          required
                        />
                        {errors[`DateOfBirth_${index}`] && (
                          <p className="text-red-500 text-sm">{errors[`DateOfBirth_${index}`]}</p>
                        )}
                      </div>


                      <div>
                        <label className="block text-[10px] font-bold text-gray-900 mb-1">Passport No</label>
                        <input
                          type="text"
                          name="PassportNo"
                          value={passenger.PassportNo}
                          onChange={(e) => handleChange(e, index)}
                          className="w-full border border-gray-300 rounded-md p-2"
                          required
                        />
                        {errors[`PassportNo_${index}`] && (
                          <p className="text-red-500 text-sm">{errors[`PassportNo_${index}`]}</p>
                        )}
                      </div>


                      <div>
                        <label className="block text-[10px] font-bold text-gray-900 mb-1">Passport Expiry</label>
                        <input
                          type="date"
                          name="PassportExpiry"
                          value={passenger.PassportExpiry}
                          onChange={(e) => handleChange(e, index)}
                          className="w-full border border-gray-300 rounded-md p-2"
                          required
                        />
                        {errors[`PassportExpiry_${index}`] && (
                          <p className="text-red-500 text-sm">{errors[`PassportExpiry_${index}`]}</p>
                        )}
                      </div>


                      <div>
                        <label className="block text-[10px] font-bold text-gray-900 mb-1">Address</label>
                        <input
                          type="text"
                          name="AddressLine1"
                          value={passenger.AddressLine1}
                          onChange={(e) => handleChange(e, index)}
                          className="w-full border border-gray-300 rounded-md p-2"
                          required
                        />
                        {errors[`AddressLine1_${index}`] && (
                          <p className="text-red-500 text-sm">{errors[`AddressLine1_${index}`]}</p>
                        )}
                      </div>


                      <div>
                        <label className="block text-[10px] font-bold text-gray-900 mb-1">City</label>
                        <input
                          type="text"
                          name="City"
                          value={passenger.City}
                          onChange={(e) => handleChange(e, index)}
                          className="w-full border border-gray-300 rounded-md p-2"
                          required
                        />
                        {errors[`City_${index}`] && (
                          <p className="text-red-500 text-sm">{errors[`City_${index}`]}</p>
                        )}
                      </div>


                      <div>
                        <label className="block text-[10px] font-bold text-gray-900 mb-1">Contact Number</label>
                        <input
                          type="text"
                          name="ContactNo"
                          value={passenger.ContactNo}
                          onChange={(e) => handleChange(e, index)}
                          className="w-full border border-gray-300 rounded-md p-2"
                          required
                        />
                        {errors[`ContactNo_${index}`] && (
                          <p className="text-red-500 text-sm">{errors[`ContactNo_${index}`]}</p>
                        )}
                      </div>


                      <div>
                        <label className="block text-[10px] font-bold text-gray-900 mb-1">Email</label>
                        <input
                          type="email"
                          name="Email"
                          value={passenger.Email}
                          onChange={(e) => handleChange(e, index)}
                          className="w-full border border-gray-300 rounded-md p-2"
                          required
                        />
                        {errors[`Email_${index}`] && (
                          <p className="text-red-500 text-sm">{errors[`Email_${index}`]}</p>
                        )}
                      </div>
                    </form>
                  )}
                </div>
              ))}



              {/* Add Traveler Button */}
              <button
                onClick={addTraveler}
                className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
              >
                Add Traveler
              </button>



            </div>




            <div className="p-4 text-gray-500 text-sm flex items-center gap-1">
              <FaLock /> Secure Booking & Data Protection
            </div>
          </div>
        </div>

        {/* Right Side: Price Summary and Offers */}
        <div className="w-full md:col-span-2 rightSide space-y-4 md:px-4">
          <div className="sticky top-0">
            {/* Price Summary */}
            <div className="priceBoxAndDetails border rounded shadow-lg">
              <div className="border rounded-t flex items-center px-3 py-2 bg-[#D1EAFF]">
                <h3>Price Summary</h3>
              </div>
              <div className="flex justify-between px-3 py-3 text-sm border-b">
                <p>Adult x {passengers?.length}</p>
                <p className="flex items-center font-bold text-xs">
                  <FaRupeeSign />
                  {fdatas?.data?.Fare?.OfferedFare}
                </p>
              </div>
              {/* Other price details */}
            </div>

            {/* Offers and Promo Codes Section */}
            <div className="offersAndPromoCode border rounded shadow-lg">
              <div className="bg-[#2196F3] px-3 py-2 text-white">Offers and Promo Codes</div>
              {/* Offers rendering */}
            </div>

            {/* Continue Booking Button */}
            <div className="booking flex justify-center items-center mt-3">
            <button
                className={`bg-[#DA5200] text-sm lg:text-lg tracking-normal text-white rounded-full w-1/2 md:w-[80%] py-2 flex justify-center items-center ${
                    isLoading ? "opacity-75 cursor-not-allowed" : ""
                }`}
                onClick={handlebook}
                disabled={isLoading} 
            >
                {isLoading ? (
                    <>
                        <FaSpinner className="animate-spin mr-2" /> 
                        Booking...
                    </>
                ) : (
                    "Continue Booking"
                )}
            </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <BookingConfirmationModal
          bookingResponse={bookingResponse}
          onClose={closeModal}
        />
      )}

    </div>
  );
};

export default Page;