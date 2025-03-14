import React from "react";

const HotelFilter = () => {
  return (
    <>
      <div className="h-full sticky top-24 bg-white  px-5  py-3 w-full">
        <div className="mb-8">
          <p className="font-bold text-[20px] mt-2 mb-5">Select Filters</p>
          <p className="font-bold text-[16px] mb-4"></p>
          <div data-testid="" className="flex justify-between w-full mb-4">
            <span className="checkmarkOuter">
              <input type="checkbox" className="mr-2" />
              <label>Last Minute Deals</label>
            </span>
            <p className="text-[12px] text-gray-500">₹ 6,706</p>
          </div>
          <div data-testid="" className="flex justify-between w-full mb-4">
            <span className="checkmarkOuter">
              <input type="checkbox" className="mr-2" />
              <label>5 Star</label>
            </span>
            <p className="text-[12px] text-gray-500">₹ 6,051</p>
          </div>
          <div data-testid="" className="flex justify-between w-full mb-4">
            <span className="checkmarkOuter">
              <input type="checkbox" className="mr-2" />
              <label>North Goa</label>
            </span>
            <p className="text-[12px] text-gray-500">₹ 6,664</p>
          </div>
          <div data-testid="" className="flex justify-between w-full mb-4">
            <span className="checkmarkOuter">
              <input type="checkbox" className="mr-2" />
              <label>Villas</label>
            </span>
            <p className="text-[12px] text-gray-500">₹ 6,051</p>
          </div>
          <div data-testid="" className="flex justify-between w-full mb-4">
            <span className="checkmarkOuter">
              <input type="checkbox" className="mr-2" />
              <label>Entire Property</label>
            </span>
            <p className="text-[12px] text-gray-500">₹ 6,051</p>
          </div>
        </div>

        <div className="mb-8">
          <p className="font-bold text-[16px] mb-4">Price per night</p>
          <div data-testid="" className="flex justify-between w-full mb-4">
            <span className="checkmarkOuter">
              <input type="checkbox" className="mr-2" />
              <label>Non Stop</label>
            </span>
            <p className="text-[12px] text-gray-500">₹ 6,706</p>
          </div>
          <div data-testid="" className="flex justify-between w-full mb-4">
            <span className="checkmarkOuter">
              <input type="checkbox" className="mr-2" />
              <label>1 Stop</label>
            </span>
            <p className="text-[12px] text-gray-500">₹ 6,706</p>
          </div>
        </div>

        <div className="mb-8">
          <p className="font-bold text-[16px] mb-4">Luxe Selections</p>
          <div data-testid="" className="flex justify-between w-full mb-4">
            <span className="checkmarkOuter">
              <input type="checkbox" className="mr-2" />
              <label>Air India</label>
            </span>
            <p className="text-[12px] text-gray-500">₹ 9,676</p>
          </div>
          <div data-testid="" className="flex justify-between w-full mb-4">
            <span className="checkmarkOuter">
              <input type="checkbox" className="mr-2" />
              <label>Air India Express</label>
            </span>
            <p className="text-[12px] text-gray-500">₹ 9,676</p>
          </div>
          <div data-testid="" className="flex justify-between w-full mb-4">
            <span className="checkmarkOuter">
              <input type="checkbox" className="mr-2" />
              <label>Akasa Air</label>
            </span>
            <p className="text-[12px] text-gray-500">₹ 9,676</p>
          </div>
          <div data-testid="" className="flex justify-between w-full mb-4">
            <span className="checkmarkOuter">
              <input type="checkbox" className="mr-2" />
              <label>IndiGo</label>
            </span>
            <p className="text-[12px] text-gray-500">₹ 9,676</p>
          </div>
          <div data-testid="" className="flex justify-between w-full mb-4">
            <span className="checkmarkOuter">
              <input type="checkbox" className="mr-2" />
              <label>SpiceJet</label>
            </span>
            <p className="text-[12px] text-gray-500">₹ 9,676</p>
          </div>
          <div data-testid="" className="flex justify-between w-full mb-4">
            <span className="checkmarkOuter">
              <input type="checkbox" className="mr-2" />
              <label>Star Air</label>
            </span>
            <p className="text-[12px] text-gray-500">₹ 9,676</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelFilter;
