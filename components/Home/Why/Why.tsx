import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import WhyCard from "./WhyCard";

const Why = () => {
  return (
    <div className="pt-24 pb-32">
      {/* section heading */}
      <SectionHeading heading="Why Choose Us" />
      <div className="grid w-[80%] !mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20  justify-between">
        <div data-aos="fade-up"               data-aos-anchor-placement="top-center"
        >
          <WhyCard image="/images/c1.svg" title="Best Price Guarantee" />
        </div>
        <div data-aos="fade-up"               data-aos-anchor-placement="top-center" data-aos-delay="100">
          <WhyCard image="/images/c2.svg" title="Easy & Quick Booking" />
        </div>
        <div data-aos="fade-up"               data-aos-anchor-placement="top-center" data-aos-delay="250">
          <WhyCard image="/images/c3.svg" title="Customer Care 24/7" />
        </div>
      </div>
    </div>
  );
};

export default Why;
