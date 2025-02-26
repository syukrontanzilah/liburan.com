import Link from "next/link";
import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone,  FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#172554] pt-20 pb-20">
      {/* content top */}
      <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1 part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold text-white/80">Company</h1>
          <p className="text-white/60 font-medium cursor-pointer text-sm hover:text-gray-300">
            About Us
          </p>
          <p className="text-white/60 font-medium cursor-pointer text-sm hover:text-gray-300">
            Creers
          </p>
        </div>
        {/* 2 part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold text-white/80">Support</h1>
          <p className="text-white/60 font-medium cursor-pointer text-sm hover:text-gray-300">
            Contact
          </p>
          <p className="text-white/60 font-medium cursor-pointer text-sm hover:text-gray-300">
            Privacy Policy
          </p>
        </div>
        {/* 3 part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold text-white/80">Other Services</h1>
          <p className="text-white/60 font-medium cursor-pointer text-sm hover:text-gray-300">
            Car Hire
          </p>
          <p className="text-white/60 font-medium cursor-pointer text-sm hover:text-gray-300">
            Activity Finder
          </p>
        </div>
        {/* 4 part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold text-white/80">Contact Us</h1>
          <div className="flex items-center space-x-2">
            <FaPhone className="text-white/60 font-medium cursor-pointer text-sm hover:text-gray-300" />
            <p className="text-white/60 font-medium cursor-pointer text-sm hover:text-gray-300">
              +62-85344011949
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-white/60 font-medium cursor-pointer text-sm hover:text-gray-300" />
            <p className="text-white/60 font-medium cursor-pointer text-sm hover:text-gray-300">
              support@qiqi.com
            </p>
          </div>
        </div>
      </div>
      {/* content bottom */}
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
        <p className="text-center md:text-left">
          © 2023 Qiqi. All rights reserved
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social: </span>
          <Link href={"#"} className="text-gray-300 hover:text-blue-400 transition-all duration-300">
            <FaTwitter />
          </Link>
          <Link href={"#"} className="text-gray-300 hover:text-blue-700 transition-all duration-300">
            <FaFacebook />
          </Link>
          <Link href={"#"} className="text-gray-300 hover:text-purple-500 transition-all duration-300">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
