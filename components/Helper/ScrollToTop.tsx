"use client";
import React, { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isvisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`fixed bottom-4 animate-pulse right-4`}>
      {isvisible && (
        <button className="w-12 h-12 bg-rose-400 text-white rounded-full flex items-center justify-center focus:outline-none flex-col transition-all duration-500" onClick={ScrollToTop} title="Scroll to top">
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
