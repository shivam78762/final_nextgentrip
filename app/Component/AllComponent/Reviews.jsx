"use client"
import React from 'react'
// import Swiper from 'swiper'
import { SwiperSlide ,Swiper} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Reviews = () => {

    const data = [
        {
          name: "Archer",
          location: "Chandigarh",
          rating: 4.5,
          review:
            "The professionalism and dedication of the NextGentrip team are commendable. They delivered a sleek and user-friendly design that greatly improved our customer engagement",
        },
        {
          name: "anku",
          location: "Delhi",
          rating: 5,
          review:
            "Absolutely loved the way they understood our requirements and delivered beyond expectations",
        },
        {
          name: "aman",
          location: "Mumbai",
          rating: 4,
          review:
            "Great experience with the team. Very responsive and creative in their approach",
        },
        {
            name: "Maya",
            location: "Delhi",
            rating: 5,
            review:
              "Absolutely loved the way they understood our requirements and delivered beyond expectations",
          },
          {
            name: "Ravi",
            location: "Mumbai",
            rating: 4,
            review:
              "Great experience with the team. Very responsive and creative in their approach",
          },
      ];



      const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
  }
  return stars;
};

  return (
    <div className='w-full p-10 flex flex-col gap-5'>

<div  className='text-center py-10 '>
<p className='font-semibold text-2xl'>Customer Reviews</p>
</div>


<div className=' md:px-10  lg:px-32'>

<Swiper
       breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
        loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false, 
  }}
  modules={[Autoplay]}
  className="mySwiper h-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-xl p-6 ">
                <div className='flex gap-2 items-center  mb-3'>
                <div className='py-3 text-xl font-bold px-5 bg-green-200 text-blue-500 rounded-full'>{item.name.split("")[0]}</div>
              <div className="text-lg font-semibold ">{item.name}</div>
              </div>
              <div className='flex justify-between '>
              <div className="text-sm text-gray-500 mb-2">{item.location}</div>
              <div className="flex mb-3">{renderStars(item.rating)}</div>
              </div>
              <p className="text-gray-700 text-sm">{item.review.length>80?`${item.review.slice(0,80)} . . .`:`${item.review}`}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>



</div>

    </div>
  )
}

export default Reviews