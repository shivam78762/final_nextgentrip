"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick-theme.css";
import { FaInstagram,FaFacebookSquare,FaLinkedin} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Page = () => {
  const corporateTravelInfo = [
    {
      title: "NextGen: The New Face of Corporate Traveling",
      headline: "Billboard",
      description: "Redefining Business Travel: Easy, Efficient, and Ahead of Your Business Needs",
      bannerHeadline: "Partner with NextGen for a streamlined corporate travel experience. From managing complex itineraries to ensuring cost efficiency and compliance, we’ve got it all covered.",
      buttonLabel: "Let's Optimise Your Corporate Travel"
    }
  ];
  
  const apkaTripInfo = [
    {
      title: "Why Choose NextGen?",
      subtitle: "One-Stop Corporate Travel Solution",
      description: "It's far more than booking a flight and an accommodation. NextGen curates an experience that delivers for business goals. On top of this, it builds custom end-to-end solutions that simplify all the complexities of business travel for your company, saving your company time and money at every turn."
    },
    {
      title: "Who We Are",
      description: "NextGen handles all your corporate travel in one place. At NextGen, we take pride in managing the travel of businesses big and small. Powered by leading-edge technology, our travel experts give personal, hand-held attention to your corporate travel program—from fast-growing startups to large multinational corporations. We believe effortless travel management begins with personal service, clear processes, and powerful insights. NextGen takes care of all your corporate travel requirements with safety."
    },
    {
      title: "Our Key Offerings",
      offerings: [
        {
          title: "1. Travel Solutions for Your Business",
          description: "Every company is unique, so are their travel requirements—from domestic day trips to international conferences and incentives for the employees. NextGen customizes every aspect of your corporate travel experience to align with your company's goals, policies, and budget."
        },
        {
          title: "2. E2E Corporate Travel Management",
          description: "We arrange accommodations, ground transportation, venues for meetings, and flight bookings. As your business travel partner, we let you focus on what matters most—your business—while we take care of everything else."
        }
      ]
    }
  ];
  
  const mainActivities = [
    {
      title: "Flight Reservation Made Easy, Simple",
      description: "We have ties with the world's best airlines to ensure business travelers get special rates and priority booking. Whether it’s an executive crossing several states or a whole team wanting to go abroad for a conference, NextGen ensures the arrangements for your flight are seamless, cost-effective, and accommodating of every possible schedule."
    },
    {
      title: "Executive Corporate Rates",
      description: "NextGen provides exclusive corporate rates, allowing your business to save significantly on frequent flights while enjoying added perks and conveniences tailored for corporate needs."
    },
    {
      title: "24/7 Reservation Support",
      description: "Our support team is available around the clock, providing assistance with reservations, changes, and any issues that might arise, so your travel plans remain on track and worry-free."
    }
  ];

  const corporateServices = [
    {
      title: "Hotel and Accommodation – Stay in Style",
      description: "From 5-star hotels to business-class accommodations conveniently located, NextGen takes care of the stay of your employee. With a focus on comfort, safety, and convenience, we leverage global partnerships to offer preferred rates, special deals, and exclusive privileges for corporate clients.",
      features: [
        "Customized accommodation packages",
        "Hotel flexibility on business stay policies",
        "Real-time accommodation management"
      ]
    },
    {
      title: "Ground Transport – Freedom of Movement",
      description: "From airport pick-ups to car rentals and group transportation, NextGen ensures that your employees arrive safely and punctually from point A to point B. Our services cover all types of ground transportation for business, wherever and whenever needed.",
      features: [
        "Airport Transfers",
        "Corporate Car Rentals",
        "Chauffeur & Limousine Service"
      ]
    },
    {
      title: "Meeting and Event Management – Organized to Perfection",
      description: "Planning a corporate event or meeting? NextGen handles all logistics—from team-building retreats to international conferences. We take care of meeting venues, catering, and transportation to ensure everything runs smoothly and effortlessly.",
      features: [
        "Customized corporate event solutions",
        "Global destination sourcing",
        "Dedicated event coordinator & manager"
      ]
    },
    {
      title: "Monitoring and Compliance – Streamlined Corporate Travel Policy",
      description: "Our advanced platform allows companies to enforce travel policies efficiently, automating approval workflows and ensuring budget control and policy compliance. NextGen’s AI-powered policy enforcement simplifies management for hassle-free corporate travel.",
      features: [
        "AI-powered policy enforcement",
        "Online compliance monitor",
        "Automated approval workflows"
      ]
    }
  ];

  const travelBenefits = [
    {
      title: "Data-Driven Insights",
      description: "Unlock the power of analytics to shape and optimize your travel program. Our platform generates real-time data and analytics on current travel trends, spending patterns, and employee preferences to help lower costs and enhance travel efficiency."
    },
    {
      title: "Cost Optimization",
      description: "NextGen saves your business money without compromising on quality. With negotiated rates and real-time itinerary management, we help reduce unnecessary expenses on your travel bills."
    },
    {
      title: "Seamless Technology Integration",
      description: "Our all-in-one travel management platform integrates seamlessly with your existing systems, providing a single dashboard for booking, expense management, reporting, and analytics."
    },
    {
      title: "Dedicated Support",
      description: "Available 24/7 for changes, cancellations, or emergencies, our support team ensures hassle-free travel with maximum assistance to travelers."
    },
    {
      title: "Environmental Accountability",
      description: "NextGen is committed to sustainable travel. We offer options like eco-friendly accommodations, carbon offsetting schemes, and tools to measure and reduce your travel footprint."
    }
  ];

  const technologyFeatures = [
    {
      title: "Real-Time Travel Dashboard",
      description: "A centralized hub putting all of your travel needs in one place. With Sabre Travel Network, manage employee travel, track expenses, and make travel decisions on the go."
    },
    {
      title: "Automating Approving System",
      description: "Automate approvals for employee travel, saving paperwork and ensuring company guidelines are followed with ease."
    },
    {
      title: "Cost Management and Reporting Systems",
      description: "Easily track travel expenses through the NextGen app, with instant insights into spending, budget optimization, and detailed reports accessible in a few clicks."
    },
    {
      title: "Unlocking Mobile Apps",
      description: "Our mobile app takes corporate travel management to the next level with features for booking, managing, and adjusting travel plans on the go."
    }
  ];

  const clientSuccessStories = [
    {
      testimonial: "Everything will change. Every part of corporate travel—from reservations to compliance is streamlined for me so I can spend more time on core business. Pretty much saved jobs and time.",
      client: "Emily D.",
      title: "Head of Finance, TechForward Solutions"
    },
    {
      testimonial: "We travel frequently for international meetings, and NextGen has made it extremely easy to keep costs in check without compromising quality. The 24/7 support is a game-changer for us.",
      client: "Jonathan L.",
      title: "Operations Director, GlobalTech Enterprises"
    }
  ];

  const contactInfo = {
    phone: "+1 (800) 123-4567",
    email: "corporate@Nextgentrip.com",
    liveChat: "Available 24/7",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  };
  
  
return (
<div className='space-y-10'>
<section className="px-5 md:px-16 lg:px-20">
<div className="bg-gradient-to-bl from-slate-500 to-slate-300 px-5 py-8 md:px-10 md:py-12 space-y-6 rounded-lg">
{corporateTravelInfo.map((info, index) => (
  <div key={index} className="flex flex-col items-center text-center space-y-5">
    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
      {info.title}
    </h3>
    <h6 className="text-xl md:text-2xl font-semibold text-gray-300">
      {info.headline}
    </h6>
    <p className="text-lg md:text-xl text-gray-100">
      {info.description}
    </p>
    <p className="lg:w-[80%] text-gray-200">
      {info.bannerHeadline}
    </p>
    <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
      {info.buttonLabel}
    </button>
  </div>
))}
</div>
</section>

<section className="px-5 md:px-16 lg:px-20">
<div className="bg-[#F1F5F9] px-5 py-8 md:px-10 md:py-12 space-y-6 rounded-lg">
{apkaTripInfo.map((info, index) => (
  <div key={index} className="space-y-5">
    <h6 className="text- lg:text-2xl font-semibold text-gray-700">
      {info.title}
    </h6>
    {info.subtitle && (
      <h5 className="text-lg md:text-xl font-semibold text-gray-800">
        {info.subtitle}
      </h5>
    )}
    <p className="text-base text-gray-600">
      {info.description}
    </p>

    {info.offerings && (
      <div className="space-y-4">
        {info.offerings.map((offering, idx) => (
          <div key={idx} className="space-y-2">
            <h5 className="text-lg md:text-xl font-semibold text-gray-800">
              {offering.title}
            </h5>
            <p className="text-base text-gray-600">
              {offering.description}
            </p>
          </div>
        ))}
      </div>
    )}
  </div>
))}
</div>
</section>


<section className="px-5 md:px-16 lg:px-20">
<div className="bg-[#F1F5F9] px-5 py-8 md:px-10 md:py-12 space-y-6 rounded-lg">
<h6 className="text-lg md:text-2xl font-semibold text-gray-700">
NextGen's Main Activities
</h6>
{mainActivities.map((activity, index) => (
  <div key={index} className="space-y-4">
    <h5 className="text-lg md:text-xl font-semibold text-gray-800">
      {activity.title}
    </h5>
    <p className="text-base text-gray-600">
      {activity.description}
    </p>
  </div>
))}
</div>
</section>

<section className="px-5 md:px-16 lg:px-20">
<div className="bg-[#F1F5F9] px-5 py-8 md:px-10 md:py-12 space-y-6 rounded-lg">
<h6 className="text-lg md:text-2xl font-semibold text-gray-700">
NextGen's Corporate Travel Solutions
</h6>
{corporateServices.map((service, index) => (
  <div key={index} className="space-y-4">
    <h5 className="text-lg md:text-xl font-semibold text-gray-800">
      {service.title}
    </h5>
    <p className="text-base text-gray-600">
      {service.description}
    </p>
    <ul className="list-disc pl-5 space-y-2 text-gray-600">
      {service.features.map((feature, idx) => (
        <li key={idx}>{feature}</li>
      ))}
    </ul>
  </div>
))}
</div>
</section>

<section className="px-5 md:px-16 lg:px-20">
<div className="bg-[#F1F5F9] px-5 py-8 md:px-10 md:py-12 space-y-6 rounded-lg">
<h6 className="text-lg md:text-2xl font-semibold text-gray-700">
  Why Book Corporate Travel with NextGen?
</h6>
{travelBenefits.map((benefit, index) => (
  <div key={index} className="space-y-4">
    <h5 className="text-lg md:text-xl font-semibold text-gray-800">
      {benefit.title}
    </h5>
    <p className="text-base text-gray-600">
      {benefit.description}
    </p>
  </div>
))}
</div>
</section>

<section className="px-5 md:px-16 lg:px-20 space-y-10">
{/* Technology Features Section */}
<div className="bg-[#F1F5F9] px-5 py-8 md:px-10 md:py-12 space-y-6 rounded-lg">
<h6 className="text-lg md:text-2xl font-semibold text-gray-700">NextGen Technology: The Future of Business Travel</h6>
{technologyFeatures.map((feature, index) => (
  <div key={index} className="space-y-4">
    <h5 className="text-lg md:text-xl font-semibold text-gray-800">{feature.title}</h5>
    <p className="text-base text-gray-600">{feature.description}</p>
  </div>
))}
</div>

{/* Client Success Stories Carousel */}
<div className="bg-white px-5 py-8 md:px-10 md:py-12 rounded-lg">
<h6 className="text-lg md:text-2xl font-semibold text-gray-700">Client Success Stories</h6>
<div className="space-y-4">
  {clientSuccessStories.map((story, index) => (
    <div key={index} className="space-y-2">
      <p className="text-base italic text-gray-600">"{story.testimonial}"</p>
      <p className="text-sm font-semibold text-gray-800">{story.client}</p>
      <p className="text-sm text-gray-500">{story.title}</p>
    </div>
  ))}
</div>
</div>

{/* Contact Information */}
<div className="bg-[#F1F5F9] px-5 py-8 md:px-10 md:py-12 rounded-lg">
<h6 className="text-lg md:text-2xl font-semibold text-gray-700">Contact Us</h6>
<p className="text-base text-gray-600">For more information or questions, please don’t hesitate to contact us.</p>
<p className="text-base text-gray-600">Telephone: {contactInfo.phone}</p>
<p className="text-base text-gray-600">Corporate: {contactInfo.email}</p>
<p className="text-base text-gray-600">Live Chat: {contactInfo.liveChat}</p>

{/* Social Media Links */}
<div className="flex space-x-4 mt-4 text-2xl">
  <a href={contactInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
  <a href={contactInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
  <a href={contactInfo.socialLinks.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
  <a href={contactInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a> 
</div>
</div>
</section>



</div>
)
};

export default Page;
