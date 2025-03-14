"use client";
import React, { useState } from "react";

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    
    // Booking Details
    checkInDate: "",
    checkOutDate: "",
    roomType: "",
    
    // Add-ons
    vehicleType: "",
    parkingType: "default",
    extras: {
      wine: false,
      petStay: false,
    },
    
    // Payment
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const steps = [
    { id: 1, name: "Dates & Rooms", status: "current" },
    { id: 2, name: "Extras", status: "upcoming" },
    { id: 3, name: "Payment", status: "upcoming" },
    { id: 4, name: "Confirmation", status: "upcoming" },
  ];

  const addOns = [
    {
      id: 1,
      name: "Car park",
      price: 20,
      type: "perNight",
      description: "Secure parking space",
    },
    {
      id: 2,
      name: "Bottle of wine",
      price: 50,
      type: "oneTime",
      description: "Premium selection wine",
    },
    {
      id: 3,
      name: "Pet stay",
      price: 50,
      type: "perStay",
      description: "Pet-friendly accommodation",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleAddOnToggle = (addOnId) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnId)
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const handleNextStep = () => {
    if (currentStep < 4) setCurrentStep(prev => prev + 1);
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Check-in Date
                </label>
                <input
                  type="date"
                  name="checkInDate"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.checkInDate}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Check-out Date
                </label>
                <input
                  type="date"
                  name="checkOutDate"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.checkOutDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["Standard", "Deluxe", "Suite"].map(room => (
                <div key={room} className="relative">
                  <input
                    type="radio"
                    name="roomType"
                    id={room}
                    value={room}
                    checked={formData.roomType === room}
                    onChange={handleInputChange}
                    className="peer hidden"
                  />
                  <label
                    htmlFor={room}
                    className="block p-4 border rounded-lg cursor-pointer hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-50"
                  >
                    <span className="font-medium">{room} Room</span>
                    <p className="text-sm text-gray-500 mt-1">${room === "Standard" ? 150 : room === "Deluxe" ? 220 : 350}/night</p>
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Vehicle Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["motorcycle", "car", "van"].map(vehicle => (
                  <div key={vehicle} className="relative">
                    <input
                      type="radio"
                      name="vehicleType"
                      id={vehicle}
                      value={vehicle}
                      checked={formData.vehicleType === vehicle}
                      onChange={handleInputChange}
                      className="peer hidden"
                    />
                    <label
                      htmlFor={vehicle}
                      className="block p-4 border rounded-lg cursor-pointer hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-50"
                    >
                      <span className="font-medium capitalize">{vehicle}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Additional Services</h3>
              <div className="space-y-3">
                {addOns.map(addOn => (
                  <div
                    key={addOn.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div>
                      <h4 className="font-medium">{addOn.name}</h4>
                      <p className="text-sm text-gray-500">{addOn.description}</p>
                      <p className="text-sm text-blue-600 mt-1">
                        ${addOn.price}{" "}
                        {addOn.type === "perNight" ? "/night" : 
                         addOn.type === "perStay" ? "/stay" : ""}
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={selectedAddOns.includes(addOn.id)}
                      onChange={() => handleAddOnToggle(addOn.id)}
                      className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Card Number
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Expiry Date
                  </label>
                  <input
                    type="month"
                    name="expiryDate"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    CVV
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center py-12">
            <div className="text-green-600 mb-4">
              <svg
                className="mx-auto h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Booking Confirmed!</h3>
            <p className="text-gray-600">
              Your reservation #54237982 has been successfully confirmed.
              A confirmation email has been sent to {formData.email}.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Progress Steps */}
        <nav aria-label="Progress">
          <ol className="flex justify-between">
            {steps.map((step, index) => (
              <li key={step.id} className="flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      currentStep > step.id
                        ? "bg-green-600 text-white"
                        : currentStep === step.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {currentStep > step.id ? "✓" : step.id}
                  </div>
                  <span
                    className={`mt-2 text-sm font-medium ${
                      currentStep >= step.id
                        ? "text-gray-900"
                        : "text-gray-500"
                    }`}
                  >
                    {step.name}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </nav>

        {/* Form Content */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          {renderStepContent()}

          {/* Navigation Buttons */}
          {currentStep < 4 && (
            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={handlePreviousStep}
                disabled={currentStep === 1}
                className={`px-4 py-2 rounded-md ${
                  currentStep === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                {currentStep === 3 ? "Complete Booking" : "Next Step"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;