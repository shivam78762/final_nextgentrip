"use client";


import React, { useRef, useState } from "react";
// Import Swiper React components
import { FaInstagram,FaFacebookSquare,FaLinkedin} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function page() {
  const keyBenefits = [
    {
      title: "Customization Beautiful",
      description: "Every traveler and every trip is different. NextGen specializes in creating highly personalized itineraries that reflect your passions and desires. Whether it's a yacht in the Caribbean or a secluded villa in the Mediterranean, every experience is tailored to the last detail."
    },
    {
      title: "Exclusive Access to World’s Best Destinations",
      description: "Experience the glamour of the French Riviera, serenity in the Maldives, or the thrill of Patagonia. NextGen offers insider access to experiences often unavailable to the average traveler, with connections to top resorts, estates, and boutique accommodations."
    },
    {
      title: "VIP Service, Anytime, Anywhere",
      description: "Luxury is more than a destination; it’s an experience. Our concierge team is available 24/7 to ensure your journey is flawless, from private jets and chauffeur-driven cars to personal butlers and spa treatments."
    },
    {
      title: "Handpicked Luxury Partnerships",
      description: "Our curated partnerships include the finest hotels, resorts, and restaurants worldwide. With NextGen, every detail of your journey reflects luxury, comfort, and sophistication."
    }
  ];

  const eliteCollection = [
    {
      title: "Private Jets & Helicopter Transfers",
      description: "Travel in absolute style with private jets and helicopter services tailored to your schedule and preferences, offering the convenience of direct flights to exclusive destinations."
    },
    {
      title: "Luxury Villas & Private Residences",
      description: "Find luxury in intimacy with private villas offering breathtaking views, exclusive amenities, and impeccable service, perfect for families, couples, or groups."
    },
    {
      title: "Tailor-Made Exotic Experiences",
      description: "From island getaways and safaris to private shopping tours in Paris, we design custom experiences that exceed the ordinary."
    },
    {
      title: "Personalized Itineraries & Travel Planning",
      description: "Each journey is unique, whether it’s cultural immersion, special events, or luxury adventure travel, with fully bespoke itineraries."
    },
    {
      title: "Luxury Cruises & Yacht Charters",
      description: "Explore the world's coastlines aboard a private yacht or luxury cruise, with custom itineraries, gourmet dining, and professional crews at your service."
    },
    {
      title: "Concierge & Lifestyle Management",
      description: "Need a last-minute reservation at a Michelin-starred restaurant or access to a sold-out show? Our concierge team is available 24/7 to make every experience fabulous and stress-free."
    }
  ];

  const testimonials = [
    {
      quote: "NextGen is not just an agency but an experience. From the private jet to the villa, everything was perfectly arranged. It was my best vacation.",
      client: "Samantha W.",
      title: "Executive, Luxury Brand"
    },
    {
      quote: "NextGen created a memorable anniversary, with private yachts in Santorini and candle-lit dinners on cliffs. Their team anticipated every need, and the service was unparalleled.",
      client: "James H.",
      title: "Entrepreneur"
    }
  ];

  const socialLinks = {
    instagram: '#',
    facebook: '#',
    twitter: '#',
    linkedin: '#',
  };
  
return (
<>
 <div className='h-[80vh] bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee] flex justify-center items-center px-5 md:px-16 lg:px-20'>
  <div className='text-center lg:space-y-8'>
    <h5 className='text-2x md:text-3xl lg:text-4xl font-bold'>Welcome to NextGen - Curators of Exceptional Luxury Travel.</h5>
    <p className='text-base md:text-lg'>Your Passport to incomparable sophistication and exceptional experiences
At NextGen, luxury is not only a style of traveling but also a way of living. For those who seek serenity in an overwater villa, a bespoke city escape, or an unforgettable adventure in any of the world's most luxurious destinations, we take care of all the details, transforming each journey to its perfect tune at NextGen. 
World where great service and ultimate indulgence blend with rare experience- the world of NextGen. Come and elevate your travel experience with this affair of luxury-known no boundary.
</p>
  </div>
</div>

<section className="px-6 md:px-16 lg:px-20 space-y-10 mt-10">
{/* Key Benefits Section */}
<div className="space-y-6">
<h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Why Choose NextGen for Your Luxury Escape?</h2>
{keyBenefits.map((benefit, index) => (
  <div key={index} className="space-y-2">
    <h4 className="text-xl font-semibold text-gray-700">{benefit.title}</h4>
    <p className="text-base text-gray-600">{benefit.description}</p>
  </div>
))}
</div>

{/* Elite Collection Section */}
<div className="bg-[#F1F5F9] p-8 rounded-lg space-y-8">
<h3 className="text-2xl font-semibold text-gray-800">Our Elite Collection of Luxury Services</h3>
{eliteCollection.map((service, index) => (
  <div key={index} className="space-y-2">
    <h5 className="text-lg font-semibold text-gray-700">{service.title}</h5>
    <p className="text-base text-gray-600">{service.description}</p>
  </div>
))}
</div>

{/* Experience the NextGen Difference Section */}
<div className="space-y-4">
<h3 className="text-2xl font-semibold text-gray-800">Experience the NextGen Difference</h3>
<p className="text-base text-gray-600">
  At NextGen, we redefine luxury travel through personalized service, exclusive access, and unparalleled luxury. Every moment of your trip is extraordinary.
</p>
<p className="text-base text-gray-600">
  From romantic shores in Italy to untouched beauty in New Zealand, our global luxury options guarantee comfort and style at every step.
</p>
<p className="text-base text-gray-600">
  Your privacy and security are paramount. We offer high-security travel solutions including private flights, exclusive villas, and VIP-only experiences.
</p>
</div>

{/* Testimonials Section */}
<div className="bg-white p-8 rounded-lg space-y-6">
<h3 className="text-2xl font-semibold text-gray-800">Our Clients’ Precious Moments</h3>
{testimonials.map((testimonial, index) => (
  <div key={index} className="space-y-2">
    <p className="text-base italic text-gray-600">"{testimonial.quote}"</p>
    <p className="text-sm font-semibold text-gray-800">{testimonial.client}</p>
    <p className="text-sm text-gray-500">{testimonial.title}</p>
  </div>
))}
</div>

{/* Contact Section */}
<div className="bg-[#F1F5F9] p-8 rounded-lg">
<h3 className="text-2xl font-semibold text-gray-800">Find Your Favorite Luxury Getaway</h3>
<p className="text-base text-gray-600">Ready to embark on your elite adventure? Whether planning a romantic escape, family holiday, or grand celebration, NextGen will surpass every expectation.</p>
<p className="text-base text-gray-600">Contact our luxury travel specialists today and let us tailor your dream trip.</p>
<div className="mt-4 space-y-2">
  <button className="bg-blue-600 text-white px-6 py-2 rounded">Contact Us</button>
  <button className="bg-gray-600 text-white px-6 py-2 rounded">Start Planning Your Trip</button>
</div>
</div>

<div className="bg-[#F1F5F9] p-8 rounded-lg space-y-8">
  <h2 className="text-3xl font-semibold text-gray-800">About NextGen</h2>
  <p className="text-lg text-gray-700">
    Luxury travel leader NextGen curates and delivers unparalleled access, high-end experiences, and exceptional service for the discerning traveler on any trip. With a team of expert curators and a network of elite partners around the world, NextGen creates unforgettable moments. For the quiet charm of private beach resorts or extravagant city adventures, NextGen is your trusted partner in luxury travel.
  </p>

  <h3 className="text-2xl font-semibold text-gray-800">Headquarters</h3>
  <p className="text-lg text-gray-700"> Sector 48,</p>
  <p className="text-lg text-gray-700">Chandigarh, India</p>
  <p className="text-lg text-gray-700">+(91) 9877579319</p>
  <p className="text-lg text-gray-700">NextGenindia@gmail.com</p>

  <div className="space-y-4">
    <h4 className="text-xl font-semibold text-gray-800">Follow us on our Luxury Journeys</h4>
    <p className="text-lg text-gray-700">
      Stay inspired, stay connected—keep updated with the latest happenings in luxury travel, exclusive offers, and bespoke experiences.
    </p>
    <div className="flex space-x-4 text-2xl">
      <a href={socialLinks.instagram} className="text-xl text-gray-700 hover:text-gray-900"><FaInstagram/></a>
      <a href={socialLinks.facebook} className="text-xl text-gray-700 hover:text-gray-900"><FaFacebookSquare /></a>
      <a href={socialLinks.twitter} className="text-xl text-gray-700 hover:text-gray-900"><FaXTwitter/></a>
      <a href={socialLinks.linkedin} className="text-xl text-gray-700 hover:text-gray-900"><FaLinkedin/></a>
    </div>
  </div>

  <div className="space-y-4">
    <h4 className="text-xl font-semibold text-gray-800">Discover the Art of Luxury Travel with NextGen</h4>
    <p className="text-lg text-gray-700">
      Indulge in a limitless world. NextGen: Luxury travel is no longer a dream but a reality.
    </p>
  </div>
</div>
</section>

</>
)
}
