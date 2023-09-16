import React from "react";

import { TestimonialComponents } from "@/components";

import UserOne from "../images/image-emily.jpg";
import UserTwo from "../images/image-thomas.jpg";
import UserThree from "../images/image-jennie.jpg";

function Testimonials() {
  return (
    <div className="w-full h-[42rem]">
      <h1 className="font-secondary tracking-[0.5rem] text-grayish-blue text-xl h-60 flex items-center justify-center">CLIENT TESTIMONIALS</h1>
      <div className="flex items-center justify-evenly">
        <TestimonialComponents
          image={UserOne}
          content={
            "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          }
          name={"Emily R."}
          designation={"Marketing Director"}
        />
        <TestimonialComponents
          image={UserTwo}
          content={
            "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          }
          name={"Thomas S."}
          designation={"Chief Operating Officer"}
        />
        <TestimonialComponents
          image={UserThree}
          content={
            "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          }
          name={"Jennie F."}
          designation={"Business Owner"}
        />
      </div>
    </div>
  );
}

export default Testimonials;
