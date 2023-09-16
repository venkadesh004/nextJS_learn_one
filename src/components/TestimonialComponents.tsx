import React from "react";
import Image from "next/image";

function TestimonialComponents({
  image,
  content,
  name,
  designation,
}: {
  image: any;
  content: string;
  name: string;
  designation: string;
}) {
  return (
    <div className="h-80 w-[20rem] flex flex-col items-center justify-evenly">
      <Image src={image} alt="" className="rounded-full w-20" />
      <p className="text-center font-primary text-very-dark-grayish-blue">
        {content}
      </p>
      <div className="flex flex-col items-center">
        <h3 className="font-secondary">{name}</h3>
        <h5 className="font-primary text-dark-grayish-blue text-sm mt-1">
          {designation}
        </h5>
      </div>
    </div>
  );
}

export default TestimonialComponents;
