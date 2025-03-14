"use client"
import React, { useEffect, useState } from 'react'

const Maintenance = () => {
  const targetDate = new Date("march 1, 2025 00:00:00").getTime();
  const [day,setdays]=useState()
  const [hour,sethours]=useState()
  const [minute,setminute]=useState()
const [sec,setsec]=useState()

  useEffect(()=>{
 const intervel= setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;


  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  setdays(days)
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
sethours(hours)

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
setminute(minutes)
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
setsec(seconds)
 

}, 1000);

return ()=>clearInterval(intervel)
  },[])

  return (
    <div className="w-full h-screen flex flex-col items-center justify-between">
      <div className="xl:w-1/2 flex-1 flex flex-col items-center justify-center text-center px-4 lg:px-0">
<svg xmlns="http://www.w3.org/2000/svg" width="256" height="193.86" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 387.72"><path fill-rule="nonzero" d="M150.22 108.7c1.83-4.93 5.06-8.44 9.68-10.55 4.62-2.12 9.42-2.3 14.31-.46l26.66 9.86c6.82-10.84 15.86-20.88 25.22-29.62L213.23 49.9c-2.17-4.72-2.37-9.47-.6-14.24 1.79-4.83 5.02-8.25 9.74-10.41L257.56 9.1c4.5-2.07 9.17-2.28 14.1-.54 4.85 1.74 8.36 4.97 10.52 9.7l11.78 25.66c12.65-2.55 25.71-3.44 38.58-2.52l11.09-29.25c1.6-4.83 4.68-8.31 9.36-10.46 4.62-2.12 9.37-2.23 14.33-.42l35.97 13.37c4.94 1.83 8.45 5.06 10.57 9.68 2.11 4.61 2.29 9.42.45 14.31l-9.86 26.66c10.83 6.82 20.87 15.86 29.62 25.22l28.02-12.86c4.73-2.17 9.48-2.37 14.25-.6 4.83 1.79 8.25 5.02 10.41 9.74l16.15 35.19c2.07 4.51 2.27 9.16.53 14.1-1.73 4.84-4.96 8.36-9.69 10.52l-25.66 11.78c2.59 12.84 3.36 25.83 2.67 38.91l29.1 10.76c4.83 1.61 8.31 4.68 10.46 9.37 2.12 4.61 2.23 9.36.42 14.33l-13.22 36.3c-1.92 4.74-5.22 8.11-9.83 10.22-4.62 2.12-9.35 2.45-14.17.79l-26.81-10.19c-6.96 10.9-15.76 20.79-25.21 29.62l12.86 28.03c2.17 4.72 2.37 9.46.6 14.24-1.79 4.83-5.02 8.25-9.74 10.41l-35.19 16.15c-4.51 2.07-9.17 2.27-14.1.53-4.85-1.74-8.36-4.96-10.53-9.69l-11.77-25.66c-12.85 2.6-25.83 3.36-38.91 2.67l-10.76 29.1c-1.61 4.83-4.75 8.34-9.48 10.51-4.79 2.2-9.5 2.29-14.22.37l-36.3-13.23c-4.75-1.91-8.11-5.21-10.23-9.82-2.12-4.62-2.44-9.35-.78-14.17l10.18-26.8c-3.54-2.23-7-4.7-10.36-7.34l26.49-13.34c6.17-2.96 11.28-3.39 16.08-2.81 3.25 1.6 6.58 3.03 9.99 4.3 13.15 4.88 27.11 7.07 41.81 6.79 44.52-1.39 84.89-30.26 100.39-72.05 10.24-27.62 8.85-57.83-3.4-84.52-18.79-40.93-58.49-65.37-103.67-64.48-29.42.94-58.38 14.24-78.28 35.93-12.77 14.29-21.5 30.83-25.84 48.31-3.74 6.68-7.38 12.01-10.86 13.67l.03.06-28.85 14.16c-.02-3.47.08-6.93.32-10.35l-29.24-11.09c-4.83-1.61-8.31-4.68-10.46-9.37-2.12-4.62-2.23-9.36-.42-14.33l13.37-35.97zM76.47 387.6c-21.09 1.29-42.99-7.8-60.19-23.99 86.39.08 69.92-104.82-16.28-69.23 11.8-42.95 50.13-59.96 91.4-51.04 21.83 4.7 34.79 8.63 55.41-.7l73.31-35.99c39.09-18.59 31.6-88.19 97.31-92.18 21.09-1.3 42.96 7.81 60.2 23.99-86.4-.09-69.93 104.81 16.28 69.22-11.8 42.95-50.14 59.96-91.4 51.04-18.11-3.94-31.98-11.92-58.34.87l-69.29 34.89c-13.73 7.24-18.37 11.98-26 25.4-18.67 32.83-28.28 65.03-72.41 67.72z"/></svg>        <p className="text-4xl font-bold text-gray-700 capitalize tracking-wide mt-8">
          Website under maintenance!
        </p>
        <p className="text-xl text-gray-700 uppercase mt-4">
          We'll be back soon
        </p>
      </div>




      <div className=" flex flex-col items-center mt-8 ml-2">
                        <p className="text-gray-600 uppercase text-sm">Time left until lunching</p>
                        <div className="flex items-center justify-center space-x-4 mt-4" x-data="timer(new Date().setDate(new Date().getDate() + 1))" x-init="init();">
                            <div className="flex flex-col items-center px-4">
                                <span x-text="time().days" className="text-4xl lg:text-5xl text-gray-600">{day}</span>
                                <span className="text-gray-400 mt-2">Days</span>
                            </div>
                            <span className="w-[1px] h-24 bg-gray-400"></span>
                            <div className="flex flex-col items-center px-4">
                                <span x-text="time().hours" className="text-4xl lg:text-5xl text-gray-600">{hour}</span>
                                <span className="text-gray-400 mt-2">Hours</span>
                            </div>
                            <span className="w-[1px] h-24 bg-gray-400"></span>
                            <div className="flex flex-col items-center px-4">
                                <span x-text="time().minutes" className="text-4xl lg:text-5xl text-gray-600">{minute}</span>
                                <span className="text-gray-400 mt-2">Minutes</span>
                            </div>
                            <span className="w-[1px] h-24 bg-gray-400"></span>
                            <div className="flex flex-col items-center px-4">
                                <span x-text="time().seconds" className="text-4xl lg:text-5xl text-gray-600">{sec}</span>
                                <span className="text-gray-400 mt-2">Seconds</span>
                            </div>
                        </div>                      
                    </div>











      
      <div className="w-full py-4 border-t border-gray-300">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-gray-600 text-sm md:space-x-8 space-y-1 md:space-y-0">
          <span className="font-bold">You can contact us:</span>
          <a
            href="#"
            className="flex items-center space-x-1"
            target="_blank"
            title="Call"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span>+(91) 9877579319</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-1"
            target="_blank"
            title="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span>NextGenindia@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Maintenance
