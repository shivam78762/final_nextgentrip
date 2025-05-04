"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBusSeatLayout } from '../../../Component/Store/slices/busSeatlayout';
import { FaChair } from "react-icons/fa";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaUser, FaEnvelope, FaPhone, FaIdCard } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { toast } from 'react-toastify';
import axios from 'axios';
import { apilink } from '../../../Component/common';
import { useRouter } from "next/navigation";
const SelectSeaCompo = ({ slug }) => {
  const router = useRouter();
  const decodeslug = decodeURIComponent(slug);
  const params = new URLSearchParams(decodeslug)

  const resultindex = params.get("resultindex")

  const index = params.get("index")
  const dispatch = useDispatch();
  const state = useSelector(state => state.busSeatSlice)
  const url = "http://localhost:8000/api/v1"

  const [busSeatInfo, setBusSeatInfo] = useState();
  const [busBoarding, setBusBoarding] = useState();
  const [bookseatdeatle, setBookseatdeatle] = useState()
  const [bookinginfopage, setbookinginfopage] = useState(false)
  const currencylist = useSelector(state => state.currencySlice);
  const defaultcurrency = JSON.parse(localStorage.getItem("usercurrency")) || { symble: "₹", code: "INR", country: "India", }
  const cuntryprice = currencylist?.info?.rates?.[`${defaultcurrency.code}`]
  useEffect(() => {

    dispatch(getBusSeatLayout({ TraceId: index, ResultIndex: resultindex }))
  }, [])



  useEffect(() => {
    setBusSeatInfo(state && state.info && state.info?.buslayout?.GetBusSeatLayOutResult);

    setBusBoarding(state?.info?.busbording?.GetBusRouteDetailResult)
  }, [state])

  const handelseetbook = (seat) => {
    setBookseatdeatle({ seat });

  }

  const [passenger, setpassenger] = useState({
    LeadPassenger: true,
    PassengerId: 0,
    Title: "Mr.",
    Address: "delhi",
    Age: null,
    Email: "akshit@travelboutiqueonline.com",
    FirstName: "akshit",
    Gender: 1,
    IdNumber: null,
    IdType: null,
    LastName: "dhameja",
    Phoneno: "01234567890",
  })

  const [bookingdata, setbookingdata] = useState({ TraceId: index, ResultIndex: resultindex });

const booknow=async()=>{
  const res=await axios.post(`${apilink}/bus/book`,bookingdata)
  console.log(res.data)
}

  const handleBooking = async () => {

    const updatedData = {
      ...bookingdata,
      BoardingPointId: busBoarding?.BoardingPointsDetails[0]?.CityPointIndex,
      DropingPointId: busBoarding?.DroppingPointsDetails[0]?.CityPointIndex,
    };

    if (!updatedData || typeof updatedData !== 'object') {
      console.error('Invalid updatedData:', updatedData);
      return;
    }
    if (!busBoarding || !busBoarding.BoardingPointsDetails || !busBoarding.DroppingPointsDetails) {
      console.error('Invalid busBoarding:', busBoarding);
      return;
    }

    try {
      setbookingdata(updatedData);
      localStorage.setItem('busBookingData', JSON.stringify(updatedData));
      localStorage.setItem('busBoardingData', JSON.stringify(busBoarding));
      console.log('Stored in localStorage - busBookingData:', updatedData);
      console.log('Stored in localStorage - busBoardingData:', busBoarding);

      const query = encodeURIComponent(JSON.stringify(updatedData));
      const url = `/buses/checkout/data=${query}`;
      console.log('Navigating to:', url);
      router.push(url);
    } catch (error) {
      console.error('Error in handleBooking:', error);
    }


  };




  return (
    <div>
      {state.isLoading && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
            <h4 className="mt-4 text-white text-lg font-semibold">Loading...</h4>
          </div>
        </div>

      )}



      {busSeatInfo && <div className='flex  flex-col lg:flex-row gap-10  lg:justify-between' >

        <div

          className='mt-10'

          dangerouslySetInnerHTML={{
            __html: busSeatInfo?.SeatLayoutDetails?.HTMLLayout
          }}

        >


        </div>
        <div className='overflow-auto'>

          <p className="text-3xl font-bold text-center mb-6">Bus Seat Layout</p>
          {busSeatInfo?.SeatLayoutDetails?.SeatLayout?.SeatDetails?.map((setRow, rowindex) => {
            return (
              <div Key={rowindex} className='flex  gap-2 px-10  w-full'>
                {setRow.map((seat, index) => {
                  return (
                    <div
                      key={index}
                      className={`flex flex-col items-center p-4  mx-6 my-3 border rounded-lg shadow-md relative transition-all duration-300 ${!seat.SeatStatus
                          ? "bg-red-100 border-red-400" 
                          : "bg-green-100 border-green-400"
                        } cursor-pointer`}
                      onClick={() => (handelseetbook(seat.SeatStatus ? seat : null), setpassenger({ ...passenger, Seat: seat }))}


                    >
                      {bookseatdeatle?.seat?.SeatIndex == seat?.SeatIndex && seat.SeatStatus &&
                        <TiTick className='absolute top-1 text-2xl right-2' />
                      }
                      <FaChair
                        className={`text-2xl ${!seat.SeatStatus ? "text-red-600" : "text-green-600"
                          }`}
                      />


                      <span className="mt-2 text-lg font-semibold text-gray-800">
                        Seat {seat.SeatName}
                      </span>
                      <span className="text-sm text-gray-500">
                        {defaultcurrency.symble}   {(() => {
                          const offeredPrice = Number(seat.Price?.PublishedPriceRoundedOff || 0);
                          const priceString = offeredPrice.toFixed(2);
                          const [integerPart, decimalPart] = priceString.split(".");
                          return `${integerPart},${(decimalPart || "00").slice(0, 2)}`;
                        })()}
                      </span>


                      <span
                        className={`text-xs mt-1 uppercase font-bold ${!seat.SeatStatus ? "text-red-500" : "text-green-500"
                          }`}
                      >
                        {!seat.SeatStatus ? "Booked" : "Available"}
                      </span>
                    </div>
                  )


                })}
              </div>


            )




          })}
        </div>
      </div>}



      <div className='flex justify-center md:px-11 lg:px-24'>

        {/* <div className="  rounded-lg p-8 ">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center mt-2">
            Nextgentrip.com
          </h1>
          <form className="space-y-6">
  
            <div className='flex gap-5'>
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <select
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none transition duration-200"
                  required
                  value={passenger.Title}
                  onChange={(e) => setpassenger({ ...passenger, Title: e.target.value })}
                >
                  <option value="">Select</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                </select>
              </div>

     
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <div className="flex items-center border border-gray-300 rounded-lg mt-1 bg-gray-50 focus-within:ring focus-within:ring-indigo-300 transition">
                  <FaUser className="text-gray-400 mx-3" />
                  <input
                    type="text"
                    className="w-full p-3 bg-transparent outline-none placeholder-gray-400"
                    placeholder="Enter your first name"
                    required
                    value={passenger.FirstName}
                    onChange={(e) => setpassenger({ ...passenger, FirstName: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <div className="flex items-center border border-gray-300 rounded-lg mt-1 bg-gray-50 focus-within:ring focus-within:ring-indigo-300 transition">
                  <FaUser className="text-gray-400 mx-3" />
                  <input
                    type="text"
                    className="w-full p-3 bg-transparent outline-none placeholder-gray-400"
                    placeholder="Enter your Last name"
                    required
                    value={passenger.LastName}
                    onChange={(e) => setpassenger({ ...passenger, LastName: e.target.value })}
                  />
                </div>
              </div>


            </div>
    
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="flex items-center border border-gray-300 rounded-lg mt-1 bg-gray-50 focus-within:ring focus-within:ring-indigo-300 transition">
                <FaEnvelope className="text-gray-400 mx-3" />
                <input
                  type="email"
                  className="w-full p-3 bg-transparent outline-none placeholder-gray-400"
                  placeholder="Enter your email"
                  required
                  value={passenger.Email}
                  onChange={(e) => setpassenger({ ...passenger, Email: e.target.value })}
                />
              </div>
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <div className="flex items-center border border-gray-300 rounded-lg mt-1 bg-gray-50 focus-within:ring focus-within:ring-indigo-300 transition">
                <FaPhone className="text-gray-400 mx-3" />
                <input
                  type="tel"
                  className="w-full p-3 bg-transparent outline-none placeholder-gray-400"
                  placeholder="Enter your phone number"
                  required
                  value={passenger.Phoneno}
                  onChange={(e) => setpassenger({ ...passenger, Phoneno: e.target.value })}
                />
              </div>
            </div>


            <div className='flex gap-2'>
              <div className='w-full'>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none transition duration-200 bg-gray-50"
                  required
                  value={passenger.Gender}
                  onChange={(e) => setpassenger({ ...passenger, Gender: e.target.value })}
                >
                  <option value="">Select</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>

                </select>
              </div>

              <div className='w-full'>
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <input
                  type="number"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none transition duration-200 bg-gray-50"
                  placeholder="Enter your age"
                  required
                  value={passenger.Age}
                  onChange={(e) => setpassenger({ ...passenger, Age: e.target.value })}
                />
              </div>
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700">ID Type</label>
              <select
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none transition duration-200 bg-gray-50"
                required
                value={passenger.IdType}
                onChange={(e) => setpassenger({ ...passenger, IdType: e.target.value })}
              >
                <option value="">Select</option>
                <option value="Aadhaar card">Aadhaar card</option>
                <option value="PAN card">PAN card</option>
                <option value="Passport">Passport</option>
                <option value="Driving License">Driving License</option>
                <option value="Voter ID">Voter ID</option>
              </select>
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700">ID Number</label>
              <div className="flex items-center border border-gray-300 rounded-lg mt-1 bg-gray-50 focus-within:ring focus-within:ring-indigo-300 transition">
                <FaIdCard className="text-gray-400 mx-3" />
                <input
                  type="text"
                  className="w-full p-3 bg-transparent outline-none placeholder-gray-400"
                  placeholder="Enter your ID number"
                  required
                  value={passenger.IdNumber}
                  onChange={(e) => setpassenger({ ...passenger, IdNumber: e.target.value })}
                />
              </div>
            </div>

            


            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <div className="flex items-center border border-gray-300 rounded-lg mt-1 bg-gray-50 focus-within:ring focus-within:ring-indigo-300 transition">
                <FaMapMarkerAlt className="text-gray-400 mx-3" />
                <input
                  type="text"
                  className="w-full p-3 bg-transparent outline-none placeholder-gray-400"
                  placeholder="Enter your address"
                  required
                  value={passenger.Address}
                  onChange={(e) => setpassenger({ ...passenger, Address: e.target.value })}

                />
              </div>
            </div>



          


          </form>
        </div> */}

        {
              busBoarding &&
              <>




                <div className=" mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
         
                  <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
                    Bus Route Details
                  </h1>

                
                  <div className='flex justify-around items-center'>
                    <div className="mb-6 ">
                      <h2 className="text-2xl font-semibold mb-3 text-gray-700">
                        Boarding Points
                      </h2>
                      {busBoarding?.BoardingPointsDetails?.map((point, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-4 border-b border-gray-200 hover:bg-blue-50 rounded-lg transition"
                        >
                          <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                              {point.CityPointName}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              <FaClock className="inline-block mr-1 text-gray-500" />
                              Time: {new Date(point.CityPointTime).toLocaleString()}
                            </p>
                            <p className="text-gray-600 text-sm">
                              <FaPhoneAlt className="inline-block mr-1 text-gray-500" />
                              Contact: {point.CityPointContactNumber}
                            </p>
                            <p className="text-gray-600 text-sm">
                              Landmark: {point.CityPointLandmark}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='flex flex-col gap-[1px] rounded-lg group' onClick={() => handleBooking()}>
                      <div className='h-1 bg-orange-500 w-full group-hover:w-[0px] duration-300 rounded-t-full'></div>
                      <div className='bg-orange-500 text-white font-semibold p-1 px-3 rounded-md cursor-pointer ' type="submit" >Book Now</div>
                      <div className='h-1 bg-orange-500 w-full group-hover:w-[0px] duration-300 rounded-b-full	'></div>
                    </div>
                
                    <div>
                      <h2 className="text-2xl font-semibold mb-3 text-gray-700">
                        Dropping Points
                      </h2>
                      {busBoarding?.DroppingPointsDetails?.map((point, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-4 border-b border-gray-200 hover:bg-green-50 rounded-lg transition"
                        >
                          <FaMapMarkerAlt className="text-green-600 text-2xl" />
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                              {point.CityPointName}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              <FaClock className="inline-block mr-1 text-gray-500" />
                              Time: {new Date(point.CityPointTime).toLocaleString()}
                            </p>
                            <p className="text-gray-600 text-sm">
                              Location: {point.CityPointLocation}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>


                  </div>
                </div>


              </>

            }

      </div>






    </div>
  )
}

export default SelectSeaCompo
