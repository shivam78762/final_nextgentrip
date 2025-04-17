import React from "react";
import { LiaHotelSolid } from "react-icons/lia";

export default function Hotels() {
  const propertyTypes = [
    {
      id: 1,
      title: "Hotels",
      img: "/images/Hotel11.webp",
      description:
        "Our diverse hotel selection includes everything from budget-friendly accommodations to high-end luxury suites. Whether you're looking for a convenient city center location or a peaceful retreat, our hotels offer comfortable rooms, modern services, and exceptional service to make your stay enjoyable.",
      additional:
        "Enjoy features like on-site dining, fitness centers, business services, and more. Choose from well-known chains to unique boutique hotels tailored to suit every need and preference.",
      color: "#EF6614",
    },
    {
      id: 2,
      img: "/images/Hotel22.webp",
      title: "Resorts",
      description:
        "Discover our selection of upscale resorts that promise a luxurious and relaxing experience. From beachfront properties to mountain retreats, our resorts offer top-notch services including spas, gourmet dining, and private pools.",
      additional:
        "Perfect for romantic getaways, family vacations, or special celebrations, our resorts ensure a memorable stay with personalized services, breathtaking views, and exclusive experiences that cater to your every need.",
    },
    {
      id: 3,
      img: "/images/Hotel33.webp",
      title: "Homestays",
      description:
        "Immerse yourself in local culture with our homestay options. Staying in a homestay provides a unique opportunity to experience life as a local, with personal touches and authentic interactions.",
      additional:
        "Enjoy the warmth of a host family, learn about regional customs, and savor home-cooked meals. Homestays are perfect for travelers seeking a more intimate and culturally enriching experience.",
    },
    {
      id: 4,
      title: "Apartments",
      img: "/images/Hotel44.webp",
      description:
        "Our apartments offer the comfort and convenience of home with added services for a pleasant stay. Choose from short-term rentals to extended stays, and enjoy fully equipped kitchens, living areas, and often additional facilities like gyms or pools.",
      additional:
        "Ideal for families, groups, or business travelers, apartments provide flexibility and space, allowing you to settle in and feel at home while exploring your destination.",
    },
    {
      id: 5,
      title: "Villas",
      img: "/images/Hotel5.webp",
      description:
        "Our villas offer the ultimate in luxury and privacy. Enjoy spacious living areas, private pools, and exclusive services in beautiful settings, whether on the coast or nestled in the countryside.",
      additional:
        "Perfect for special occasions or extended stays, villas provide an indulgent escape with tailored services to ensure a truly memorable experience.",
    },
    {
      id: 6,
      title: "Lodges",
      img: "/images/Hotel77.webp",
      description:
        "Experience a cozy and rustic stay with our lodges, often located in picturesque settings. These properties offer a more intimate, down-to-earth lodging option with a focus on comfort and a connection to nature.",
      additional:
        "Ideal for outdoor enthusiasts and those looking for a tranquil retreat, lodges provide a welcoming atmosphere with essential services and easy access to nearby natural attractions.",
    },
    {
      id: 7,
      img: "/images/Hotel6.webp",
      title: "Homestays",
      description:
        "Immerse yourself in local culture with our homestay options. Staying in a homestay provides a unique opportunity to experience life as a local, with personal touches and authentic interactions.",
      additional:
        "Enjoy the warmth of a host family, learn about regional customs, and savor home-cooked meals. Homestays are perfect for travelers seeking a more intimate and culturally enriching experience.",
    },
    {
      id: 8,
      title: "Apartments",
      img: "/images/Hotel8.webp",
      description:
        "Our apartments offer the comfort and convenience of home with added services for a pleasant stay. Choose from short-term rentals to extended stays, and enjoy fully equipped kitchens, living areas, and often additional facilities like gyms or pools.",
      additional:
        "Ideal for families, groups, or business travelers, apartments provide flexibility and space, allowing you to settle in and feel at home while exploring your destination.",
    },
  ];

  const reasons = [
    {
      img: "/images/booking.webp",
      heading: "Instant Booking Process",
      para: "Just provide a few relevant details and create your property listings with us easily.",
    },

    {
      img: "/images/competitive.webp",

      heading: "Competitive Pricing",
      para: "Enjoy competitive rates and flexible pricing options that cater to various needs and budgets.",
    },
    {
      img: "/images/login.webp",

      heading: "User-Friendly Interface",
      para: "Our platform is designed to be intuitive and easy to navigate, making the booking process seamless.",
    },
    {
      img: "/images/transaction.webp",

      heading: "Secure Transactions",
      para: "Rest assured with our secure payment gateway and data protection measures, ensuring your information is safe.",
    },
    {
      img: "/images/palette.webp",

      heading: "Wide Range of Options",
      para: "Browse through a diverse selection of properties and choose the one that best suits your requirements.",
    },
    {
      img: "/images/real-time.webp",

      heading: "Real-Time Availability",
      para: "Check the real-time availability of properties and make instant bookings without any hassle.",
    },
    {
      img: "/images/performance.webp",

      heading: "Customer Reviews and Ratings",
      para: "Read honest reviews and ratings from other users to make informed decisions about your bookings.",
    },
    {
      img: "/images/special-offer.webp",

      heading: "Special Offers and Discounts",
      para: "Take advantage of exclusive offers and discounts available for our loyal customers.",
    },
  ];

  return (
    <div>
      <div className='HeroImage h-[600px] bg-[url("/images/hotelsss.webp")] bg-cover bg-center flex flex-col justify-center gap-5'>
        <div className="px-5 sm:px-8 md:px-12 lg:px-20 py-8 text-center space-y-8">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            List Your Property for Free & Boost Your Earnings Instantly
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-white">
            Register your hotel on Next Gen and enjoy profitability with global
            reach today.
          </p>
          <div className="flex justify-center">
            <button className="primary-col text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 md:px-8 md:py-4">
              List Your Property Today{" "}
              <LiaHotelSolid className="text-lg md:text-xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="px-0 sm:px-8 md:px-12 lg:px-20 py-8  space-y-12">
        <div className="Tyeps-of-Properties">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8">
            What Type of Properties Can Be Listed On Next Gen?
          </h3>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {propertyTypes.map((elm) => (
                  <div
                    key={elm.id}
                    className=" bg-gray-100  rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-shadow duration-200 border border-gray-200"
                  >
                    <div>
                      <img
                        src={elm.img}
                        alt=""
                        className="w-full h-full rounded-lg"
                      />
                    </div>

                    <div className="px-5 py-4">
                      <h4 className="text-lg rounded-lg font-semibold text-orange-600 bg-white text-center  w-full relative z-10 -mt-8 py-2">
                        {elm.title}
                      </h4>

                      <p className="text-gray-700 text-md mt-1 py-3  text-justify  ">
                        {elm.description.slice(0, 200)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="Many-Reasons">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8">
            So Many Reasons to List on NextGen!
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            {reasons.map((elm) => {
              return (
                <div className="border rounded-lg shadow-lg p-6 flex flex-col items-center text-center bg-white max-w-xs mx-auto">
                  <img
                    src={elm.img}
                    alt="Clock Icon"
                    className="w-16 h-16 mb-4"
                  />
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {elm.heading}
                  </h4>
                  <p className="text-gray-600">{elm.para}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
