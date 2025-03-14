"use client"
import React, { useState } from 'react'

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 const [showlogin,setshowlogin]=useState(false)

 const [uemail,setuemail]=useState("")
 const [username, setUsername] = useState('');
 const [upassword, setuPassword] = useState('');


const handleLogin=()=>{

}

const handleSignup=()=>{


    
}


  return (
    <div className='w-full flex justify-center py-36 '>
      

<div>

    
<div className='flex gap-2 text-xl  font-bold  justify-center my-3'>  <span onClick={()=>setshowlogin(false)} className={`${!showlogin?"border-b-2 border-b-blue-700":"border-b-2 border-b-transparent"} p-2 cursor-pointer`}>Login</span> <span onClick={()=>setshowlogin(true)} className={`cursor-pointer p-2 ${showlogin?"border-b-2 border-b-blue-700":"border-b-2 border-b-transparent"}`}>Signup</span>   </div>
{!showlogin &&   <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account? <p className="text-blue-500 hover:underline cursor-pointer" onClick={()=>setshowlogin(true)}>Sign up</p>
        </p>
      </div>}

      {showlogin &&      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="uemail">Email</label>
            <input
              type="email"
              id="uemail"
              value={uemail}
              onChange={(e) => setuemail(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="upassword">Password</label>
            <input
              type="password"
              id="upassword"
              value={upassword}
              onChange={(e) => setuPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <p className="text-blue-500 hover:underline cursor-pointer" onClick={()=>setshowlogin(false)} >Login</p>
        </p>
      </div>

      }

</div>


    </div>
  )
}

export default UserLogin
