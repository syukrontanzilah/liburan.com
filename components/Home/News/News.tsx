import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="pt-20 pb-20">
      <SectionHeading heading="Exciting Travel News for You" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-center mt-20">
        <div>
          <NewsCard
            image="/images/n1.jpg"
            title="The Best Places to Visit in 2025"
            date="Feb 25, 2025"
          />
        </div>
        <div>
          <NewsCard
            image="/images/n2.jpg"
            title="Top 10 Place to visit in Indonesia"
            date="Feb 26, 2025"
          />
        </div>
        <div>
          <NewsCard
            image="/images/n3.jpg"
            title="How to Plan a GreatTrip to Bali"
            date="Feb 27, 2025"
          />
        </div>
        <div>
          <NewsCard
            image="/images/n4.jpg"
            title="The Best Beach in the World in February 2025"
            date="Feb 28, 2025"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
