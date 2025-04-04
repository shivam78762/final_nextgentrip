"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { apilink } from "../../Component/common/index";
// import { apilink } from '../../Component/common';
import { useRouter } from "next/navigation";
import { toast, Bounce } from "react-toastify";

const page = () => {
  const route = useRouter();
  const [otpSend, setOtpsend] = useState(false);
  const [otp, setotp] = useState();
  const [showpassword, setshowpassword] = useState({
    login: false,
    signup: false,
  });
  const [loginpage, setloginpage] = useState(false);
  const [sighupinfo, setsighupinfo] = useState({});
  const [logininfo, setlogininfo] = useState({});
const [loader ,setloader]=useState(false)
  useEffect(() => {
    const alreadylogin = JSON.parse(localStorage.getItem("NextGenUser"));
    if (alreadylogin) {
      route.push("/");
    }
  }, []);

  const handelVerify = async () => {
setloader(true)

    const res = await axios.post(`${apilink}/user/verifyotp`, {
      email: sighupinfo.semail,
      otp,
    });

    if (res.data.success) {
      localStorage.setItem("NextGenUser", JSON.stringify(res.data.info.id));
      toast.success(res.data.message, {
        position: "top-right",
        autoClose: 5000,

        transition: Bounce,
      });
      setOtpsend(true);
      route.push("/");
    } else {
      toast.error(res.data.message, {
        position: "top-right",
        autoClose: 5000,

        transition: Bounce,
      });
    }
    setloader(false)
  };

  const handelSignup = async () => {
    setloader(true)
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
      setOtpsend(true);
      // route.push("/");
    } else {
      setsighupinfo({ ...sighupinfo, semail: "", spassword: "" });
      toast.error(res.data.message, {
        position: "top-right",
        autoClose: 5000,

        transition: Bounce,
      });
    }
    setloader(false)
  };

  const handelLogin = async () => {
    setloader(true)
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
    setloader(false)
  };

  return (
    <div className="min-h-[70vh] bg-[rgba(212,212,212,0.52)] flex justify-center items-center ">
      <div className="relative">
        
        <div
          className={`  absolute w-[93.5%] md:w-full max-h-full top-0 left-3 md:left-0 bg-white p-5 rounded-md shadow-md flex flex-col items-center gap-3  ${
            loginpage
              ? "scale-0 origin-top-left"
              : "scale-1 origin-bottom-right"
          } duration-700`}
        >
          <div className="w-2/5  md:w-1/4">
            <img src="/images/NextGenTrip.jpg" />
          </div>

          <div className="text-[#4B97F0] font-bold">
            {" "}
            <span className="text-orange-600">Welcome </span> to Next Gen{" "}
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={logininfo.email}
              id="email"
              placeholder="Enter Email"
              onChange={(e) =>
                setlogininfo({ ...logininfo, email: e.target.value })
              }
              className="border p-1 px-2 rounded-md"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <div className="w-full relative">
              <input
                type={`${showpassword.login ? "text" : "password"}`}
                value={logininfo.password}
                onChange={(e) =>
                  setlogininfo({ ...logininfo, password: e.target.value })
                }
                id="password"
                placeholder="Enter password"
                className="border p-1 px-2 rounded-md w-full"
              />
              <div
                className="absolute right-5 top-1.5 cursor-pointer text-xl font-semibold"
                onClick={() =>
                  setshowpassword({ login: !showpassword.login, signup: false })
                }
              >
                {showpassword.login ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
          </div>

          <div className="text-blue-700 text-end w-full">Forgot password?</div>
          <div>
            <button
              className="text-white bg-blue-600 px-4 py-1 rounded-lg font-semibold text-xl"
              onClick={handelLogin}
              disabled={loader}
            >
              
              {loader?"loading...":"Login"}
            </button>
          </div>

          <div className="cursor-pointer" onClick={() => setloginpage(true)}>
            Don't have Account? Signup
          </div>
        </div>

   
        <div className="p-3">
          <div
            className={`bg-white p-2 md:p-5 md:w-[40rem] rounded-md shadow-md flex flex-col md:items-center gap-3  ${
              !loginpage
                ? "scale-0 origin-bottom-right"
                : "scale-1 origin-top-left"
            } duration-700`}
          >
            <div className="flex justify-center">
              <img src="/images/NextGenTrip.jpg" className="w-1/2  md:w-1/4 " />
            </div>

            <div className="text-[#4B97F0] font-bold text-center">
              {" "}
              <span className="text-orange-600">Welcome </span> to Next Gen{" "}
            </div>
            <div className="md:w-full flex flex-col md:flex-row  md:gap-5">
              <div className=" flex flex-col gap-1 w-full">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  id="fname"
                  value={sighupinfo.fname}
                  placeholder="First name"
                  required
                  className="border p-1 px-2 rounded-md"
                  onChange={(e) =>
                    setsighupinfo({ ...sighupinfo, fname: e.target.value })
                  }
                />
              </div>
              <div className=" flex flex-col gap-1 md:w-full">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  value={sighupinfo.lname}
                  placeholder="Last name"
                  required
                  className="border p-1 px-2 rounded-md"
                  onChange={(e) =>
                    setsighupinfo({ ...sighupinfo, lname: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="md:w-full flex flex-col gap-1">
              <label htmlFor="semail">Email</label>
              <input
                type="email"
                id="semail"
                value={sighupinfo.semail}
                placeholder="Enter Email"
                required
                onChange={(e) =>
                  setsighupinfo({ ...sighupinfo, semail: e.target.value })
                }
                className="border p-1 px-2 rounded-md"
              />
            </div>
            <div className="md:w-full flex flex-col gap-1">
              <label htmlFor="spassword">Password</label>
              <div className="w-full relative">
                <input
                  type={`${showpassword.signup ? "text" : "password"}`}
                  value={sighupinfo.spassword}
                  id="spassword"
                  placeholder="Enter password"
                  className="border p-1 px-2 rounded-md w-full"
                  required
                  onChange={(e) =>
                    setsighupinfo({ ...sighupinfo, spassword: e.target.value })
                  }
                />
                <div
                  className="absolute right-5 top-1.5 cursor-pointer text-xl font-semibold"
                  onClick={() =>
                    setshowpassword({
                      login: false,
                      signup: !showpassword.signup,
                    })
                  }
                >
                  {showpassword.signup ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
            </div>
            {otpSend && (
              <div className="md:w-full flex flex-col gap-1">
                <label htmlFor="otp">Otp</label>
                <input
                  type="number"
                  id="otp"
                  value={otp}
                  placeholder="Enter Otp"
                  maxLength="6"
                  onChange={(e) => setotp(e.target.value)}
                  className="border p-1 px-2 rounded-md"
                />
              </div>
            )}
            <div className="text-center">
              {!otpSend && (
                <button
                  className="text-white bg-blue-600 px-4 py-1 rounded-lg font-semibold text-xl"
                  onClick={handelSignup}
                  disabled={loader}
                >
                   {loader?"loading...":"Signup"}
                  
                </button>
              )}
              {otpSend && (
                <button
                  className="text-white bg-green-600 px-4 py-1 rounded-lg font-semibold text-xl"
                  onClick={handelVerify}
                  disabled={loader}
                >
                   {loader?"loading...":"Verify Otp"}

                  
                </button>
              )}{" "}
            </div>

            <div
              className="cursor-pointer text-center"
              onClick={() => setloginpage(false)}
            >
              Already have account? Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
