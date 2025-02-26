import Link from "next/link";
import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone,  FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-20 pb-20">
      {/* content top */}
      <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1 part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Company</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            About Us
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Creers
          </p>
        </div>
        {/* 2 part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Support</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Contact
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Privacy Policy
          </p>
        </div>
        {/* 3 part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Other Services</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Car Hire
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Activity Finder
          </p>
        </div>
        {/* 4 part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Contact Us</h1>
          <div className="flex items-center space-x-2">
            <FaPhone className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950" />
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              +62-85344011949
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950" />
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              support@qiqi.com
            </p>
          </div>
        </div>
      </div>
      {/* content bottom */}
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-center md:text-left">
          © 2023 Qiqi. All rights reserved
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social: </span>
          <Link href={"#"} className="text-gray-500 hover:text-blue-400 transition-all duration-300">
            <FaTwitter />
          </Link>
          <Link href={"#"} className="text-gray-500 hover:text-blue-700 transition-all duration-300">
            <FaFacebook />
          </Link>
          <Link href={"#"} className="text-gray-500 hover:text-purple-500 transition-all duration-300">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
