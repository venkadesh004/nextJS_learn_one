import React from 'react'

import MilkBottles from "../images/desktop/image-gallery-milkbottles.jpg";
import Oranges from "../images/desktop/image-gallery-orange.jpg";
import Cone from "../images/desktop/image-gallery-cone.jpg";
import SugarCubes from "../images/desktop/image-gallery-sugarcubes.jpg";

import Image from 'next/image';

function ImagesSection() {
  return (
    <div className='flex items-center justify-center w-full h-[30rem]'>
        <Image src={MilkBottles} alt='' className='w-1/4 h-full' />
        <Image src={Oranges} alt='' className='w-1/4 h-full' />
        <Image src={Cone} alt='' className='w-1/4 h-full' />
        <Image src={SugarCubes} alt='' className='w-1/4 h-full' />
    </div>
  )
}

export default ImagesSection