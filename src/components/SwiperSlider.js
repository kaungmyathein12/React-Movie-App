import React from "react";
import { Link } from "react-router-dom";
import { imgUrl } from "../apiConfig";
//Swiper start
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Autoplay } from "swiper";
function SwiperSlider({ data }) {
  return (
    <>
      <Swiper
        className="text-white"
        breakpoints={{
          360: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={25}
        slidesPerView={5}
        modules={[Scrollbar, Autoplay]}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
      >
        {data &&
          data.map((movie, index) => {
            if (index < 10) {
              return (
                <SwiperSlide key={movie.id}>
                  <Link to={`/movies/${movie.id}`}>
                    <div
                      className="hover:opacity-40 h-80"
                      onClick={() => (document.documentElement.scrollTop = 0)}
                    >
                      <img
                        src={`${imgUrl}${movie.poster_path}`}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </Link>
                </SwiperSlide>
              );
            }
            return null;
          })}
      </Swiper>
    </>
  );
}

export default SwiperSlider;
