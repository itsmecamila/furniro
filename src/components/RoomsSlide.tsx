import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function RoomsSlide() {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={24}
      slidesPerView={3}
    >
      <SwiperSlide>
        <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/images/slide-1.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/images/slide-1.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/images/slide-1.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/images/slide-1.png" alt="" />
      </SwiperSlide>
    </Swiper>
  )
}