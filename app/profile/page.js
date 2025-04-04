"use client";
import React, { useState, useRef } from "react";
import { CgProfile } from "react-icons/cg";
import { LuLogOut } from "react-icons/lu";
import { LuUsers2 } from "react-icons/lu";
import { AiOutlineLogout } from "react-icons/ai";
import Image from "next/image";
import { FaCheckCircle, FaPencilAlt, FaPlus, FaTimes } from "react-icons/fa";

const page = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(null);
  const openPopup = (type) => {
    setIsPopupOpen(type);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const [fullName, setFullName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [meal, setMeal] = useState("");
  const [preference, setPreference] = useState("");
  const [relationship, setRelationship] = useState("");
  const [address, setAddress] = useState("");
  const [issueingCountry, setIssueingCountry] = useState("");
  const [airline, setAirline] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");

  const [profileData, setProfileData] = useState({
    fullName: "",
    birthday: "",
    gender: "",
    maritalStatus: "",
    address: "",
    pincode: "",
    state: "",
    nationality: "",
    meal: "",
    relationship: "",
    preference: "",
    issueingCountry: "",
    airline: "",
  });

  const handleSave = (e) => {
    e.preventDefault();

    setProfileData({
      fullName: fullName,
      birthday: birthday,
      gender: gender,
      maritalStatus: maritalStatus,
      address: address,
      pincode: pincode,
      state: state,
      nationality: nationality,
      meal: meal,
      relationship: relationship,
      preference: preference,
      issueingCountry: issueingCountry,
      airline: airline,
    });
    closePopup();
  };

  const [activeItem, setActiveItem] = useState("profile");

  const profileRef = useRef(null);
  const loginDetailsRef = useRef(null);
  const coTravellersRef = useRef(null);
  const logoutRef = useRef(null);

  const handleItemClick = (item, ref) => {
    setActiveItem(item);
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };


   

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="px-5 py-5 md:py-10 md:px-20 flex gap-10 flex-col md:flex-row">
        <div className="w-full md:w-1/4 h-full sticky top-24">
          <div className="bg-white px-5 rounded-xl pb-5 myshadow">
            <Image
              src="/images/user-profile.webp"
              width={50}
              height={50}
              alt=""
              className="w-auto mx-auto h-60"
            />
            <p className="text-sm text-center">PERSONAL PROFILE</p>

            <ul className="mt-5">
              <li
                className={`flex items-center gap-3 px-5 py-3 rounded-md text-base font-medium cursor-pointer ${
                  activeItem === "profile" ? "text-blue-500 bg-[#ecf5fe]" : ""
                }`}
                onClick={() => handleItemClick("profile", profileRef)}
              >
                <CgProfile />
                Profile
              </li>
              <li
                className={`flex items-center gap-3  px-5 py-3 rounded-md  text-base font-medium cursor-pointer ${
                  activeItem === "loginDetails"
                    ? "text-blue-500 bg-[#ecf5fe]"
                    : ""
                }`}
                onClick={() => handleItemClick("loginDetails", loginDetailsRef)}
              >
                <LuLogOut />
                Login Details
              </li>
              <li
                className={`flex items-center gap-3  px-5 py-3 rounded-md  text-base font-medium cursor-pointer ${
                  activeItem === "coTravellers"
                    ? "text-blue-500 bg-[#ecf5fe]"
                    : ""
                }`}
                onClick={() => handleItemClick("coTravellers", coTravellersRef)}
              >
                <LuUsers2 />
                Co-Travellers
              </li>
              <li
                className={`flex items-center gap-3 px-5 py-3 rounded-md  text-base font-medium cursor-pointer ${
                  activeItem === "logout" ? "text-blue-500 bg-[#ecf5fe]" : ""
                }`}
                onClick={() => handleItemClick("logout", logoutRef)}
              >
                <AiOutlineLogout />
                Logout
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-3/4 mt-8 md:mt-0">
        
          <div className=" bg-white myshadow rounded-xl p-6">
            <div className=" ">
              <p className=" flex justify-between">
                <span>Complete your Profile</span>
                <span className=" ">60%</span>
              </p>
              <div className=" bg-white flex rounded h-2 mt-2">
                <div className=" bg-blue-600 h-full w-3/5"></div>
                <div className=" bg-gray-600 h-full w-2/5"></div>
              </div>
            </div>
            <p className=" mt-4">
              Get the best out of Next Gen by adding the remaining details!
            </p>
            <ul className="flex justify-between items-center bg-[#ecf5fe] mt-4 px-10 py-4 rounded-lg">
              <li className="flex gap-3 font-semibold items-center text-blue-600 cursor-pointer">
                <FaCheckCircle className="text-2xl" />
                Verified mobile Number
              </li>
              <li className="flex gap-3 font-semibold items-center text-blue-600 cursor-pointer">
                <FaCheckCircle className="text-2xl" />
                Verified Email ID
              </li>
              <li className="flex gap-3 font-semibold items-center text-blue-600 cursor-pointer">
                <FaPlus className="text-2xl" />
                Complete Basic Info
              </li>
            </ul>
          </div>
        

          <div
            ref={profileRef}
            className="bg-white myshadow rounded-xl p-6 mt-6"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-2xl">Profile</h3>
                <p className="font18 darkGreyText mt-2">
                  Basic info, for a faster booking experience
                </p>
              </div>
              <button
                className="font16 bg-white border hover:shadow px-4 rounded-xl py-2 text-blue-600 flex items-center"
                onClick={() => openPopup("edit")}
              >
                <FaPencilAlt className="mr-2" />
                Edit
              </button>

              {isPopupOpen === "edit" && (
                <div className="fixed inset-0 flex z-[9999] items-center justify-center bg-black bg-opacity-50">
                  <div className="p-6 bg-white shadow-lg rounded-lg">
                    <h3 className="text-2xl font-black text-gray-900">
                      Edit Profile
                    </h3>
                    <form
                      data-cy="profileEditFormCard_O2"
                      className="space-y-6 mt-3"
                      onSubmit={handleSave}
                    >
                      <div className="space-y-4">
                        <div className="flex space-x-4">
                          <div className="w-1/2">
                            <label
                              htmlFor="profileFirstName"
                              className="text-sm font-bold text-gray-900"
                            >
                              Full Name<span className="text-red-600">*</span>
                            </label>
                            <input
                              data-cy="profileFirstName"
                              className="w-full mt-1 p-2 text-sm text-gray-900 border h-10 border-gray-300 rounded-none"
                              type="text"
                              id="profileFirstName"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                            />
                          </div>
                          <div className="w-1/2">
                            <label
                              htmlFor="profileBirthday"
                              className="text-sm font-bold text-gray-900"
                            >
                              Birthday
                            </label>
                            <input
                              data-cy="profileBirthday"
                              className="w-full mt-1 p-2 text-sm text-gray-900 border h-10 border-gray-300 rounded-none"
                              type="date"
                              id="profileBirthday"
                              value={birthday}
                              onChange={(e) => setBirthday(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="flex space-x-4">
                          <div className="w-1/2">
                            <label
                              htmlFor="profileGender"
                              className="text-sm font-bold text-gray-900"
                            >
                              Gender
                            </label>
                            <select
                              data-cy="profileGender"
                              className="w-full mt-1 p-2 text-sm text-gray-900 border h-10 border-gray-300 rounded-none"
                              id="profileGender"
                              value={gender}
                              onChange={(e) => setGender(e.target.value)}
                            >
                              <option value="">Select Gender</option>
                              <option value="MALE">Male</option>
                              <option value="FEMALE">Female</option>
                              <option value="OTHER">Other</option>
                            </select>
                          </div>
                          <div className="w-1/2">
                            <label
                              htmlFor="profileMaritalStatus"
                              className="text-sm font-bold text-gray-900"
                            >
                              Marital Status
                            </label>
                            <select
                              data-cy="profileMaritalStatus"
                              className="w-full mt-1 p-2 text-sm text-gray-900 border h-10 border-gray-300 rounded-none"
                              id="profileMaritalStatus"
                              value={maritalStatus}
                              onChange={(e) => setMaritalStatus(e.target.value)}
                            >
                              <option value="">Select Marital Status</option>
                              <option value="SINGLE">Single</option>
                              <option value="MARRIED">Married</option>
                              <option value="OTHER">Other</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex space-x-4">
                          <div className="w-1/2">
                            <label
                              htmlFor="profileAddress"
                              className="text-sm font-bold text-gray-900"
                            >
                              Your Address
                            </label>
                            <input
                              data-cy="profileAddress"
                              className="w-full mt-1 p-2 text-sm text-gray-900 border h-10 border-gray-300 rounded-none"
                              type="text"
                              id="profileAddress"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                            />
                          </div>
                          <div className="w-1/2">
                            <label
                              htmlFor="profilePincode"
                              className="text-sm font-bold text-gray-900"
                            >
                              Pincode
                            </label>
                            <input
                              data-cy="profilePincode"
                              className="w-full mt-1 p-2 text-sm text-gray-900 border h-10 border-gray-300 rounded-none"
                              type="text"
                              id="profilePincode"
                              value={pincode}
                              onChange={(e) => setPincode(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end space-x-6">
                        <span
                          data-cy="profile:cancel-btn"
                          className="text-lg  px-6 py-2 font-bold text-gray-600 cursor-pointer"
                          onClick={closePopup}
                        >
                          Cancel
                        </span>
                        <button
                          data-cy="profileEdit_Submit"
                          type="submit"
                          className="text-lg font-black text-white bg-blue-600 px-6 py-2 rounded-lg"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>

            <div className="flex mt-6">
              <ul className=" w-1/2">
                <li className="flex justify-between items-center  border-y p-5 hover:bg-gray-300 hover:bg-gradient-to-r hover:from-white hover:to-[#f7f7f7]">
                  <span className="text-xs font-normal">NAME</span>
                  <span className="text-sm font-semibold text-black cursor-pointer">
                    {profileData.fullName || "+ Add"}
                  </span>
                </li>
                <li className="flex justify-between items-center border-b p-5 hover:bg-gray-300 hover:bg-gradient-to-r hover:from-white hover:to-[#f7f7f7]">
                  <span className="text-xs font-normal">DATE OF BIRTH</span>
                  <span className="text-sm font-semibold text-black cursor-pointer">
                    {profileData.birthday || "+ Add"}
                  </span>
                </li>
                <li className="flex justify-between items-center border-b p-5 hover:bg-gray-300 hover:bg-gradient-to-r hover:from-white hover:to-[#f7f7f7]">
                  <span className="text-xs font-normal">GENDER</span>
                  <span className="text-sm font-semibold text-black cursor-pointer">
                    {profileData.gender || "+ Add"}
                  </span>
                </li>
              </ul>
              <ul className="w-1/2">
                <li className="flex justify-between items-center border-l border-y p-5 hover:bg-gray-300 hover:bg-gradient-to-r hover:from-white hover:to-[#f7f7f7]">
                  <span className="text-xs font-normal">MARITAL STATUS</span>
                  <span className="text-sm font-semibold text-black cursor-pointer">
                    {profileData.maritalStatus || "+ Add"}
                  </span>
                </li>
                <li className="flex justify-between items-center border-l border-b p-5 hover:bg-gray-300 hover:bg-gradient-to-r hover:from-white hover:to-[#f7f7f7]">
                  <span className="text-xs font-normal">ADDRESS</span>
                  <span className="text-sm font-semibold text-black cursor-pointer">
                    {profileData.address || "+ Add"}
                  </span>
                </li>
                <li className="flex justify-between items-center border-b border-l p-5 hover:bg-gray-300 hover:bg-gradient-to-r hover:from-white hover:to-[#f7f7f7]">
                  <span className="text-xs font-normal">PINCODE</span>
                  <span className="text-sm font-semibold text-black cursor-pointer">
                    {profileData.pincode || "+ Add"}
                  </span>
                </li>
              </ul>
            </div>
          </div>


          <div
            ref={loginDetailsRef}
            className=" bg-white myshadow rounded-xl p-6 mt-6"
          >
            <h3 className="font-semibold text-2xl">Login Details</h3>
            <p className="font18 darkGreyText mt-2">
              Manage your mobile number, email address and password
            </p>

            <ul className="mt-6">
              <li className=" flex justify-between items-center border-b p-5 hover:bg-gray-300 hover:bg-gradient-to-r hover:from-white hover:to-[#f7f7f7] ">
                <span className="text-xs font-normal ">MOBILE NUMBER</span>
                <span className="text-sm  font-semibold  cursor-pointer">
                  +91 - 1234567891
                </span>
              </li>
              <li className=" flex justify-between  items-center border-b p-5 hover:bg-gray-300 hover:bg-gradient-to-r hover:from-white hover:to-[#f7f7f7] ">
                <span className="text-xs font-normal">EMAIL ID</span>
                <span className="text-sm font-semibold text-black cursor-pointer">
                  rahulrana@gmail.com
                </span>
              </li>
              <li className=" flex justify-between items-center border-b p-5 hover:bg-gray-300 hover:bg-gradient-to-r hover:from-white hover:to-[#f7f7f7] ">
                <span className="text-xs font-normal ">PASSWORD</span>
                <span className="text-sm font-semibold text-black cursor-pointer leading-none">
                  *******
                </span>
              </li>
            </ul>
          </div>


          <div
            ref={coTravellersRef}
            className=" bg-white myshadow rounded-xl p-6 mt-6"
          >
            <div className=" flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-2xl">Co-Travellers</h3>
                <p className="font18 darkGreyText mt-2">
                  Add, Remove and Update your traveller list
                </p>
              </div>
              <button
                className="font16 bg-white border hover:shadow px-4 rounded-xl py-2 text-blue-600 flex items-center"
                onClick={() => openPopup("traveller")}
              >
                <FaPencilAlt className="  mr-2" />
                Add Traveller
              </button>
            </div>
          </div>


          {isPopupOpen === "traveller" && (
            <div className="fixed inset-0 flex z-[9999] items-center justify-center bg-black bg-opacity-50">
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-black text-gray-900">
                  Add Traveller’s Info
                </h3>
                <div className="">
                  <div className="mt-2">
                    <div className="">
                      <ul className="my-4 text-base font-black text-gray-700 flex space-x-4">
                        <li
                          onClick={() => handleTabChange(0)}
                          className={`cursor-pointer ${
                            activeTab === 0
                              ? "text-black border-b-2 border-black"
                              : ""
                          }`}
                        >
                          Basic Info
                        </li>
                        <li
                          onClick={() => handleTabChange(1)}
                          className={`cursor-pointer ${
                            activeTab === 1
                              ? "text-black border-b-2 border-black"
                              : ""
                          }`}
                        >
                          Passport Details
                        </li>
                        <li
                          onClick={() => handleTabChange(2)}
                          className={`cursor-pointer ${
                            activeTab === 2
                              ? "text-black border-b-2 border-black"
                              : ""
                          }`}
                        >
                          Contact Details
                        </li>
                        <li
                          onClick={() => handleTabChange(3)}
                          className={`cursor-pointer ${
                            activeTab === 3
                              ? "text-black border-b-2 border-black"
                              : ""
                          }`}
                        >
                          Frequent Flyer Details
                        </li>
                      </ul>
                    </div>
                    <form noValidate>
                      {activeTab === 0 && (
                        <div className="">
                          <div className="">
                            <p className="text-base text-gray-700 mt-5">
                              Please check if First & Last name, gender and date
                              of birth match Govt. ID such as Passport.
                            </p>
                            <div className="mt-8">
                              <div className="flex space-x-4">
                                <div className="w-1/2">
                                  <label
                                    htmlFor="travellerFirstName"
                                    className="text-base font-bold text-black"
                                  >
                                    First Name
                                    <span className="text-red-500">*</span>
                                  </label>
                                  <input
                                    id="travellerFirstName"
                                    type="text"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black"
                                  />
                                </div>
                                <div className="w-1/2">
                                  <label
                                    htmlFor="travellerLastName"
                                    className="text-base font-bold text-black"
                                  >
                                    Last Name
                                    <span className="text-red-500">*</span>
                                  </label>
                                  <input
                                    id="travellerLastName"
                                    type="text"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black"
                                  />
                                </div>
                              </div>
                              <div className="mt-4 flex space-x-4">
                                <div className="w-1/2">
                                  <label
                                    htmlFor="Gender"
                                    className="text-base font-bold text-black"
                                  >
                                    Gender
                                    <span className="text-red-500">*</span>
                                  </label>
                                  <select
                                    data-cy="profileGender"
                                    className="w-full mt-1 p-2 h-[42px] text-sm text-gray-900 border  border-gray-300 rounded-md"
                                    id="profileGender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                  >
                                    <option value="">Select Gender</option>
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
                                    <option value="OTHER">Other</option>
                                  </select>
                                </div>
                                <div className="w-1/2">
                                  <label
                                    htmlFor="DateOfBirth"
                                    className="text-base font-bold text-black"
                                  >
                                    Date of Birth
                                    <span className="text-red-500">*</span>
                                  </label>
                                  <div className="mt-1 border border-gray-300 rounded-md p-2">
                                    <p className="text-gray-500">Select Date</p>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4 flex space-x-4">
                                <div className="w-1/2">
                                  <label
                                    htmlFor="nationality"
                                    className="text-base font-bold text-black"
                                  >
                                    Nationality
                                  </label>
                                  <select
                                    data-cy="profileGender"
                                    className="w-full mt-1 p-2 h-[42px]  text-sm text-gray-900 border  border-gray-300 rounded-md"
                                    id="profileNationality"
                                    value={nationality}
                                    onChange={(e) =>
                                      setNationality(e.target.value)
                                    }
                                  >
                                    <option value="">Select Nationality</option>
                                    <option value="Indian">Indian</option>
                                    <option value="OTHER">Other</option>
                                  </select>
                                </div>
                                <div className="w-1/2">
                                  <label
                                    htmlFor="mealPref"
                                    className="text-base font-bold text-black"
                                  >
                                    Meal Preference
                                  </label>
                                  <select
                                    data-cy="profileMeal"
                                    className="w-full mt-1 p-2 h-[42px] text-sm text-gray-900 border  border-gray-300 rounded-md"
                                    id="profileMeal"
                                    value={meal}
                                    onChange={(e) => setMeal(e.target.value)}
                                  >
                                    <option value="">Select Meal</option>
                                    <option value="MALE">Vegetarian</option>
                                    <option value="FEMALE">
                                      Non-Vegeterian
                                    </option>
                                    <option value="OTHER">Vegan</option>
                                    <option value="OTHER">Kosher Meal</option>
                                  </select>
                                </div>
                              </div>
                              <div className="mt-4 flex space-x-4">
                                <div className="w-1/2">
                                  <label
                                    htmlFor="relationship"
                                    className="text-base font-bold text-black"
                                  >
                                    Traveller's relationship with you
                                  </label>
                                  <select
                                    data-cy="profileRelationship"
                                    className="w-full mt-1 p-2 h-[42px] text-sm text-gray-900 border  border-gray-300 rounded-md"
                                    id="profileRelationship"
                                    value={relationship}
                                    onChange={(e) =>
                                      setRelationship(e.target.value)
                                    }
                                  >
                                    <option value="">
                                      Select relationship{" "}
                                    </option>
                                    <option value="MALE">Spouse</option>
                                    <option value="FEMALE">Child</option>
                                    <option value="OTHER">Sibling</option>
                                    <option value="OTHER">Parent</option>x
                                  </select>
                                </div>
                                <div className="w-1/2">
                                  <label
                                    htmlFor="seatPref"
                                    className="text-base font-bold text-black"
                                  >
                                    Train Berth Preference
                                  </label>
                                  <select
                                    data-cy="profilePreference"
                                    className="w-full mt-1 p-2 h-[42px] text-sm text-gray-900 border  border-gray-300 rounded-md"
                                    id="profilePreference"
                                    value={preference}
                                    onChange={(e) =>
                                      setPreference(e.target.value)
                                    }
                                  >
                                    <option value="">Select Preference </option>
                                    <option value="MALE">Spouse</option>
                                    <option value="FEMALE">Child</option>
                                    <option value="OTHER">Sibling</option>
                                    <option value="OTHER">Parent</option>x
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab === 1 && (
                        <div className="">
                          <div className="">
                            <p className="text-base text-gray-700 mt-1">
                              Mandatory for International Travel
                            </p>
                            <div className="mt-8">
                              <div className="flex space-x-4">
                                <div className="w-1/2">
                                  <label
                                    htmlFor="passportNumber"
                                    className="text-base font-bold text-black"
                                  >
                                    Passport Number
                                  </label>
                                  <input
                                    id="passportNumber"
                                    type="text"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black"
                                  />
                                </div>
                                <div className="w-1/2">
                                  <label
                                    htmlFor="issuingCountry"
                                    className="text-base font-bold text-black"
                                  >
                                    Issuing Country
                                  </label>
                                  <select
                                    data-cy="profileIssuingCountry"
                                    className="w-full mt-1 p-2 h-[42px] text-sm text-gray-900 border  border-gray-300 rounded-md"
                                    id="profileIssuingCountry"
                                    value={issueingCountry}
                                    onChange={(e) =>
                                      setIssueingCountry(e.target.value)
                                    }
                                  >
                                    <option value="">
                                      Select Issuing Country{" "}
                                    </option>
                                    <option value="MALE">
                                      United Arab Emirates
                                    </option>
                                    <option value="FEMALE">Anguilla</option>
                                    <option value="OTHER">Antarctica</option>
                                    <option value="OTHER">Armenia</option>x
                                  </select>
                                </div>
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="passportExpiry"
                                  className="text-base font-bold text-black"
                                >
                                  Expiry Date
                                </label>
                                <div className="mt-1 border border-gray-300 rounded-md p-2">
                                  <p className="text-gray-500">
                                    Select Expiry Date
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab === 2 && (
                        <div className="">
                          <div className="">
                            <p className="text-base text-gray-700 mt-1">
                              Used only for booking related communications
                            </p>
                            <div className="mt-8">
                              <div className="flex space-x-4">
                                <div className="w-1/2">
                                  <label
                                    htmlFor="emailId"
                                    className="text-base font-bold text-black"
                                  >
                                    Email ID
                                  </label>
                                  <input
                                    id="emailId"
                                    type="email"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black"
                                  />
                                </div>
                                <div className="w-1/2">
                                  <label
                                    htmlFor="phoneNum"
                                    className="text-base font-bold text-black"
                                  >
                                    Phone No
                                  </label>
                                  <div className="mt-1 flex border border-gray-300 rounded-md">
                                    <div className="flex items-center px-3 border-r border-gray-300">
                                      <span className="font-bold text-gray-700">
                                        +91
                                      </span>
                                    </div>
                                    <input
                                      id="phoneNum"
                                      type="tel"
                                      className="w-full px-3 py-2 border-none focus:ring-0"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab === 3 && (
                        <div className="">
                          <div className="">
                            <div className="mt-8">
                              <div className="flex space-x-4">
                                <div className="w-1/2">
                                  <label
                                    htmlFor=""
                                    className="text-base font-bold text-black"
                                  >
                                    Frequent Flyer Airline
                                  </label>
                                  <select
                                    data-cy="profileairline"
                                    className="w-full mt-1 p-2 h-[42px] text-sm text-gray-900 border  border-gray-300 rounded-md"
                                    id="profileairline"
                                    value={airline}
                                    onChange={(e) => setAirline(e.target.value)}
                                  >
                                    <option value="">
                                      Select Issuing Country{" "}
                                    </option>
                                    <option value="MALE">Air India</option>
                                    <option value="FEMALE">Air Canada</option>
                                    <option value="OTHER">Air France</option>
                                    <option value="OTHER">Finnair</option>x
                                  </select>
                                </div>
                                <div className="w-1/2">
                                  <label
                                    htmlFor="frequentFlyerNumber"
                                    className="text-base font-bold text-black"
                                  >
                                    Frequent Flyer Number
                                  </label>
                                  <input
                                    id="frequentFlyerNumber"
                                    type="text"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className=" flex justify-between items-center mt-6">
                        <span
                          className="text-lg font-bold text-gray-700 cursor-pointer"
                          onClick={() => closePopup()}
                        >
                          Cancel
                        </span>
                        <button
                          type="submit"
                          className="bg-black text-white font-bold py-2 px-4 rounded-md"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

          )}


        </div>

      </div>
    </>
  );
};

export default page;
