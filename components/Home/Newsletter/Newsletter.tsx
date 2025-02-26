import React from "react";
import { BsEnvelope } from "react-icons/bs";

const Newsletter = () => {
  return (
    <div className="bg-black pt-20 pb-20 flex items-center justify-center w-full flex-col">
      <BsEnvelope className="w-16 h-16 text-white mt-10" />
      <h1 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mt-10 tracking-widest">
        Your Travel Journey Starts Here
      </h1>
      <p className="text-white mt-3 text-xs sm:text-sm">
        Sign up and we will send the best deals to you
      </p>
      {/* form subscription */}
      <div className="w-full">
        <input
          type="text"
          className="px-6 py-3.5 bg-white mt-8 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none"
          placeholder="Email"
        />
        <button className="px-6 py-3.5 bg-blue-900 transition-all duration-500 mt-3 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none text-white hover:bg-blue-800 font-semibold">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
