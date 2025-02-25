import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const NavbarMobile = ({showNav, closeNav}: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]"
  return (
    <div className="">
      {/* overlay */}
      <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}></div>
      {/* navlinks */}
      <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-300 delay-100 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}>
        {navLinks.map((link) => {
          return (
            <Link href={link.url} key={link.id}>
              <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] ">
                {link.label}
              </p>
            </Link>
          );
        })}
         <button className="md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200 translate-x-0 duration-200 rounded-lg w-[50%] ml-12 !mt-10">
            Book Now
          </button>
        {/* close button */}
        <div className="">
          <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
