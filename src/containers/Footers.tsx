import React from 'react'

import Facebook from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";

import Logo from "../images/logo.svg";

function Footers() {
  return (
    <div className='w-full h-[20rem] bg-dark-moderate-cyan flex flex-col items-center'>
        <h1 className='text-3xl font-extrabold text-dark-desaturated-cyan mt-16'>sunnyside</h1>
        <div className='text-dark-desaturated-cyan flex items-center justify-between w-96 mt-8'>
            <p>About</p>
            <p>Services</p>
            <p>Projects</p>
        </div>
        <div className='flex items-center justify-between w-44 mt-20'>
            <Facebook />
            <Instagram />
            <Twitter />
            <Pinterest />
        </div>
    </div>
  )
}

export default Footers