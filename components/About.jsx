import React from 'react'
import Image from 'next/image'
import { assets, toolsData } from '@/assets/assets'
import { infoList } from '@/assets/assets'

const About = (isDarkMode) => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-10'>
            <div className='w-48 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.notion_wbg} alt='user' className='w-full 
                rounded-3xl border border-black dark:border-white'/>
                {/* <Image src={assets.notion_wbg} alt='user' className='w-full 
                rounded-3xl border border-black'/> */}
            </div>
            <div className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo'>Psychologist turned Full Stack Developer with a thing for patterns, whether in human behavior, code, or music tabs. Years spent behind
                the wheel taught me to think fast, stay calm, and connect the dots under pressure. Now I bring that mindset to clean code, elegant UI,
                and a backend Im not afraid to face. I enjoy debugging as much as building, and Im always learning.  </p>

        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({icon, iconDark, title, description}, index) => (
            <li className='border-[0.5px] border-gray-400 p-6 rounded-xl cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover-shadow-black 
            dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index} >
                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                    <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                </li>
            ))}
        </ul>

        <h4 className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</h4>
        <ul className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
                <li key={index} className='flex items-center justify-center w-12 sm:-w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' >
                    <Image src={tool} alt={tool} className='w-5 sm:w-7' />
                </li>
            ))}
        </ul>

        </div>
        </div>
    </div>
  )
}

export default About
