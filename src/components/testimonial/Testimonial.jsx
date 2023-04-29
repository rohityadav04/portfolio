import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/ava-1.jpg";
import AVTR2 from "../../assets/ava-2.jpg";
import AVTR3 from "../../assets/ava-3.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Cameron Green",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet minima velit. Vitae rerum rem ullam unde atque error quos enim opt iste? Nam, eius ipsum? Perspiciatis, corrupti! Saepe, doloremque consequuntur!",
  },
  {
    avatar: AVTR2,
    name: "Isy Wong",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet minima velit. Vitae rerum rem ullam unde atque error quos enim opt iste? Nam, eius ipsum? Perspiciatis, corrupti! Saepe, doloremque consequuntur!",
  },
  {
    avatar: AVTR3,
    name: "Tim David",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet minima velit. Vitae rerum rem ullam unde atque error quos enim opt iste? Nam, eius ipsum? Perspiciatis, corrupti! Saepe, doloremque consequuntur!",
  },
  {
    avatar: AVTR1,
    name: "Cameron Green",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet minima velit. Vitae rerum rem ullam unde atque error quos enim opt iste? Nam, eius ipsum? Perspiciatis, corrupti! Saepe, doloremque consequuntur!",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonals</h2>
      <Swiper
        className="container testimonals_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonal">
              <div className="client_avatar">
                <img src={avatar} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
