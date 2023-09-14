import React from "react";

import ImageTransform from "../images/desktop/image-transform.jpg";
import ImageStandOut from "../images/desktop/image-stand-out.jpg";
import ImagePhotography from "../images/desktop/image-photography.jpg";
import ImageGraphicDesign from "../images/desktop/image-graphic-design.jpg";

import Image from "next/image";

function ContentComponent() {
  return (
    <div className="w-full h-full">
      <div className="w-full flex items-center justify-between">
        <div className="basis-1/2 flex flex-col items-start h-60 px-32 justify-between">
          <h1 className="font-secondary text-5xl text-very-dark-desaturated-blue">
            Transform your brand
          </h1>
          <p className="font-primary text-grayish-blue">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a
            href=""
            className="after:block after:bg-yellow after:bg-opacity-50 after:h-2"
          >
            <p className="font-secondary h-4">LEARN MORE</p>
          </a>
        </div>
        <div className="basis-1/2">
          <Image src={ImageTransform} alt="" className="w-full" />
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="basis-1/2">
          <Image src={ImageStandOut} alt="" className="w-full" />
        </div>
        <div className="basis-1/2 flex flex-col items-start h-60 px-32 justify-between">
          <h1 className="font-secondary text-5xl text-very-dark-desaturated-blue">
            Stand out to the right audience
          </h1>
          <p className="font-primary text-grayish-blue">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a
            href=""
            className="after:block after:bg-soft-red after:bg-opacity-50 after:h-2"
          >
            <p className="font-secondary h-4">LEARN MORE</p>
          </a>
        </div>
      </div>
      <div className="w-full flex items-center justify-between h-max">
        <div className="basis-1/2 relative">
          <Image src={ImageGraphicDesign} alt="" className="w-full absolute top-0 left-0" />
          <div className="w-full absolute top-96 left-0 flex flex-col items-center px-32">
            <h1 className="font-secondary text-dark-desaturated-cyan text-3xl font-extrabold">Graphic Design</h1>
            <p className="text-center font-primary text-dark-moderate-cyan mt-10">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
        <div className="basis-1/2 relative">
          <Image src={ImagePhotography} alt="" className="w-full absolute top-0 left-0" />
          <div className="w-full absolute top-96 left-0 flex flex-col items-center px-32">
            <h1 className="font-secondary text-very-dark-desaturated-blue text-opacity-75 text-3xl font-extrabold">Photography</h1>
            <p className="text-center font-primary text-dark-blue mt-10">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentComponent;
