import React from 'react'

const CabFilter = () => {
  return (
    <>
      <div className="h-full sticky top-24 bg-white myshadow px-5  py-3 w-full">
         
         <p className="font-bold text-[20px] mt-2 mb-5">Select Filters</p>

         <div className="mb-8">
           <p className="font-bold text-[16px] mb-4">Cab Type</p>
           <div data-testid="" className="flex justify-between w-full mb-4">
             <span className="checkmarkOuter">
               <input type="checkbox" className="mr-2" />
               <label>SEDAN</label>
             </span>
             <p className="text-[12px] text-gray-500">(1)</p>
           </div>
           <div data-testid="" className="flex justify-between w-full mb-4">
             <span className="checkmarkOuter">
               <input type="checkbox" className="mr-2" />
               <label>SUV</label>
             </span>
             <p className="text-[12px] text-gray-500">(6)</p>
           </div>
         </div>

         <div className="mb-8">
           <p className="font-bold text-[16px] mb-4">Fuel Type</p>
           <div data-testid="" className="flex justify-between w-full mb-4">
             <span className="checkmarkOuter">
               <input type="checkbox" className="mr-2" />
               <label>ELECTRIC</label>
             </span>
             <p className="text-[12px] text-gray-500">(4)</p>
           </div>
           <div data-testid="" className="flex justify-between w-full mb-4">
             <span className="checkmarkOuter">
               <input type="checkbox" className="mr-2" />
               <label>DIESEL</label>
             </span>
             <p className="text-[12px] text-gray-500">(3)</p>
           </div>
         </div>

         <div className="mb-8">
           <p className="font-bold text-[16px] mb-4">Cab Model</p>
           <div data-testid="" className="flex justify-between w-full mb-4">
             <span className="checkmarkOuter">
               <input type="checkbox" className="mr-2" />
               <label>Tata Tigor</label>
             </span>
             <p className="text-[12px] text-gray-500">(1)</p>
           </div>
           <div data-testid="" className="flex justify-between w-full mb-4">
             <span className="checkmarkOuter">
               <input type="checkbox" className="mr-2" />
               <label>MG ZS</label>
             </span>
             <p className="text-[12px] text-gray-500">(1)</p>
           </div>
           <div data-testid="" className="flex justify-between w-full mb-4">
             <span className="checkmarkOuter">
               <input type="checkbox" className="mr-2" />
               <label>BYD E6</label>
             </span>
             <p className="text-[12px] text-gray-500">(1)</p>
           </div>
           <div data-testid="" className="flex justify-between w-full mb-4">
             <span className="checkmarkOuter">
               <input type="checkbox" className="mr-2" />
               <label>BYD</label>
             </span>
             <p className="text-[12px] text-gray-500">(1)</p>
           </div>
           <div data-testid="" className="flex justify-between w-full mb-4">
             <span className="checkmarkOuter">
               <input type="checkbox" className="mr-2" />
               <label>Toyota Innova</label>
             </span>
             <p className="text-[12px] text-gray-500">(1)</p>
           </div>
           <div data-testid="" className="flex justify-between w-full mb-4">
             <span className="checkmarkOuter">
               <input type="checkbox" className="mr-2" />
               <label>Innova Crysta</label>
             </span>
             <p className="text-[12px] text-gray-500">(1)</p>
           </div>
         </div>
       </div>

    </>
  )
}

export default CabFilter