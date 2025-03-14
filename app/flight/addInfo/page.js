"use client"

import { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    paxType: "",
    dateOfBirth: "",
    gender: "",
    passportNo: "",
    passportExpiry: "",
    passportIssueDate: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    countryCode: "",
    countryName: "",
    contactNo: "",
    email: "",
    isLeadPax: false,
    ffAirlineCode: "",
    ffNumber: "",
    gstCompanyAddress: "",
    gstCompanyContactNumber: "",
    gstCompanyName: "",
    gstNumber: "",
    airTransFee: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    // You can add further form submission logic here
  };

  return (

    <div className="min-h-screen   bg-gradient-to-r from-[#42A6EF]  via-[#42A6EF] to-[#EF6614] flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl w-full space-y-8 backdrop-blur-sm bg-[#ffffff61] p-8 rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 tracking-tight">Booking Form</h2>
  
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Title */}
          <div className="col-span-1">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title *</label>
            <select
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
            >
              <option value="">Select Title</option>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
              <option value="Mrs">Mrs</option>
              <option value="Dr">Dr</option>
            </select>
          </div>
  
          {/* First Name */}
          <div className="col-span-1">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
            />
          </div>
  
          {/* Last Name */}
          <div className="col-span-1">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
            />
          </div>
  
          {/* Pax Type */}
          <div className="col-span-1">
            <label htmlFor="paxType" className="block text-sm font-medium text-gray-700">Pax Type *</label>
            <select
              id="paxType"
              name="paxType"
              value={formData.paxType}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
            >
              <option value="">Select Pax Type</option>
              <option value="Adult">Adult</option>
              <option value="Child">Child</option>
              <option value="Infant">Infant</option>
            </select>
          </div>
  
          {/* Gender */}
          <div className="col-span-1">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender *</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
  
          {/* Date of Birth */}
          <div className="col-span-1">
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
            />
          </div>
  
          {/* Passport No */}
          <div className="col-span-1">
            <label htmlFor="passportNo" className="block text-sm font-medium text-gray-700">Passport No *</label>
            <input
              type="text"
              id="passportNo"
              name="passportNo"
              value={formData.passportNo}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
            />
          </div>
  
          {/* Passport Expiry */}
          <div className="col-span-1">
            <label htmlFor="passportExpiry" className="block text-sm font-medium text-gray-700">Passport Expiry *</label>
            <input
              type="date"
              id="passportExpiry"
              name="passportExpiry"
              value={formData.passportExpiry}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
            />
          </div>
  
          {/* Address Line 1 */}
          <div className="col-span-1">
            <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">Address Line 1 *</label>
            <input
              type="text"
              id="addressLine1"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
            />
          </div>
  
          {/* Address Line 2 */}
          <div className="col-span-1">
            <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">Address Line 2</label>
            <input
              type="text"
              id="addressLine2"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
            />
          </div>
  
          {/* City */}
          <div className="col-span-1">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City *</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
            />
          </div>
  
          {/* Country Code */}
          <div className="col-span-1">
            <label htmlFor="countryCode" className="block text-sm font-medium text-gray-700">Country Code *</label>
            <input
              type="text"
              id="countryCode"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
            />
          </div>
  
          {/* Country Name */}
          <div className="col-span-1">
            <label htmlFor="countryName" className="block text-sm font-medium text-gray-700">Country Name *</label>
            <input
              type="text"
              id="countryName"
              name="countryName"
              value={formData.countryName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
            />
          </div>
        </div>
  
        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-md hover:bg-gradient-to-l focus:ring-2 focus:ring-blue-500 transition-all"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  
  );
};

export default page;
