"use client";
import React, { useState, useRef, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { LuLogOut, LuUsers2 } from "react-icons/lu";
import { AiOutlineLogout } from "react-icons/ai";
import Image from "next/image";
import { FaCheckCircle, FaPencilAlt, FaPlus, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import axios from "axios";
import { apilink } from "../Component/common";
import { toast, Bounce } from "react-toastify";

const ProfilePage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(null);
  const myBookingsRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [activeItem, setActiveItem] = useState("profile");
  const [userinfo, setUserinfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [booking, setBookings] = useState([]);
  const [cancel_booking, setcancel_booking] = useState([]);

  const [newbooking, setnewBookings] = useState([]);

  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);
  const [cancellationData, setCancellationData] = useState(null);

  // Profile form states
  const [formData, setFormData] = useState({
    fullName: "",
    birthday: "",
    gender: "",
    nationality: "",
    maritalStatus: "",
    meal: "",
    preference: "",
    relationship: "",
    address: "",
    issueingCountry: "",
    airline: "",
    pincode: "",
    state: "",
  });

  // Refs for scroll navigation
  const profileRef = useRef(null);
  const loginDetailsRef = useRef(null);
  const coTravellersRef = useRef(null);
  const logoutRef = useRef(null);

  // Open/close popup handlers
  const openPopup = (type) => setIsPopupOpen(type);
  const closePopup = () => setIsPopupOpen(null);

  // Save profile data
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem("NextGenUser"));
      const { data } = await axios.put(`${apilink}/user/${user}`, formData);
      toast.success("Profile updated successfully!", {
        position: "top-right",
        autoClose: 3000,
        transition: Bounce,
      });
      closePopup();
    } catch (error) {
      toast.error("Failed to update profile", {
        position: "top-right",
        autoClose: 3000,
        transition: Bounce,
      });
    }
  };


  const fetchCancellationCharges = async (booking) => {

    try {
      const response = await fetch(`${apilink}/flight-cancellation-charges`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // booking?.data?.[0].user_ip,
        body: JSON.stringify({
          BookingId: String(cancel_booking.BookingId),
          RequestType: "1",
          EndUserIp: cancel_booking.EndUserIp,
          TokenId: cancel_booking.TokenId,
        }),
      });

      const data = await response.json();
      if (data.Response.ResponseStatus === 1) {
        setCancellationData({
          refundAmount: data.Response.RefundAmount,
          cancellationCharge: data.Response.CancellationCharge,
          currency: data.Response.Currency,
        });
        setSelectedBooking(booking);
        setModalOpen(true);
      } else {
        alert("Failed to fetch cancellation details. Try again.");
      }
    } catch (error) {
      console.error("Error fetching cancellation charges:", error);
    }
  };

  const handleCancelBooking = (bookingId) => {
    alert(`Booking ${bookingId} has been cancelled.`);
    setCancellationData((prevData) => {
      const newData = { ...prevData };
      delete newData[bookingId]; // Remove cancellation data after cancellation
      return newData;
    });
    setSelectedBooking(null);
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };



  const handleItemClick = (item, ref) => {
    setActiveItem(item);
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTabChange = (index) => setActiveTab(index);




  const handleLogout = () => {
    localStorage.removeItem("NextGenUser");
    router.push("/");
    toast.success("Logged out successfully", {
      position: "top-right",
      autoClose: 3000,
      transition: Bounce,
    });
  };




  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("NextGenUser"));
    if (!user) {
      router.push("/user/login");
      return;
    }

    const fetchUserData = async () => {
      try {
        const { data } = await axios.get(`${apilink}/user/${user}`);
        setUserinfo(data.user);

        if (data.user) {
          setFormData(prev => ({
            ...prev,
            fullName: data.user.name || "",
            email: data.user.email || ""
          }));
        }
      } catch (error) {
        toast.error("Failed to fetch user data", {
          position: "top-right",
          autoClose: 3000,
          transition: Bounce,
        });
      }
    };


    const fetchBookings = async () => {
      try {

        const { data } = await axios.get(`${apilink}/user-bookings/${user}`);

        if (data.status === "success") {
          setBookings(data);
        }
      } catch (error) {
        toast.error("Failed to fetch bookings", {
          position: "top-right",
          autoClose: 3000,
          transition: Bounce,
        });
      }
    };


    fetchUserData();
    fetchBookings();


  }, [router]);

  // console.log("bookingDatas", booking?.data?.[0].pnr);

  const fetchBookingDetails = async () => {
    setLoading(true);
    setError(null);

    try {

      console.log("bookingDatas", booking);

      const payload = {
        EndUserIp: booking?.data?.[0].user_ip,
        TraceId: booking?.data?.[0].trace_id,
        TokenId: booking?.data?.[0].token,
        PNR: booking?.data?.[0].pnr,
        BookingId: parseInt(booking?.data?.[0].booking_id),
      };

      setcancel_booking({
        EndUserIp: booking?.data?.[0].user_ip,
        TraceId: booking?.data?.[0].trace_id,
        TokenId: booking?.data?.[0].token,
        PNR: booking?.data?.[0].pnr,
        BookingId: parseInt(booking?.data?.[0].booking_id),
      })





      const response = await axios.post(`${apilink}/get-booking-details`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );


      const bookingData = response.data.data.FlightItinerary;
      setnewBookings([
        {
          id: bookingData.BookingId,
          flight_name: `${bookingData.AirlineCode} - ${bookingData.Segments[0].Airline.AirlineName}`,
          departure_from: `${bookingData.Origin} (${bookingData.Segments[0].Origin.Airport.AirportName})`,
          arrival_to: `${bookingData.Destination} (${bookingData.Segments[0].Destination.Airport.AirportName})`,
          booking_id: bookingData.BookingId,
          pnr: bookingData.PNR,
          flight_date: bookingData.Segments[0].Origin.DepTime.split("T")[0],
          departure_time: bookingData.Segments[0].Origin.DepTime.split("T")[1].slice(0, 5),
          arrival_time: bookingData.Segments[0].Destination.ArrTime.split("T")[1].slice(0, 5),
          duration: bookingData.Segments[0].Duration,
          passenger_name: `${bookingData.Passenger[0].Title} ${bookingData.Passenger[0].FirstName} ${bookingData.Passenger[0].LastName}`,
          contact_no: bookingData.Passenger[0].ContactNo,
          email: bookingData.Passenger[0].Email,
          base_fare: bookingData.Fare.BaseFare,
          tax: bookingData.Fare.Tax,
          total_fare: bookingData.Fare.PublishedFare,
          baggage: bookingData.Passenger[0].SegmentAdditionalInfo[0].Baggage,
          response: bookingData.Status === 5 ? "Confirmed" : "Pending", // Assuming Status 5 is Confirmed
        },
      ]);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to fetch booking details"
      );
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}

          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 text-center">
                <div className="mx-auto w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/user-profile.webp"

                    alt="Profile"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {"Welcome"}
                </h3>
                <p className="text-sm text-gray-500 mt-1">PERSONAL PROFILE</p>
              </div>

              <nav className="mt-2">
                <ul className="space-y-1 p-2">
                  {[
                    { label: "Profile", ref: profileRef, id: "profile" },
                    { label: "Login Details", ref: loginDetailsRef, id: "loginDetails" },
                    { label: "Co-Travellers", ref: coTravellersRef, id: "coTravellers" },
                    { label: "My Bookings", ref: myBookingsRef, id: "myBookings" },
                    { label: "Logout", ref: logoutRef, id: "logout", action: handleLogout },
                  ].map((item) => (
                    <>
                      <li key={item.id}>
                        <button
                          onClick={() => item.action ? item.action() : handleItemClick(item.id, item.ref)}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors ${activeItem === item.id ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"}`}
                        >

                          <span className="font-medium">{item.label}</span>
                        </button>
                      </li>
                    </>
                  ))}
                </ul>
              </nav>
            </div>
          </div>


          {/* Main Content */}
          <div className="w-full md:w-3/4 space-y-6">
            {/* Profile Completion Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">Complete your Profile</h3>
                <span className="text-blue-600 font-medium">60%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <p className="mt-3 text-gray-600">
                Get the best out of Next Gen by adding the remaining details!
              </p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: <FaCheckCircle className="text-green-500" />, text: "Verified mobile Number" },
                  { icon: <FaCheckCircle className="text-green-500" />, text: "Verified Email ID" },
                  { icon: <FaPlus className="text-blue-500" />, text: "Complete Basic Info" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium text-blue-600">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>



            {/* Profile Section */}
            <div ref={profileRef} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Profile</h3>
                  <p className="text-gray-600 mt-1">Basic info, for a faster booking experience</p>
                </div>
                <button
                  onClick={() => openPopup("edit")}
                  className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <FaPencilAlt />
                  Edit
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "NAME", value: formData.fullName || "+ Add", key: "fullName" },
                  { label: "DATE OF BIRTH", value: formData.birthday || "+ Add", key: "birthday" },
                  { label: "GENDER", value: formData.gender || "+ Add", key: "gender" },
                  { label: "MARITAL STATUS", value: formData.maritalStatus || "+ Add", key: "maritalStatus" },
                  { label: "ADDRESS", value: formData.address || "+ Add", key: "address" },
                  { label: "PINCODE", value: formData.pincode || "+ Add", key: "pincode" },
                ].map((item) => (
                  <div key={item.key} className="p-4 border-b hover:bg-gray-50 transition-colors">
                    <p className="text-xs text-gray-500 uppercase">{item.label}</p>
                    <p className="text-sm font-medium mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Login Details Section */}
            <div ref={loginDetailsRef} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Login Details</h3>
              <p className="text-gray-600 mt-1">
                Manage your mobile number, email address and password
              </p>

              <div className="mt-6 space-y-4">
                {[
                  { label: "NAME", value: userinfo?.name || "N/A" },
                  { label: "EMAIL ID", value: userinfo?.email || "N/A" },
                  { label: "PASSWORD", value: "*******" },
                ].map((item, index) => (
                  <div key={index} className="p-4 border-b hover:bg-gray-50 transition-colors">
                    <p className="text-xs text-gray-500 uppercase">{item.label}</p>
                    <p className="text-sm font-medium mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>



            <div ref={myBookingsRef} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">My Bookings</h3>
                  <p className="text-gray-600 mt-1">
                    View and manage your past and upcoming bookings
                  </p>
                </div>
                <button
                  onClick={fetchBookingDetails}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Get Booking Details"}
                </button>
              </div>


              <div className="mt-6 space-y-4">
  {booking.length > 0 ? (
    booking.map((booking) => (
      <div key={booking.id} className="p-4 border-b hover:bg-gray-50 transition-colors">
        <p className="text-sm font-medium text-gray-800">
          {booking.flight_name || "Flight Booking"} - {booking.departure_from || "N/A"} to {booking.arrival_to || "N/A"}
        </p>
        <p className="text-xs text-gray-500">
          Booking ID: {booking.booking_id} | PNR: {booking.pnr} | Date: {booking.flight_date || "N/A"}
        </p>
        <p
          className="text-xs mt-1"
          style={{ color: booking.response === "Confirmed" ? "#10B981" : "#F59E0B" }}
        >
          {booking.response || "Confirmed"} {/* Default to "Confirmed" if response is null */}
        </p>
      </div>
    ))
  ) : (
    <p className="text-gray-600 text-sm">
      
    </p>
  )}
</div>
<div className="mt-6 space-y-4">
        {error && <p className="text-red-600 text-sm">{error}</p>}
        {newbooking.length > 0 ? (
          newbooking.map((booking) => (

                    <div
                      key={booking.id}
                      className="p-4 border rounded-lg bg-gray-50 shadow-sm hover:bg-gray-100 transition-colors"
                    >

                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-gray-800">
                          {booking.flight_name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {booking.departure_from} → {booking.arrival_to}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Date: {booking.flight_date} | Departure: {booking.departure_time} | Arrival: {booking.arrival_time} | Duration: {Math.floor(booking.duration / 60)}h {booking.duration % 60}m
                        </p>
                        <p
                          className="text-xs mt-1 font-medium"
                          style={{
                            color: booking.response === "Confirmed" ? "#10B981" : "#F59E0B",
                          }}
                        >
                          Status: {booking.response}
                        </p>
                      </div>


                      <div className="mb-4">
                        <h5 className="text-md font-medium text-gray-700">Passenger Details</h5>
                        <p className="text-sm text-gray-600">
                          Name: {booking.passenger_name}
                        </p>
                        <p className="text-sm text-gray-600">
                          Contact: {booking.contact_no} | Email: {booking.email}
                        </p>
                      </div>


                      <div className="mb-4">
                        <h5 className="text-md font-medium text-gray-700">Fare Details</h5>
                        <p className="text-sm text-gray-600">
                          Base Fare: ₹{booking.base_fare} | Tax: ₹{booking.tax} | Total: ₹{booking.total_fare}
                        </p>
                      </div>


                  

             

                      <div>
                        <h5 className="text-md font-medium text-gray-700">Additional Info</h5>
                        <p className="text-sm text-gray-600">
                          Booking ID: {booking.booking_id} | PNR: {booking.pnr}
                        </p>
                        <p className="text-sm text-gray-600">
                          Baggage Allowance: {booking.baggage}
                        </p>
                      </div>

                      <button
            onClick={() => fetchCancellationCharges(booking)}
            className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600 transition"
          >
            Cancel
          </button>


                      {selectedBooking === booking.id && cancellationData[booking.id] && (
            <div className="mt-4 p-4 border border-red-300 bg-red-50 rounded">
              <h5 className="text-md font-medium text-red-600">Cancellation Charges</h5>
              <p className="text-sm text-gray-700">
                Refund Amount: <span className="font-medium text-green-600">
                  {cancellationData[booking.id].currency} {cancellationData[booking.id].refundAmount}
                </span>
              </p>
              <p className="text-sm text-gray-700">
                Cancellation Charge: <span className="font-medium text-red-600">
                  {cancellationData[booking.id].currency} {cancellationData[booking.id].cancellationCharge}
                </span>
              </p>
              <button
                onClick={() => handleCancelBooking(booking.id)}
                className="mt-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
              >
                Confirm Cancel
              </button>
            </div>
          )}
                    </div>




                  ))
                ) : (
                  <p className="text-gray-600 text-sm">
                    No bookings found. Click "Get Booking Details" to fetch your booking!
                  </p>
                )}
              </div>


              {modalOpen && cancellationData && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold text-gray-800">Cancellation Charges</h3>
            <p className="text-sm text-gray-600 mt-2">
              Refund Amount: <span className="font-medium text-green-600">{cancellationData.currency} {cancellationData.refundAmount}</span>
            </p>
            <p className="text-sm text-gray-600">
              Cancellation Charge: <span className="font-medium text-red-600">{cancellationData.currency} {cancellationData.cancellationCharge}</span>
            </p>
            <div className="mt-4 flex justify-end space-x-3">
              <button onClick={() => setModalOpen(false)} className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400 transition">
                Close
              </button>
              <button onClick={handleCancelBooking} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                Confirm Cancel
              </button>
            </div>
          </div>
        </div>
              )}

            </div>





          
            <div ref={coTravellersRef} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Co-Travellers</h3>
                  <p className="text-gray-600 mt-1">
                    Add, Remove and Update your traveller list
                  </p>
                </div>
                <button
                  onClick={() => openPopup("traveller")}
                  className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <FaPencilAlt />
                  Add Traveller
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen === "edit" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-900">Edit Profile</h3>
                <button onClick={closePopup} className="text-gray-500 hover:text-gray-700">
                  <FaTimes />
                </button>
              </div>

              <form onSubmit={handleSave} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Birthday
                    </label>
                    <input
                      type="date"
                      name="birthday"
                      value={formData.birthday}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Gender</option>
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Marital Status
                    </label>
                    <select
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Marital Status</option>
                      <option value="SINGLE">Single</option>
                      <option value="MARRIED">Married</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pincode
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-4 pt-6">
                  <button
                    type="button"
                    onClick={closePopup}
                    className="px-6 py-2 text-gray-700 font-medium rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}


      {isPopupOpen === "traveller" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-900">Add Traveller's Info</h3>
                <button onClick={closePopup} className="text-gray-500 hover:text-gray-700">
                  <FaTimes />
                </button>
              </div>

              <div className="mt-6">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex space-x-8">
                    {['Basic Info', 'Passport Details', 'Contact Details', 'Frequent Flyer Details'].map((tab, index) => (
                      <button
                        key={tab}
                        onClick={() => handleTabChange(index)}
                        className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === index ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                      >
                        {tab}
                      </button>
                    ))}
                  </nav>
                </div>

                <form className="mt-6">
                  {activeTab === 0 && (
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Please check if First & Last name, gender and date of birth match Govt. ID such as Passport.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Gender <span className="text-red-500">*</span>
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select Gender</option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                            <option value="OTHER">Other</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Date of Birth <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="date"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nationality
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select Nationality</option>
                            <option value="Indian">Indian</option>
                            <option value="OTHER">Other</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Meal Preference
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select Meal</option>
                            <option value="VEGETARIAN">Vegetarian</option>
                            <option value="NON_VEGETARIAN">Non-Vegeterian</option>
                            <option value="VEGAN">Vegan</option>
                            <option value="KOSHER">Kosher Meal</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Traveller's relationship with you
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select relationship</option>
                            <option value="SPOUSE">Spouse</option>
                            <option value="CHILD">Child</option>
                            <option value="SIBLING">Sibling</option>
                            <option value="PARENT">Parent</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Train Berth Preference
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select Preference</option>
                            <option value="LOWER">Lower Berth</option>
                            <option value="MIDDLE">Middle Berth</option>
                            <option value="UPPER">Upper Berth</option>
                            <option value="SIDE">Side Berth</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 1 && (
                    <div className="space-y-4">
                      <p className="text-gray-600">Mandatory for International Travel</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Passport Number
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Issuing Country
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select Issuing Country</option>
                            <option value="UAE">United Arab Emirates</option>
                            <option value="ANGUILLA">Anguilla</option>
                            <option value="ANTARCTICA">Antarctica</option>
                            <option value="ARMENIA">Armenia</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Expiry Date
                          </label>
                          <input
                            type="date"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 2 && (
                    <div className="space-y-4">
                      <p className="text-gray-600">Used only for booking related communications</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email ID
                          </label>
                          <input
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone No
                          </label>
                          <div className="flex">
                            <div className="flex items-center px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50">
                              <span className="text-gray-700">+91</span>
                            </div>
                            <input
                              type="tel"
                              className="w-full px-3 py-2 border-t border-b border-r border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 3 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Frequent Flyer Airline
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select Airline</option>
                            <option value="AIR_INDIA">Air India</option>
                            <option value="AIR_CANADA">Air Canada</option>
                            <option value="AIR_FRANCE">Air France</option>
                            <option value="FINNAIR">Finnair</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Frequent Flyer Number
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-6">
                    <button
                      type="button"
                      onClick={closePopup}
                      className="px-6 py-2 text-gray-700 font-medium rounded-md hover:bg-gray-100 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Save Traveller
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;