import React from 'react'
import { FaStar } from 'react-icons/fa'

const FlightHotelFilter = () => {
  return (
    <>
     <div className="h-full sticky top-24 bg-white border rounded-none md:rounded-lg  px-5  py-3 w-full">
          <div className="mb-8">
            <p className="font-bold text-[20px] mt-2 mb-5">Filter</p>
            <p className="font-bold text-[16px] mb-4">Price</p>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>₹ 3968 - ₹ 5967 </label>
              </span>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>₹ 3968 - ₹ 5967</label>
              </span>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>₹ 3968 - ₹ 5967</label>
              </span>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>₹ 3968 - ₹ 5967</label>
              </span>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>₹ above 5967</label>
              </span>
            </div>
          </div>

          <div className="mb-8">
            <p className="font-bold text-[16px] mb-4">Star Rating</p>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="flex gap-2">
                <input type="checkbox" className="mr-2" />
                <label className="flex gap-1 text-[#ffc107]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </label>
              </span>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
            <span className="flex gap-2">
                <input type="checkbox" className="mr-2" />
                <label className="flex gap-1 text-[#ffc107]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </label>
              </span>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
            <span className="flex gap-2">
                <input type="checkbox" className="mr-2" />
                <label className="flex gap-1 text-[#ffc107]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </label>
              </span>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
            <span className="flex gap-2">
                <input type="checkbox" className="mr-2" />
                <label className="flex gap-1 text-[#ffc107]">
                  <FaStar />
                  <FaStar />
                 
                </label>
              </span>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
            <span className="flex gap-2">
                <input type="checkbox" className="mr-2" />
                <label className="flex gap-1 text-[#ffc107]">
                  <FaStar />
                 
                </label>
              </span>
            </div>
          </div>

          <div className="mb-8">
  <p className="font-bold text-[16px] mb-4">Area Attraction</p>
  <div className="h-52 overflow-hidden overflow-y-auto custom-scrollbar">
    <div className="flex justify-between w-full mb-4">
      <span className="checkmarkOuter">
        <input type="checkbox" className="mr-2" />
        <label>Gateway of India</label>
      </span>
    </div>
    <div className="flex justify-between w-full mb-4">
      <span className="checkmarkOuter">
        <input type="checkbox" className="mr-2" />
        <label>Elephanta Caves</label>
      </span>
    </div>
    <div className="flex justify-between w-full mb-4">
      <span className="checkmarkOuter">
        <input type="checkbox" className="mr-2" />
        <label>Akasa Air</label>
      </span>
    </div>
    <div className="flex justify-between w-full mb-4">
      <span className="checkmarkOuter">
        <input type="checkbox" className="mr-2" />
        <label>Mt. Mary Church</label>
      </span>
    </div>
    <div className="flex justify-between w-full mb-4">
      <span className="checkmarkOuter">
        <input type="checkbox" className="mr-2" />
        <label>Shri Swaminarayan Temple</label>
      </span>
    </div>
    <div className="flex justify-between w-full mb-4">
      <span className="checkmarkOuter">
        <input type="checkbox" className="mr-2" />
        <label>ISKCON Temple</label>
      </span>
    </div>
  </div>
</div>

        </div></>
  )
}

export default FlightHotelFilter