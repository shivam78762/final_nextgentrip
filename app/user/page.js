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
  const [activeTab, setActiveTab] = useState(0);
  const [activeItem, setActiveItem] = useState("profile");
  const [userinfo, setUserinfo] = useState(null);
  const router = useRouter();

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

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Navigation handlers
  const handleItemClick = (item, ref) => {
    setActiveItem(item);
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTabChange = (index) => setActiveTab(index);

  // Logout handler
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
        // Initialize form data with user info if available
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

    fetchUserData();
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 text-center">
                <div className="mx-auto w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/user-profile.webp"
                    width={160}
                    height={160}
                    alt="Profile"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {userinfo?.name || "Welcome"}
                </h3>
                <p className="text-sm text-gray-500 mt-1">PERSONAL PROFILE</p>
              </div>

              <nav className="mt-2">
                <ul className="space-y-1 p-2">
                  {[
                    { icon: <CgProfile />, label: "Profile", ref: profileRef, id: "profile" },
                    { icon: <LuLogOut />, label: "Login Details", ref: loginDetailsRef, id: "loginDetails" },
                    { icon: <LuUsers2 />, label: "Co-Travellers", ref: coTravellersRef, id: "coTravellers" },
                    { icon: <AiOutlineLogout />, label: "Logout", ref: logoutRef, id: "logout", action: handleLogout },
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => item.action ? item.action() : handleItemClick(item.id, item.ref)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors ${activeItem === item.id ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"}`}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                      </button>
                    </li>
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

            {/* Co-Travellers Section */}
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