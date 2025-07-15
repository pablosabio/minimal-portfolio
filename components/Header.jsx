import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div
        initial={{ scale: 0}}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
        <Image src={assets.notion_wbg} alt='me' className='rounded-full w-64' />
      </motion.div>
        <h3 className='flex items-end gap-2 text-xl md:text-3xl mb-3 font-Ovo'>Hi! I'm Pablo Sabio <Image src={assets.hand_icon} alt='' className='w-6 mb-1.75' /></h3> 
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            full stack developer based&nbsp;in Leipzig.
        </h1>
        <p className="max-w-2xl mx-auto font-Ovo text-xl mt-4">
            I'm a full stack developer from Leipzig, Germany with 10 years of experience in multiple companies like Microsoft, Tesla and Apple 
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <a href="#contact"
            className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent '
            >
                contact me 
                <Image src={assets.right_arrow_white} alt='me' className='w-4' />
            </a>
            <a href="/pablo-sabio-CV.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
            my resume <Image src={assets.download_icon} alt='me' className='w-4' />
            </a>
        </div>
    </div>
  )
}

export default Header
