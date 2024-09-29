import React from 'react'
import Link from 'next/link'

function Button() {
  return (
    <div className='ml-10 gap-10 flex md:pb-0 pb-10'>
          <Link href='https://www.linkedin.com/in/alishba-naveed-a9ab38251/' target='_blank'><button className='px-6 py-1 border-pink-600 border-2 rounded-3xl cursor-pointer hover:bg-pink-600 duration-500 font-bold text-white'>Linkedin</button></Link>
          <Link href='https://github.com/alishba241' target='_blank'><button className='px-8 py-1 border-pink-600 border-2 rounded-3xl cursor-pointer hover:bg-pink-600 duration-500 font-bold text-white'>Github</button></Link>
    </div>
  )
}

export default Button
