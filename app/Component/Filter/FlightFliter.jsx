import React,{useState} from "react";

const FlightFliter = ({airlines,handelFilter,handelnonstop}) => {
 
  const [filters, setFilters] = useState({
    nonStop: false,
    refundableFares: false,
    indiGo: false,
    morningDepartures: false,
  });


  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
  
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));


  };


  return (
    <>
      <div className="h-full sticky top-24 bg-white myshadow px-5  py-3 w-full ">
        <div className="mb-8">
          <p className="font-bold text-[20px] mt-2 mb-5">Popular Filters</p>
          <p className="font-bold text-[16px] mb-4"></p>
          <div data-testid="" className="flex justify-between w-full mb-4">
            <span className="checkmarkOuter">
            <input type="radio" className="mr-2" id="nonstop" name="nonstop" value="direct" onChange={(e)=>handelnonstop(e)} />
              <label >Non Stop</label>
            </span>
          </div>
          <div data-testid="" className="flex justify-between w-full mb-4">
            <span className="checkmarkOuter">
            <input type="radio" className="mr-2" name="airlines"  value='Indigo'  onClick={(e)=>handelFilter(e.target.value)} />
              <label>Refundable Fares</label>
            </span>
          </div>
          <div data-testid="" className="flex justify-between w-full mb-4">
            <span className="checkmarkOuter">
            <input type="radio" className="mr-2" name="airlines"  value='Indigo'  onClick={(e)=>handelFilter(e.target.value)} />
            
              <label>IndiGo</label>
            </span>
          </div>
          <div data-testid="" className="flex justify-between w-full mb-4">
            <span className="checkmarkOuter">
            <input type="radio" className="mr-2" name="airlines"  value='Indigo'  onClick={(e)=>handelFilter(e.target.value)} />
              <label>Morning Departures</label>
            </span>
          </div>
        </div>

        <div className="mb-8">
          <p className="font-bold text-[16px] mb-4">Stops From New Delhi</p>
          <div data-testid="" className="flex justify-between w-full mb-4">
            <span className="checkmarkOuter">
              <input type="radio" className="mr-2" id="nonstop" name="nonstop" value="direct" onChange={(e)=>handelnonstop(e)} />
              <label htmlFor="nonstop">Non Stop</label>
            </span>
            {/* <p className="text-[12px] text-gray-500">₹ 6,706</p> */}
          </div>
          <div data-testid="" className="flex justify-between w-full mb-4">
            <span className="checkmarkOuter">
              <input type="radio" className="mr-2" name="nonstop"  id="1stop" value="indirect" onChange={(e)=>handelnonstop(e)}/>
              <label htmlFor="1stop">1 Stop</label>
            </span>
            {/* <p className="text-[12px] text-gray-500">₹ 6,706</p> */}
          </div>
        </div>

        <div className="mb-8">
          <p className="font-bold text-[16px] mb-4">Airlines</p>
          <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="radio"  name="airlines" className="mr-2" id="All" value="All"  onClick={(e)=>handelFilter(e.target.value,e.target.checked)} />
                <label htmlFor="All" >All</label>
              </span>
              <p className="text-[12px] text-gray-500"></p>
            </div>
          {!airlines.length ? "": airlines.map((info)=>{
            return(
              <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="radio" className="mr-2" id={info} name="airlines"  value={info}  onClick={(e)=>handelFilter(e.target.value)} />
                <label htmlFor={info} >{info}</label>
              </span>
              <p className="text-[12px] text-gray-500"></p>
            </div>
            )
          })}
         
        
        </div>
      </div>
    </>
  );
};

export default FlightFliter;
