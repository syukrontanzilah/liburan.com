import React from "react";
import { BsEnvelope } from "react-icons/bs";

// bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)]

const Newsletter = () => {
  return (
    <div className="
    
bg-[linear-gradient(to_bottom,#ffffff,#172554)]

    pt-20 pb-20 flex items-center justify-center w-full flex-col">
      <BsEnvelope className="w-16 h-16 text-blue-950 mt-10 "/>
      <h1 className="text-blue-950 text-lg sm:text-xl md:text-2xl font-semibold mt-10 tracking-widest">
        Your Travel Journey Start Here
      </h1>
      <p className="text-blue-950 font-semibold mt-3 text-xs sm:text-sm">
        Sign up and we will send the best deals to you
      </p>
      {/* form subscription */}
      <div className="w-full">
        <input
          type="text"
          className="px-6 py-3.5 bg-white mt-8 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none"
          placeholder="Email"
        />
        <button className="px-6 py-3.5 bg-blue-600 transition-all duration-500 mt-3 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none text-white hover:bg-blue-800 font-semibold">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
