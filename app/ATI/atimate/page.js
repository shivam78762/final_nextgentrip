// import Layout from "./Layout";
"use client"
import Image from "next/image";
import { useState } from "react";
import { FaInstagram,FaFacebookSquare,FaYoutube} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Page = () => {
  const reasonsToPartner = [
    {
      title: "Advanced Technology",
      description: "Our platform is built on state-of-the-art technologies that simplify bookings, optimize travel management, and perfect the customer experience. Combined with AI-driven recommendations and real-time booking systems, our robust tools empower partners to stay one step ahead of the competition."
    },
    {
      title: "Varied Travel Options",
      description: "With NextGen, you can enjoy an assortment of services ranging from air tickets to hotels, holiday packages, transport, and travel insurance. Become part of our vast catalogue of worldwide travel options at affordable prices by partnering with us."
    },
    {
      title: "Unrivaled Global Network",
      description: "With our international airlines, hotels, and ground service providers, this application will enable your customers to enjoy the best options and convenience. It covers every continent and lets you satisfy every travel need of your clients, regardless of destination."
    },
    {
      title: "Dedicated Business Support",
      description: "Perhaps the greatest accomplishment that a company can make is to ensure good relationships define success. The support team of NextGen assists customers with all their questions and optimizes the products they are offering while giving insight into market trends."
    },
    {
      title: "Commission-Based Partnership Model",
      description: "We have respect for our business partners, and attractive commission structures in place whereby every successful referral or booking is mutual success. Whatever it is - a travel agency, our corporate partner, or a freelance agent, our sustainable commission model is transparent."
    }
  ];
  const steps = [
    {
      title: "Account Creation as a Partner",
      description: "Register with us easily through our Partner Portal. Get your own business dashboard and start exploring exclusive partner features."
    },
    {
      title: "Customize Your Travel Offerings",
      description: "From corporate travel to personal leisure bookings, customize the service to meet the needs of the client-personalized itineraries, packages, and special deals in travel."
    },
    {
      title: "Utilize NextGen's Global Inventory to Expand Your Reach",
      description: "Access thousands of airlines, hotel chains, and activity providers worldwide. Get real-time availability and competitive prices so your clients will be able to book with confidence."
    },
    {
      title: "Gain with Each Booking",
      description: "Every booking made on your website will bring in commission. Our performance-based model will have your money paid out efficiently and quickly."
    }
  ];
return (

<>
  <div className="bg-[#F1F5F9] min-h-[70vh] flex justify-center items-center py-6 md:py-10 px-5">
<div className="text-center max-w-4xl space-y-5">
<h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
  NextGen is Your Reliable Traveling Service
</h2>
<p className="text-lg text-gray-700 md:text-xl">
  Unlock global travel solutions with NextGen
</p>
<p className="text-base text-gray-600 md:text-lg">
  NextGen is a travel service company providing high-quality services for business empowerment. Whether you are an established travel agency, a corporate entity, or a new player in the travel industry, we offer unique collaboration opportunities to help you serve your clients better. We at NextGen are one of the leading providers of travel-related services, dedicated to creating seamless, customized, and memorable travel experiences.
</p>
</div>
</div>

<div className=' space-y-5 px-5 md:px-16 lg:px-20 mt-20 '>
   
<div className="bg-[#F1F5F9] p-8 rounded-lg space-y-8">
  <h2 className="text-2xl font-semibold text-gray-800">Why Partner with NextGen?</h2>
  {reasonsToPartner.map((reason, index) => (
    <div key={index} className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800">{reason.title}</h3>
      <p className="text-lg text-gray-600">{reason.description}</p>
    </div>
  ))}
</div>
<div className="bg-[#F1F5F9] p-8 rounded-lg space-y-8">
  <h2 className="text-2xl font-semibold text-gray-800">How It Works</h2>
  {steps.map((step, index) => (
    <div key={index} className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
      <p className="text-lg text-gray-600">{step.description}</p>
    </div>
  ))}
</div>

<div className="bg-[#F1F5F9] p-8 rounded-lg space-y-8">
  {/* Commitment Section */}
  <div>
    <h2 className="text-xl font-semibold text-gray-800">Our Commitment to Excellence</h2>
    <p className="text-lg text-gray-600">
      For one, the very mission statement of NextGen says it all: innovate, superior customer service and world travel solutions for powering travel businesses and associates. Being part of our network is a chance to join with people dedicated to making their journey as smooth, safe, and memorable as possible.
    </p>
  </div>

  {/* Partner Testimonials Section */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-gray-800">Partner Testimonials</h3>
    <div className="space-y-2">
      <blockquote className="italic text-gray-600">
        "NextGen has absolutely changed the way we manage travel for our clients. Their user-friendly platform, combined with all the support we get from the team, positions us to offer customization that no one else even close!"
      </blockquote>
      <p className="font-semibold text-gray-800">– Nina S., Owner, Travel Agency</p>
    </div>
    <div className="space-y-2">
      <blockquote className="italic text-gray-600">
        "We have seen an increase in client satisfaction and revenues since partnering with NextGen, with their wide range of services, it has helped in offering tailored travel solutions at competitive prices."
      </blockquote>
      <p className="font-semibold text-gray-800">– David L., Corporate Travel Manager</p>
    </div>
  </div>

  {/* Call to Action Section */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-gray-800">Become a Business Associate today!</h3>
    <p className="text-lg text-gray-600">
      Ready to Elevate Your Travel Business? Unlock the possible world of your business today with NextGen. Whether you are just a small travel agency or a giant enterprise, our platform could help you scale to your desired level.
    </p>
    {/* <div className="flex space-x-4">
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Join Now</button>
      <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition">Contact Us</button>
    </div> */}
  </div>

  {/* Contact Information Section */}
  <div>
    <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
    <p className="text-lg text-gray-600">
      We're always here for your questions and guidance on starting your journey with NextGen. Contact us today for more information on what our partnership will mean for you and your business.
    </p>
  </div>

  {/* About NextGen Section */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-gray-800">About NextGen</h3>
    <p className="text-lg text-gray-600">
      NextGen is indeed a global leader in the travel industry, offering a comprehensive range of services ranging from booking a flight and hotel to the more sophisticated holiday packages. It's committed, as always, to maintaining the quality, ensuring safe access to travel experiences around the world, at affordable prices, with minimal hassle, for everyone.
    </p>
  </div>

  {/* Headquarters & Social Media Links Section */}
  <div>
    <h3 className="text-xl font-semibold text-gray-800">Contect</h3>
    {/* <p className="text-base text-gray-600">
    Sector 48, Chandigarh, India
    </p> */}
    <p className="text-base text-gray-600">
    +(91) 9877579319 | <a href="mailto:Info@Nextgentrip.com" className="text-blue-600">info@nextgentrip.com</a>
    </p>
    <div className="flex space-x-4 mt-4 text-2xl">
      <a  target="_blank"
                  href="https://www.facebook.com/share/1AA9dPezvA/?mibextid=wwXIfr" className=""><FaFacebookSquare /></a>
      <a  target="_blank"
                  href="https://x.com/NextGenTrip?t=d4oQeyJHEQldf9lsP2EgnQ&s=08" className=""><FaXTwitter/></a>
      <a target="_blank"
                  href="https://www.youtube.com/@NextGenTrip-g5t" className=""><FaYoutube /></a>
      <a href="https://www.instagram.com/nextgentrip/profilecard/?igsh=MTdyMjlyb293aTB0MA%3D%3D" target="_blank" className=""><FaInstagram /></a>
    </div>
    
  </div>
</div>

</div>
</>
)
};

export default Page;
