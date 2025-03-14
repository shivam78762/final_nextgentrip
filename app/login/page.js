'use client'



import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
// import { apilink } from "../../";
// import { apilink } from '../../Component/common';
import { useRouter } from "next/navigation";
import { toast, Bounce } from "react-toastify";
// import apilink from '../..'
import Image from 'next/image';
const page = () => {


    const route = useRouter();
    const [otpSend,setOtpsend]=useState(false)
    const [otp,setotp]=useState();
    const [showpassword, setshowpassword] = useState({
      login: false,
      signup: false,
    });
    const [loginpage, setloginpage] = useState(false);
    const [sighupinfo, setsighupinfo] = useState({});
    const [logininfo, setlogininfo] = useState({});
  
    useEffect(() => {
      const alreadylogin = JSON.parse(localStorage.getItem("NextGenUser"));
      if (alreadylogin) {
        route.push("/");
      }
    }, []);
  
  
    const handelVerify=async()=>{
  
  
      const res = await axios.post(`${apilink}/user/verifyotp`, {
    
        email: sighupinfo.semail,
        otp
      });
   
      if (res.data.success) {
        localStorage.setItem("NextGenUser", JSON.stringify(res.data.info.id));
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
  
          transition: Bounce,
        });
        setOtpsend(true)
        route.push("/");
      } else {
      
        toast.error(res.data.message, {
          position: "top-right",
          autoClose: 5000,
  
          transition: Bounce,
        });
      }
  
    }
  
  
    const handelSignup = async () => {
      const res = await axios.post(`${apilink}/user/signup`, {
        name: `${sighupinfo.fname} ${sighupinfo.lname}`,
        email: sighupinfo.semail,
        password: sighupinfo.spassword,
      });
  
      if (res.data.success) {
        // localStorage.setItem("NextGenUser", JSON.stringify(res.data.info.id));
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
  
          transition: Bounce,
        });
        setOtpsend(true)
        // route.push("/");
      } else {
        setsighupinfo({ ...sighupinfo, semail: "", spassword: "" });
        toast.error(res.data.message, {
          position: "top-right",
          autoClose: 5000,
  
          transition: Bounce,
        });
      }
  
  
  
    };
  
  
  
  
  
  
    const handelLogin = async () => {
      const res = await axios.post(`${apilink}/user/login`, {
        email: logininfo.email,
        password: logininfo.password,
      });
  
      if (res.data.success) {
        localStorage.setItem("NextGenUser", JSON.stringify(res.data.info.id));
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
  
          transition: Bounce,
        });
        route.push("/");
      } else {
        toast.error(res.data.message, {
          position: "top-right",
          autoClose: 5000,
  
          transition: Bounce,
        });
      }
    };

    const [isLogin, setIsLogin] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images for the carousel
  const images = [
    '/travel-image-1.jpg', // Replace with your image paths
    '/travel-image-2.jpg',
    '/travel-image-3.jpg',
  ];

  // Automatically change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

    

    return(<>



 <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-6xl w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">

        <div className="w-full md:w-1/2 relative">
          <Image
            src="/Flux_Dev_A_cheerful_family_of_four_enjoying_a_peaceful_lakesid_0.webp"
            alt="Travel Image"
            layout="fill"
            objectFit="cover"
            className="rounded-l-lg"
          />
        </div>


        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            {isLogin ? 'Welcome Back!' : 'Create an Account'}
          </h2>
          <form>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-200 font-bold"
              type="submit"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>


   


   

 
    </>)
}

export default page;
