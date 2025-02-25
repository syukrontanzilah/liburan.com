import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import WhyCard from "./WhyCard";

const Why = () => {
  return (
    <div className="pt-16 pb-24">
      {/* section heading */}
      <SectionHeading heading="Why Choose Us" />
      <div className="grid w-[80%] !mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20  justify-between">
        <div>
          <WhyCard image="/images/c1.svg" title="Best Price Guarantee" />
        </div>
        <div>
          <WhyCard image="/images/c2.svg" title="Easy & Quick Booking" />
        </div>
        <div>
          <WhyCard image="/images/c3.svg" title="Customer Care 24/7" />
        </div>
      </div>
    </div>
  );
};

export default Why;
