'use client';
import { useSearchParams } from 'next/navigation';

import React, { useState,useEffect } from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaLock, FaRupeeSign, FaSpinner } from "react-icons/fa";

import { FaBusAlt } from "react-icons/fa";


const CheckoutPage = () => {
  const searchParams = useSearchParams();
  const [bookingData, setBookingData] = useState(null);
  const [boardingData, setBoardingData] = useState(null);
  const [error, setError] = useState(null);

  const passengers = [
    {
      Title: "",
      FirstName: "",
      LastName: "",
      Gender: "",
      DateOfBirth: "",
      PassportNo: "",
      PassportExpiry: "",
      AddressLine1: "",
      City: "",
      ContactNo: "",
      Email: ""
    }
  ];
  
  const fdatas = {
    data: {
      Fare: {
        OfferedFare: 12000
      }
    }
  };
  
  



  const [showForms, setShowForms] = useState(
    Array(passengers.length).fill(false)
  );
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const toggleFormVisibility = (index) => {
    setShowForms((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };


   // Retrieve data from localStorage or query parameter
   useEffect(() => {
    let source = 'none';

    // Try localStorage first
    try {
      const storedBookingData = localStorage.getItem('busBookingData');
      const storedBoardingData = localStorage.getItem('busBoardingData');
      if (storedBookingData && storedBoardingData) {
        const parsedBooking = JSON.parse(storedBookingData);
        const parsedBoarding = JSON.parse(storedBoardingData);
        setBookingData(parsedBooking);
        setBoardingData(parsedBoarding);
        console.log('Data from localStorage - busBookingData:', parsedBooking);
        console.log('Data from localStorage - busBoardingData:', parsedBoarding);
        source = 'localStorage';
        return;
      }
    } catch (error) {
      console.error('Error parsing localStorage data:', error);
      setError('Error retrieving data from localStorage');
    }

    // Fallback to query parameter
    const data = searchParams.get('data');
    if (data) {
      try {
        const decodedData = decodeURIComponent(data.replace(/\/$/, ''));
        console.log('Decoded Data:', decodedData);

        if (decodedData && decodedData.startsWith('{') && decodedData.endsWith('}')) {
          const parsed = JSON.parse(decodedData);
          setBookingData(parsed);
          console.log('Data from query:', parsed);
          source = 'query';

          // Store in localStorage for persistence
          localStorage.setItem('busBookingData', JSON.stringify(parsed));
          console.log('Stored query data in localStorage:', parsed);
        } else {
          setError('Invalid JSON format in query parameter');
          console.error('Invalid JSON format:', decodedData);
        }
      } catch (error) {
        setError('Error parsing query data: ' + error.message);
        console.error('Error parsing query data:', error.message, error.stack);
      }
    } else {
      setError('No booking data available');
      console.log('No query data available');
    }

    console.log('Data source:', source);
  }, [searchParams]);


  useEffect(() => {
    if (bookingData && boardingData && passengers[0].Email) {
      const fetchBusDetails = async () => {
        try {
          const response = await fetch('/api/bus-details', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingData),
          });
          const busTicket = await response.json();
          console.log('Bus Ticket:', busTicket);

          // Add boarding/dropping and passenger details
          busTicket.boarding_point = boardingData.BoardingPointsDetails[0]?.CityPointName;
          busTicket.dropping_point = boardingData.DroppingPointsDetails[0]?.CityPointName;
          busTicket.boarding_time = boardingData.BoardingPointsDetails[0]?.CityPointTime;
          busTicket.dropping_time = boardingData.DroppingPointsDetails[0]?.CityPointTime;
          busTicket.passenger_name = `${passengers[0].Title} ${passengers[0].FirstName} ${passengers[0].LastName}`;
          busTicket.email = passengers[0].Email;
          busTicket.booking_id = bookingData.TraceId;
          busTicket.route = `${busTicket.boarding_point} → ${busTicket.dropping_point}`;
          busTicket.date = new Date(busTicket.boarding_time).toLocaleDateString();
          busTicket.total_bdt = fdatas.data.Fare.OfferedFare.toString();
          busTicket.payment_status = 'Pending';

          // Send to Laravel
          await fetch('http://your-laravel-api/send-invoice', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(busTicket),
          });
          console.log('Invoice sent to Laravel');
        } catch (error) {
          setError('Error fetching bus details: ' + error.message);
          console.error('Error:', error);
        }
      };
      fetchBusDetails();
    }
  }, [bookingData, boardingData]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updated = [...passengers];
    updated[index][name] = value;
    // handle validation
    if (!value) {
      setErrors((prev) => ({
        ...prev,
        [`${name}_${index}`]: `${name} is required`,
      }));
    } else {
      const updatedErrors = { ...errors };
      delete updatedErrors[`${name}_${index}`];
      setErrors(updatedErrors);
    }
  };

  const handleBooking = () => {
    // setIsLoading(true);
    // handlebook();
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 3000);
  };



    
  return (
    <div className="grid max-w-[100rem] mx-auto justify-content-center grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <div className="FirstChild border rounded-lg shadow-lg md:col-span-2">
        <div className="bg-[#D5EEFE] py-3 px-4 rounded-t-lg">
          <div className="flex items-center gap-3">
            <div className="border-4 bg-white border-orange-100 h-10 w-10 flex justify-center items-center text-2xl rounded-full">
              <GiAirplaneDeparture />
            </div>
            <div>
              <span className="text-sm md:text-xl font-medium">
                Traveller Details
              </span>
            </div>
          </div>
        </div>
  
        {/* Route Section */}
      
        <div className="bg-white p-4 border-b shadow-md flex items-center justify-between">
          <div className="flex items-center gap-4">
            <FaBusAlt className="text-blue-600 text-2xl" />
            <div>
              <p className="text-lg font-bold text-gray-800">
                {boardingData?.BoardingPointsDetails[0]?.CityPointName || 'Unknown'} ➜{' '}
                {boardingData?.DroppingPointsDetails[0]?.CityPointName || 'Unknown'}
              </p>
              <p className="text-sm text-gray-500">Express AC Bus - Approx. 6h</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">
              Departure:{' '}
              {boardingData?.BoardingPointsDetails[0]?.CityPointTime
                ? new Date(boardingData.BoardingPointsDetails[0].CityPointTime).toLocaleTimeString()
                : 'N/A'}
            </p>
            <p className="text-sm text-gray-600">
              Arrival:{' '}
              {boardingData?.DroppingPointsDetails[0]?.CityPointTime
                ? new Date(boardingData.DroppingPointsDetails[0].CityPointTime).toLocaleTimeString()
                : 'N/A'}
            </p>
          </div>
        </div>
  
        {/* Passenger Form */}
        <div className="p-4">
          <h3 className="text-lg font-semibold">ADULT</h3>
  
          {passengers?.map((passenger, index) => (
            <div
              key={index}
              className="m-4 rounded-lg shadow-lg border-2 bg-white"
            >
              <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 border rounded-md shadow-lg">
                {[
                  { name: "Title", type: "select", options: ["Mr", "Ms", "Mrs"] },
                  { name: "FirstName", type: "text" },
                  { name: "LastName", type: "text" },
                  { name: "Gender", type: "select", options: ["1", "2", "3"] },
                  { name: "DateOfBirth", type: "date" },
                  { name: "PassportNo", type: "text" },
                  { name: "PassportExpiry", type: "date" },
                  { name: "AddressLine1", type: "text" },
                  { name: "City", type: "text" },
                  { name: "ContactNo", type: "text" },
                  { name: "Email", type: "email" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-[10px] font-bold text-gray-900 mb-1">
                      {field.name}
                    </label>
                    {field.type === "select" ? (
                      <select
                        name={field.name}
                        value={passenger[field.name]}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                      >
                        <option value="">Select {field.name}</option>
                        {field.options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        value={passenger[field.name]}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                      />
                    )}
                    {errors[`${field.name}_${index}`] && (
                      <p className="text-red-500 text-sm">
                        {errors[`${field.name}_${index}`]}
                      </p>
                    )}
                  </div>
                ))}
              </form>
            </div>
          ))}
        </div>
  
        <div className="p-4 text-gray-500 text-sm flex items-center gap-1">
          <FaLock /> Secure Booking & Data Protection
        </div>
      </div>
  
      {/* Right Summary Side */}
      <div className="w-full md:col-span-1 rightSide space-y-4 md:px-4">
        <div className="sticky top-0">
          <div className="priceBoxAndDetails border rounded shadow-lg">
            <div className="border rounded-t flex items-center px-3 py-2 bg-[#D1EAFF]">
              <h3>Price Summary</h3>
            </div>
            <div className="flex justify-between px-3 py-3 text-sm border-b">
              <p>Adult x {passengers?.length}</p>
              <p className="flex items-center font-bold text-xs">
                <FaRupeeSign />
                {fdatas?.data?.Fare?.OfferedFare || 0}
              </p>
            </div>
          </div>
  
          <div className="offersAndPromoCode border rounded shadow-lg">
            <div className="bg-[#2196F3] px-3 py-2 text-white">
              Offers and Promo Codes
            </div>
          </div>
  
          <div className="booking flex justify-center items-center mt-3">
            <button
              className={`bg-[#DA5200] text-sm lg:text-lg tracking-normal text-white rounded-full w-1/2 md:w-[80%] py-2 flex justify-center items-center ${
                isLoading ? "opacity-75 cursor-not-allowed" : ""
              }`}
              onClick={handleBooking}
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
  );
  
};

export default CheckoutPage;
