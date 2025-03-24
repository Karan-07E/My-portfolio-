"use client"

import Image from "next/image"
import React from 'react'
import { Socials } from "@/constants"

const Navbar = () => {
        const handleIconClick = (name: string) => {
          let url = '';
          switch (name) {
            case 'Github':
              url = 'https://github.com/Karan-07E'; 
              break;
            case 'Facebook':
              url = 'https://facebook.com/yourusername'; 
              break;
            case 'Instagram':
              url = 'https://instagram.com/yourusername'; 
              break;
            case 'Discord':
              url = 'https://discord.com/users/yourusername'; 
              break;
            default:
              console.log(`No URL found for ${name}`);
              return;
          }
          window.location.href = url;
        };
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
        <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
            <a href="#about-me" className='w-auto h-auto flex flex-row items-center'>
                <Image 
                 src = "/NavLogo.png"
                 alt = "logo"
                 width={70}
                 height={70}
                 className='cursor-pointer hover:animate-slowspin'
                />
                <span className="font-bold m1-[10px] hidden md:block text-gray-300">
                    Karan Codes
                </span>
            </a>
            <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-5'>
                <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                    <a href="#about-me" className='cursor-pointer'>About me</a>
                    <a href="#skills" className='cursor-pointer'>Skills</a>
                    <a href="#projects" className='cursor-pointer'>Projects</a>
                </div>
            </div>

            <div className="flex flex-row gap-5">
                {Socials.map((social) => (
                    <Image
                      src = {social.src}
                      alt = {social.name}
                      key = {social.name}
                      width={24}
                      height={24}
                      onClick={() => handleIconClick(social.name)}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Navbar;