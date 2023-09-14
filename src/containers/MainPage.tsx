"use client"

import React, { useEffect, useState } from 'react'

import { Navbar } from '../components';
import BackgroundImageDesktop from "../images/desktop/image-header.jpg";
import BackgroundImageMobile from "../images/mobile/image-header.jpg";

import Arrow from "../images/icon-arrow-down.svg";

import Image from 'next/image';

function MainPage() {

  const [currentWidth, setCurrentWidth] = useState(0);

  useEffect(() => {
    function getWindowWidth() : number {
      return window.innerWidth;
    }

    const updateWidth = () : void => {
      setCurrentWidth(getWindowWidth());
    }

    window.addEventListener('resize', updateWidth);

    return (() : void => {
      window.removeEventListener('resize', updateWidth);
    });
  }, [currentWidth]);

  useEffect(() => {
    setCurrentWidth(window.innerWidth);
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-screen relative">
        <Image src={currentWidth <= 430 ? BackgroundImageMobile : BackgroundImageDesktop} alt="" className='w-full h-screen absolute top-0 left-0 object-fill' />
        <div className='w-full absolute top-0 left-0 md:p-10 h-screen'>
            <Navbar />
            <div className='w-full h-2/3 flex flex-col items-center justify-evenly mt-4'>
                <h1 className='text-white font-secondary text-2xl md:text-5xl tracking-[0.25em] text-center w-full'>WE ARE CREATIVES</h1>
                <div className=''>
                  <Arrow />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainPage