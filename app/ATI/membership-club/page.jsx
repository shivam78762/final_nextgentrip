import React from 'react'

import { FaInstagram,FaFacebookSquare,FaLinkedin} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const page = () => {
  const MembershipClub = [
    {
      title: "Unlock a world of VIP access and exclusive rewards.",
      content: `Unlock a world of VIP access and exclusive rewards. An NextGen Membership Club member enters a world where traveling goes beyond just transporting people from point A to point B—it's life, in all its glorious details, with the best and the finest this world has to offer, and a way of exploring the world that is available exclusively for our most prized travelers. Enjoy access to luxury accommodations, personal travel services, and events not accessible to others. Priority access to the best deals and offers. Get the inside scoop on special offers, seasonal package deals, and other limited-time promotions available only to members. From luxury retreats and exotic islands to thrills in other lands, members get priority access to unbeatable deals and discounts around the world.`,
      imgSrc: "/images/page1/whyjoin1.jpeg",
      reverse: false,
    },
    {
      title: "Tailormade experiences—tailor-made to your every demand.",
      content: `Unlock a world of VIP access and exclusive rewards. An NextGen Membership Club member enters a world where traveling goes beyond just transporting people from point A to point B—it's life, in all its glorious details, with the best and the finest this world has to offer, and a way of exploring the world that is available exclusively for our most prized travelers. Enjoy access to luxury accommodations, personal travel services, and events not accessible to others. Priority access to the best deals and offers. Get the inside scoop on special offers, seasonal package deals, and other limited-time promotions available only to members. From luxury retreats and exotic islands to thrills in other lands, members get priority access to unbeatable deals and discounts around the world.`,
      imgSrc: "/images/page1/memberShipimg2.jpg",
      reverse: true,
    },
    {
      title: "VIP Experiences and Events are ONLY Available",
      content: `From private-island parties to behind-the-scenes tours of nearly-open theatres, VIP passes to the greatest events the world has to offer—these and more are what club membership offers—in short, experiences and events that go way beyond the ordinary. In a way, it is your backstage pass to the world's most exclusive gatherings.`,
      imgSrc: "/images/page1/memberShipimg3.png",
      reverse: false,
    },
    {
      title: "Free Upgrade and Comfortable Amenity End",
      content: `Whether it's upgrade to a suite at some 5-star hotel, priority boarding on your next flight or free entry to premium airport lounges, membership guarantees you get the highest level of service and finest benefits possible at each point of your journey. Dedicated concierge line 24/7. Your travel plans with NextGen are always backed by a professional, dedicated travel expert who's available to back your big or little requests 24/7. From last-minute bookings to personal travel experiences, your concierge will be there to make sure that everything works smoothly and as fun as possible.`,
      imgSrc: "/images/page1/memberShipimg4.webp",
      reverse: true,
    },
  ];

  const steps = [
    {
      stepNum: "/images/page1/one.png",
      stepMainImg: "linear-gradient(to top right,  #F9D0D0, #F09B9B)",
      heading: "Sign up and become a member",
      para: "Joining the membership club is very easy; it is achieved by only registration on our website to start enjoying exclusive benefits and personalized travel services right away. Our membership club is open to all travelers—from occasional vacationers to frequent jet-setters.",
    },
    {
      stepNum: "/images/page1/two.png",
      stepMainImg: "linear-gradient(to top right, #C5D3E8, #B7C7E1)",
      heading: "Enjoy customized travel benefits",
      para: "With membership, you get every trip with us plus more luxurious and individualized. In this regard, you get special offers, priority bookings, exclusive deals, and earn rewards on every trip that you book with them.",
    },
    {
      stepNum: "/images/page1/three.png",
      stepMainImg: "linear-gradient(to top right, #D0E8C5, #B8D9A1)",
      heading: "Unlock VIP Access Step",
      para: "The more you travel, the more you enjoy the benefits that you get. You enjoy getting priority customer support, you get VIP lounges, and you get complimentary room upgrades; so membership opens those doors to a higher level of service irrespective of where you are in the world.",
    },
    {
      stepNum: "/images/page1/four.png",
      stepMainImg: "linear-gradient(to top right, #FFF8DE, #FFE9A5)",
      heading: "Tailored Experiences Await End",
      para: "With each journey, enjoy experiences created just for you—whether it's a customized itinerary filled with activities that match your passions or a romantic escape that includes private dining under the stars. As a member, you’re not just traveling—you’re creating moments that will last a lifetime.",
    },
  ];

  const UniqueBenefits = [
    {
      heading: "VIP Concierge Service",
      para: "Your exclusive 24/7 travel concierge is always a call away. All last-minute flights upgrades, restaurant reservations, customized travel arrangements--whatever you require, your concierge will handle it so you can experience the ultimate in luxury travel.",
    },
    {
      heading: "Complimentary Upgrade and Early Arrival",
      para: "Enjoy airport VIP lounges and complimentary room upgrades as well as early check-in at select luxury hotels worldwide, ensuring the journey starts very well.",
    },
    {
      heading: "First access to flash sales",
      para: "You will be privy to our flash sales, seasonal deals, and last-minute offers that are exclusive to club members. This will help you save money on luxury stays, flights, and premium experiences you cannot get elsewhere.",
    },
    {
      heading: "Private tours and experiences",
      para: "From private yacht charters in the Mediterranean to exclusive behind-the-scenes tours at galleries and cultural landmarks, there really is an experience from us to our members that no other can deliver.",
    },
    {
      heading: "VIP events are accessed.",
      para: "Attend invitation-only film premieres, gala dinners, and elite sporting events. Members can get tickets and experiences that would make the journey really unforgettable.",
    },
    {
      heading: "Travel Discount and Package Deals EXCLUSIVE",
      para: "Enjoy customized travel packages with exclusive discounts on flights, accommodations, and excursions that are tailor-made to your needs. Experience the world in unmatched style and comfort without a cost on your wallet.",
    },
    {
      heading: "Prestige booking and reservation services",
      para: "Never again have to worry about last-minute bookings; just be assured of priority reservations with early access to the world's best hotels, restaurants, and events.",
    },
  ];

  const membershipTiers = [
    {
      tier: "Explorer Class",
      benefits: [
        "Earn points with every booking.",
        "Exclusive access to seasonal offers and promotions.",
        "Free concierge service for standard bookings.",
        "Guaranteed booking for high-end experiences.",
      ],
    },
    {
      tier: "Explorer Level",
      benefits: [
        "All benefits from Explorer Class, plus:",
        "Free upgrade on selected hotels and flights.",
        "Early access to VIP events and private tours.",
        "Special discounts on luxury holiday packages.",
      ],
    },
    {
      tier: "Globe-Trotter Class",
      benefits: [
        "All benefits from Explorer Level, plus:",
        "Double points on each visit.",
        "Complimentary access to VIP airport lounges.",
        "Personalized, tailored vacation itineraries.",
        "Exclusive access to private luxury events and experiences.",
        "Luxury concierge dedicated to ultra-personalized service.",
      ],
    },
  ];

  return (
    <>
      <section className="1stSection bg-[url(/images/page1/world.jpg)]  bg-no-repeat xl:bg-center  relative min-h-[70vh]  overflow-hidden">
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]"></div>
        <div className="absolute inset-0 flex flex-col text-center px-5  gap-10 justify-center items-center text-slate-300">
          <h6 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
            Welcome to NextGen Membership Club
          </h6>
          <p className="lg:w-[80%] text-base lg:text-lg tracking-tight">
            Extraordinary travel meets unparalleled exclusivity here. We think
            that travelling has not only to be a journey but also customized
            according to your desires, luxury, and adventure, and you get
            personal service. Thus, presenting the NextGen Membership Club-an
            organic extension of our loyalty philosophy where our most faithful
            travelers receive unprecedented access to extraordinary benefits,
            insider experiences, and VIP treatment worldwide. Join today and
            access an endless ocean of possibilities.
          </p>
        </div>
      </section>

   

      <section className="2ndSection px-5 md:px-16 lg:px-20 space-y-5 lg:space-y-16 py-10 lg:py-16">
        <h6 className="text-xl  border-dotted pb-5 border-b border-green-600 text-center font-semibold md:text-2xl lg:text-3xl xl:text-4xl">
          So, why join the NextGen Membership club?
        </h6>

        {MembershipClub.map((section, index) => (
          <div
            key={index}
            className={` flex flex-col lg:flex-row ${
              section.reverse ? "lg:flex-row-reverse" : ""
            } items-center justify-center gap-10 md:gap-16`}
          >
            <div className="left w-full lg:w-[60%] space-y-5 text-center lg:text-left">
              <h5 className="text-lg sm:text-xl md:text-2xl font-semibold">
                {section.title}
              </h5>
              <p className="text-sm sm:text-base xl:text-lg leading-relaxed">
                {section.content}
              </p>
            </div>

            <div className="right w-full lg:w-[50%] lg:h-[300px]  flex justify-center lg:justify-end">
              <img
                src={section.imgSrc}
                alt={section.title}
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        ))}
      </section>

      <section className="3rdSection  px-5 md:px-16 lg:px-20 py-10  space-y-16">
        <h6 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-semibold pb-5 border-b-2 border-dotted border-green-600">
          How the NextGen Membership Club Operates
        </h6>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 ">
          {steps.map((curElm, index) => {
            return (
              <div key={index} className="flex justify-center">
                <div
                  style={{ background: curElm.stepMainImg }}
                  className="rounded-lg shadow-lg p-6 md:p-8 lg:p-10 w-full sm:w-[90%] hover:scale-105 transform transition-all duration-300 ease-in-out"
                >
                  <div className="flex justify-center items-center gap-4 text-xl md:text-2xl uppercase font-semibold text-gray-800 mb-4">
                    <span>Step</span>
                    <img
                      src={curElm.stepNum}
                      alt="Step Icon"
                      className="w-10 md:w-12"
                    />
                  </div>
                  <h5 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4 text-center">
                    {curElm.heading}
                  </h5>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-7 mb-6 text-center">
                    {curElm.para}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="4thsection  bg-slate-100 py-10 px-6 md:px-16 lg:px-20">
        <div className="w-full max-w-6xl mx-auto">
          <h5 className="text-xl md:text-2xl lg:text-3xl text-center uppercase leading-10 border-b border-dotted border-green-700 py-3 font-semibold mb-8 text-slate-800">
            Unique Membership Benefits
          </h5>
          <div className="space-y-8 ">
            {UniqueBenefits.map((curElm, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 lg:p-8 space-y-4 transition transform hover:scale-105 hover:shadow-xl"
              >
                <h5 className="text-lg md:text-xl  font-semibold text-green-700">
                  {curElm.heading}
                </h5>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {curElm.para}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="5section  py-10 px-5 md:px-16 lg:px-20 bg-gray-100">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-xl md:text-3xl text-center font-semibold uppercase border-b-2 border-dotted border-green-700 pb-4 mb-8">
            Membership Tiers: The More You Search, the More You Enjoy
          </h2>

          <div className="space-y-10">
            {membershipTiers.map((tier, index) => (
              <div
                key={index}
                className="tier-card bg-white p-6 shadow-md rounded-lg space-y-4"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-green-700">
                  {tier.tier}
                </h3>

                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="text-base md:text-lg leading-6">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="6thsection  py-10 px-5 md:px-16 lg:px-20 bg-gray-100 space-y-10">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <h2 className="text-xl md:text-3xl  font-semibold text-green-700">
              Start Your Path Today
            </h2>
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed">
              Join the membership club by NextGen, where the world is unlimited
              with premium experiences and a variety of benefits. From a
              tropical island getaway or cultural diamonds buried deep to luxury
              tastes, NextGen promises adventurous experiences beyond the
              ordinary.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                Join the Club
              </button>
              <button className="border border-green-600 text-green-600 py-2 px-4 rounded hover:bg-green-600 hover:text-white">
                Learn More
              </button>
              <button className="border border-green-600 text-green-600 py-2 px-4 rounded hover:bg-green-600 hover:text-white">
                Contact Us
              </button>
            </div>
          </div>

          <div className="about-section bg-white p-8 mt-8 shadow-lg rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-green-700 text-center">
              About NextGen
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-7 mt-4">
              Travelling at NextGen means that for us, travelling is the
              ultimate luxury—a chance to discover new places, culture, and
              experiences that add an enrichment factor to your life. Our
              Membership Club provides each traveler with the richest benefits
              on the planet so that every journey you make becomes unique,
              indulgent, and customized to your desires.
            </p>
          </div>

          <div className="contact-info bg-gray-200 p-6 rounded-lg mt-5 shadow-lg space-y-4">
            <h4 className="text-lg font-semibold text-green-700">
              Headquarters
            </h4>
            <p className="text-gray-700">Sector 48,</p>
            <p className="text-gray-700">Chandigarh, India</p>
            <p className="text-gray-700">Phone: +(91) 9877579319</p>
            <p className="text-gray-700">Email: NextGenindia@gmail.com</p>
          </div>

          <div className="social-media text-center space-y-4 mt-10">
            <h4 className="text-lg font-semibold text-green-700">
              Stay Connected to NextGen
            </h4>
            <p className="text-gray-700">
              Follow us on social media for updates on luxury travel trends,
              promotions, and exclusive offers for members.
            </p>
            <div className="flex justify-center gap-4 text-green-600">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-green-700"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-green-700"
              >
                <FaFacebookSquare />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-green-700">
                <FaXTwitter />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-green-700"
              >
                <FaLinkedin/>
              </a>
            </div>
          </div>

          <p className="text-center text-gray-700 mt-8 text-sm md:text-base">
            Explore the World, Live the Luxury, and Join the NextGen Membership
            Club Today.
          </p>
        </div>
      </section>
    </>
  );
}

export default page
