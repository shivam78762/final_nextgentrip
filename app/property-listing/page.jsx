"use client"
import { useState } from 'react';
import { FaUser, FaPhoneAlt, FaLock } from 'react-icons/fa';
import Link from 'next/link';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import axios from 'axios';
import { adminLink, apilink, imgurl } from '../Component/common';
import { toast, Bounce } from 'react-toastify';
import { useRouter } from 'next/navigation';




export default function page() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '+91',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const [sendOtp, setSendOtp] = useState(false)
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const route = useRouter()
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically focus on next input if the current one is filled
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Move focus to previous input when backspace is pressed
    if (e.key === 'Backspace' && !otp[index]) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  const Otp = (e) => {

    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    try {
      const info = await axios.post(`${apilink}/hotelreq/otp`, { 
        phone: formData.phone, 
        email: formData.email 
      });
      
      if (info.data.success) {
        toast.success(info.data.message, {
          position: "top-right",
          autoClose: 5000,
          transition: Bounce,
        });
        setSendOtp(true);
      } else {
        toast.error(info.data.message, {
          position: "top-right",
          autoClose: 5000,
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        transition: Bounce,
      });
    } finally {
      setIsLoading(false); // Stop loading
    }
  };





  const handelnumber = (e) => {
    setFormData((prev) => ({ ...prev, "phone": e }));

  }



  const handelotpverify = async () => {
    setIsLoading(true); // Start loading for OTP verification
    const newformentotp = otp.join("");
    
    try {
      const info = await axios.post(`${apilink}/hotelreq/signupHotel`, { 
        email: formData.email, 
        phone: formData.phone, 
        name: `${formData.firstName} ${formData.lastName}`, 
        otp: newformentotp, 
        password: formData.password 
      });

      if (info.data.success) {
        toast.success(info.data.message, {
          position: "top-right",
          autoClose: 5000,
          transition: Bounce,
        });
        setSendOtp(false);
        route.push(`https://api.jasskaran.in/hotelreg/login`);
      } else {
        toast.error(info.data.message, {
          position: "top-right",
          autoClose: 5000,
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error("An error occurred during verification. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        transition: Bounce,
      });
    } finally {
      setIsLoading(false); 
    }
  };

  return (<>
    <div className={`fixed h-screen w-screen top-0 flex justify-center items-center left-0  bg-[#00000074] z-50 ${sendOtp ? "scale-100" : "scale-0"} duration-200`}>
      <div className='bg-white px-10 py-10 flex flex-col gap-5 relative '>
        <p className='text-green-600  text-center font-semibold text-xl my-3'>Otp Sent</p>
        <div
        >
          <p className='my-2 font-semibold'>Enter Otp</p>
          <div className="flex space-x-2 justify-center  ">

            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center text-2xl  bg-[#00000093] text-white font-semibold border-b-2 border-gray-300 focus:border-indigo-500 outline-none transition-colors"
              />
            ))}
          </div>
          <p className='my-1 text-[#80808085] text-sm'>Please don't shear otp</p>
        </div>

        <div className='text-center'><button className='p-2 px-3 bg-green-600 text-white font-bold rounded-md' disabled={isLoading} onClick={handelotpverify}> 
          
        {isLoading ? (
                <>
                  <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                  Verifying...
                </>
              ) : (
                'Verify Otp'
              )}
          </button> </div>
      </div>

    </div>

    <div className="flex items-center py-5 justify-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
      <div className="w-[80%] max-w-lg p-4 lg:p-8 bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name */}
          <div className="relative">
            <label htmlFor="firstName" className="text-sm font-medium text-gray-600">First Name</label>
            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-blue-500 mt-2">
              <FaUser className="text-gray-500 mr-3" />
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={Otp}
                required
                className="w-full px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
                placeholder="Enter your first name"
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="relative">
            <label htmlFor="lastName" className="text-sm font-medium text-gray-600">Last Name</label>
            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-blue-500 mt-2">
              <FaUser className="text-gray-500 mr-3" />
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={Otp}
                required
                className="w-full px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
                placeholder="Enter your last name"
              />
            </div>
          </div>


          {/* email  */}

          <div className="relative">
            <label htmlFor="email" className="text-sm font-medium text-gray-600">Email</label>
            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-blue-500 mt-2">
              <FaUser className="text-gray-500 mr-3" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={Otp}
                required
                className="w-full px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
                placeholder="Enter Email "
              />
            </div>
          </div>







          {/* Phone */}
          <div className="relative">
            <label htmlFor="phone" className="text-sm font-medium text-gray-600">Phone</label>
            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-blue-500 mt-2 w-full">
              <FaPhoneAlt className="text-gray-500 mr-3" />
              <PhoneInput
                defaultCountry="ind"
                value={formData.phone}
                onChange={(e) => handelnumber(e)}
                className='w-[30rem]'
              />
            </div>
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="text-sm font-medium text-gray-600">Password</label>
            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-blue-500 mt-2">
              <FaLock className="text-gray-500 mr-3" />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={Otp}
                required
                className="w-full px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
    {isLoading ? (
                <>
                  <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                  Signing Up...
                </>
              ) : (
                'Sign Up'
              )}
          </button>

         
          <div className="text-center mt-4 flex justify-between">
            <Link href={`https://api.jasskaran.in/hotelreg/login`}  >
             
              <p className="text-sm text-blue-600 hover:text-blue-800">Allready have Account?</p>
           

            </Link>
          
          </div>
        </form>


      </div>
    </div>
  </>
  );
}




