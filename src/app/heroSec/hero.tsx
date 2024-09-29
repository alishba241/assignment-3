import React from 'react'
import Image from 'next/image'
import profile from '../../../images/images__29_-removebg-preview.png'

function Hero() {
  return (
    <div className='md:mt-40 mt-16 flex md:justify-between justify-center items-center md:flex-row flex-col-reverse'> 
          <div className='md:ml-10 md:h-[200px] md:w-[650px] mt-16 md:mt-0 p-8 md:p-1'>
              <h2 className='md:text-3xl font-bold text-2xl  text-white '>I&#39;m Alishba Naveed</h2>
              <h2 className='md:text-2xl text-xl pt-1 font-bold text-pink-600'>Frontend Developer</h2>
           <p className='text-white font-sans text-sm pt-5'>I&#39;m a passionate web developer with a focus on creating dynamic, responsive, and user-friendly applications. With a solid foundation in technologies like Next.js, TypeScript, and React. I&#39;m constantly learning new tools and techniques to elevate my skills. Let&#39;s build something amazing together</p>
          </div>
      <div className=' md:h-[250px] md:w-[250px] h-[200px] w-[200px] md:mr-10 shadow-2xl shadow-pink-600 border-2 border-pink-600 rounded-full '>
        <Image src={profile} alt='profile photo'
        className='relative md:top-[22px] md:left-[10px] rounded-full'
        />
          </div>

    </div>
  )
}

export default Hero
