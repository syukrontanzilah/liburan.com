"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/virtual";
import { reviewData } from "@/data/data";
import { FaStar } from "react-icons/fa";
import Image from "next/image";


const ReviewSlide = () => {
  return (
    <div className="">
      <Swiper
        effect="cards"
        // gradcursor="true"
        modules={[EffectCards]}
        className="md:w-[450px] md:h-[350px] w-[90%] h-[300px]"
      >
        {reviewData.map((data) => {
          return (
            <SwiperSlide key={data.id} className="bg-white rounded-3xl block">
              <div className="w-[80%] mx-auto mt-16">
                {/* review text */}
                <p className="text-xs sm:text-sm md:text-base font-semibold">
                  {data.review}
                </p>
                {/* icon */}
                <div className="flex items-center mt-4">
                  <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-500" />
                  <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-500" />
                  <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-500" />
                  <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-500" />
                  <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-500" />
                </div>
                {/* user */}
                <div className="mt-10">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={data.image}
                      alt={data.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                        <p className="text-sm sm:text-lg font-semibold">{data.name}</p>
                        <p className="text-gray-500 text-xs sm:text-base">{data.job}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ReviewSlide;
