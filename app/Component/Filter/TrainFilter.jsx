import React from 'react'

const TrainFilter = () => {
  return (
    <>
      <div className="h-full sticky top-24 bg-white myshadow px-5  py-3 w-full">
          <div className="mb-8">
            <p className="font-bold text-[20px] mt-2 mb-5">Popular Filters</p>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>AC </label>
              </span>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>Available</label>
              </span>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>Departure after 6 PM</label>
              </span>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>Arrival before 12 PM</label>
              </span>
            </div>
          </div>
          <div className="mb-8">
            <p className="font-bold text-[16px] mb-4">Ticket Types</p>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>Free Cancellation</label>
              </span>
              <p className="text-[12px] text-gray-500">(55)</p>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>Trip Guarantee</label>
              </span>
              <p className="text-[12px] text-gray-500">(33)</p>
            </div>
          </div>

          <div className="mb-8">
            <p className="font-bold text-[16px] mb-4">Journey Class Filters</p>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>1st Class AC - 1A</label>
              </span>
              <p className="text-[12px] text-gray-500">(37)</p>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>2 Tier AC - 2A</label>
              </span>
              <p className="text-[12px] text-gray-500">(44)</p>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>3 Tier AC - 3A</label>
              </span>
              <p className="text-[12px] text-gray-500">(49)</p>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>AC three tier(economy) - 3E</label>
              </span>
              <p className="text-[12px] text-gray-500">(29)</p>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>Sleeper - SL</label>
              </span>
              <p className="text-[12px] text-gray-500">(41)</p>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>AC Chair Car - CC</label>
              </span>
              <p className="text-[12px] text-gray-500">(6)</p>
            </div>
          </div>
        </div>

    </>
  )
}

export default TrainFilter