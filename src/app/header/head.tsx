import Link from 'next/link'
import React from 'react'

function Head() {
  return (
      <div className='md:flex md:justify-between text-center'>
          <h1 className='text-white md:ml-10 mt-10 font-extrabold text-2xl '><span className='text-pink-600'>P</span>ortfolio<span className='text-pink-600'>.</span></h1>
          <div className='text-white md:gap-10 gap-4 text-sm md:mr-20 mt-10 flex md:flex-row flex-col justify-center items-center'>
             
             <Link href='/'><h1 className='px-8 py-1 border-pink-600 border-2 rounded-3xl cursor-pointer hover:bg-pink-600 duration-500'>Home</h1></Link>
        <Link href={'/about'}><h1 className='px-8 py-1 border-pink-600 border-2 rounded-3xl cursor-pointer hover:bg-pink-600 duration-500'>About</h1></Link> 
        <Link href={'/contact'}><h1 className='px-8 py-1 border-pink-600 border-2 rounded-3xl cursor-pointer hover:bg-pink-600 duration-500'>Contact</h1></Link>
       <Link href={'/projects'}><h1 className='px-8 py-1 border-pink-600 border-2 rounded-3xl cursor-pointer hover:bg-pink-600 duration-500'>Projects</h1></Link>
      </div>
    </div>
  )
}

export default Head
