"use client";
import React, { useState } from "react";

const page = () => {
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    paxType: "Adult",
    leadPassenger: false,
    age: "",
    passportNo: "",
    passportIssueDate: "",
    passportExpDate: "",
    pan: "",
    isPackageFare: false,
    isPackageDetailsMandatory: false,
    arrivalTransport: "",
    arrivalTransportType: "",
    transportInfoId: "",
    time: "",
  });

  const steps = [
    { label: "Dates & Rooms", completed: true },
    { label: "Extras", active: true },
    { label: "Payment", active: false },
    { label: "Confirmation", active: false },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const addOns = [
    {
      id: 1,
      name: "Car park",
      description: "The choice of families",
      price: "$20 / night",
    },
    {
      id: 2,
      name: "Bottle of wine",
      description: "Ventesquero Reserva Chardonnay",
      price: "$50 / piece",
    },
    {
      id: 3,
      name: "Stay of a pet",
      description: "Bring your furry friend along",
      price: "$50 / stay",
    },
  ];

  const handleAddOnChange = (id) => {
    setSelectedAddOns((prev) =>
      prev.includes(id)
        ? prev.filter((addOnId) => addOnId !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      <div className="flex  items-center space-x-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center space-x-2">
            {/* Circle */}
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold ${
                step.completed
                  ? "bg-green-500 text-white"
                  : step.active
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {step.completed ? "✓" : index + 1}
            </div>

            {/* Label */}
            <p
              className={`text-sm ${
                step.completed || step.active ? "text-black" : "text-gray-400"
              }`}
            >
              {step.label}
            </p>

            {/* Line */}
            {index < steps.length - 1 && (
              <div
                className={`h-px w-8 ${
                  step.completed ? "bg-green-500" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        {/* Header Section */}
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Enter your details
        </h2>

        {/* User Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              First Name *
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Last Name *
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email Address *
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Phone Number *
            </label>
            <input
              type="tel"
              placeholder="+1 234 567 890"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Add-ons Section */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Add to your stay
        </h3>
        <div className="space-y-4">
          {addOns.map((addOn) => (
            <div
              key={addOn.id}
              className="flex items-center justify-between border-b border-gray-200 pb-4"
            >
              <div>
                <h4 className="text-sm font-medium text-gray-800">
                  {addOn.name}
                </h4>
                <p className="text-xs text-gray-500">{addOn.description}</p>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-sm font-medium text-gray-800">
                  {addOn.price}
                </p>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  checked={selectedAddOns.includes(addOn.id)}
                  onChange={() => handleAddOnChange(addOn.id)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Continue to Payment
          </button>
        </div>
      </div>
       <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Hotel Registration Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Title*</label>
            <select
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Ms">Ms</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-semibold">First Name*</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block font-semibold">Middle Name</label>
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block font-semibold">Last Name*</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Phone Number</label>
              <input
                type="text"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-semibold">Pax Type*</label>
              <select
                name="paxType"
                value={formData.paxType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="Adult">Adult</option>
                <option value="Child">Child</option>
              </select>
            </div>
            {formData.paxType === "Child" && (
              <div>
                <label className="block font-semibold">Age*</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  max={12}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            )}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="leadPassenger"
                checked={formData.leadPassenger}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="font-semibold">Lead Passenger*</label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-semibold">Passport No</label>
              <input
                type="text"
                name="passportNo"
                value={formData.passportNo}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block font-semibold">Passport Issue Date</label>
              <input
                type="date"
                name="passportIssueDate"
                value={formData.passportIssueDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block font-semibold">
                Passport Expiry Date
              </label>
              <input
                type="date"
                name="passportExpDate"
                value={formData.passportExpDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">PAN</label>
              <input
                type="text"
                name="pan"
                value={formData.pan}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="isPackageFare"
                checked={formData.isPackageFare}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="font-semibold">Is Package Fare</label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Arrival Transport</label>
              <input
                type="text"
                name="arrivalTransport"
                value={formData.arrivalTransport}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block font-semibold">
                Arrival Transport Type
              </label>
              <input
                type="text"
                name="arrivalTransportType"
                value={formData.arrivalTransportType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
          >
            Submit
          </button>
        </form>
      </div> 
      <div className="p-6 bg-white shadow-lg rounded-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Booking Form</h2>
        <div className="space-y-4">
          {/* Personal Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="border px-4 py-2 rounded"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="border px-4 py-2 rounded"
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="border px-4 py-2 rounded sm:col-span-2"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="border px-4 py-2 rounded sm:col-span-2"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Add to Stay */}
          <div className="border-t pt-4">
            <h3 className="text-lg font-medium mb-2">Add to your stay</h3>
            {/* Vehicle Type */}
            <div className="flex gap-4">
              {["motorcycle", "car", "bus"].map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="vehicle"
                    value={type}
                    checked={formData.vehicle === type}
                    onChange={handleChange}
                  />
                  <span className="capitalize">{type}</span>
                </label>
              ))}
            </div>

            {/* Parking Type */}
            <div className="flex gap-4 mt-2">
              {["default", "disabled"].map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="parking"
                    value={type}
                    checked={formData.parking === type}
                    onChange={handleChange}
                  />
                  <span className="capitalize">{type} parking</span>
                </label>
              ))}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm">From</label>
                <input
                  type="date"
                  name="startDate"
                  className="border px-4 py-2 rounded w-full"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm">To</label>
                <input
                  type="date"
                  name="endDate"
                  className="border px-4 py-2 rounded w-full"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Extras */}
            <div className="flex gap-4 mt-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="wine"
                  checked={formData.wine}
                  onChange={handleChange}
                />
                <span>Bottle of wine ($50)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="petStay"
                  checked={formData.petStay}
                  onChange={handleChange}
                />
                <span>Stay of a pet ($50/night)</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          {/* Steps */}
          <div className="flex items-center justify-between mb-6">
            {["Dates & Rooms", "Extras", "Payment", "Confirmation"].map(
              (step, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 ${
                    index === 3 ? "text-blue-600" : "text-gray-400"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      index <= 3 ? "bg-blue-600 text-white" : "bg-gray-300"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="text-sm">{step}</span>
                </div>
              )
            )}
          </div>

          {/* Confirmation Message */}
          <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-6">
            <p className="text-green-700 font-semibold">
              Your booking is confirmed
            </p>
            <p className="text-sm text-green-600">
              Nulla Lorem mollit cupidatat irure. Lorem ipsum dolor sit amet.
            </p>
          </div>

          {/* Booking Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-sm text-gray-500">Guest</p>
              <p className="font-medium">Maciej Kuropatwa</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Check-in</p>
              <p className="font-medium">Sun, 22 May 2022 from 16:00</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Your Reservation</p>
              <p className="font-medium">3 Nights, 1 Apartment</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium">+48 567 890 123</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">kuropatwamaciej@gmail.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Booking Number</p>
              <p className="font-medium">#54237982</p>
            </div>
          </div>

          {/* Parking Ticket */}
          <div className="border p-4 rounded-lg bg-gray-100">
            <p className="text-gray-700 mb-2">
              Entrance to parking area is possible only with parking ticket
              issued by parking entrance machine.
            </p>
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Cart Park</p>
                <p className="font-medium">
                  Car, 3 nights <br />
                  Place C-124 on 1st Floor
                </p>
              </div>
              <div className="bg-white p-2 rounded shadow-md">
                <img
                  src="/qrcode-placeholder.png"
                  alt="QR Code"
                  className="h-20 w-20"
                />
              </div>
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded shadow">
              Download Parking Ticket
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Reservation summary
        </h2>

        <div className="mb-6">
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-sm font-semibold text-gray-600">CHECK-IN</p>
              <p className="text-gray-800">Sun, 22 May 2022</p>
              <p className="text-sm text-gray-500">from 16:00</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600">CHECK-OUT</p>
              <p className="text-gray-800">Wed, 25 May 2022</p>
              <p className="text-sm text-gray-500">by 11:00</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-600">
              TOTAL LENGTH OF STAY:
            </p>
            <p className="text-gray-800">3</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-600">YOU SELECTED:</p>
            <p className="text-gray-800">
              King bed stylish Apartment with Loft style family room
            </p>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Change your selection
            </a>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Your price summary
          </h3>
          <div className="text-sm text-gray-600">
            <div className="flex justify-between">
              <p>Rooms and offer:</p>
              <p>$625.43</p>
            </div>
            <div className="flex justify-between">
              <p>8% VAT:</p>
              <p>$50.03</p>
            </div>
            <div className="flex justify-between">
              <p>City tax:</p>
              <p>$16.44</p>
            </div>
          </div>
          <div className="flex justify-between font-semibold text-green-600 text-lg mt-4">
            <p>Total Price:</p>
            <p>$698.87</p>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white text-sm font-semibold py-2 rounded-lg hover:bg-blue-700 transition">
          Request To Book
        </button>

        <p className="text-center text-xs text-gray-500 mt-4">
          we run on TraWell Inc.
        </p>
      </div>
    </>
  );
};

export default page;
