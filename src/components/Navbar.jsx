import React from 'react'
import {BsCart2} from 'react-icons/bs'

const Navbar = ({ count }) => {
  return (
    <nav className='container mx-auto px-2 sm:px-0 flex justify-between items-center mt-4'>
      {/* Logo Theme */}
      <a href="/"><h1 className='text-white text-xl md:text-2xl font-primary font-bold'><span className='text-mainColor'>Food</span> Ni Mama</h1></a>
      
      <div className="relative">
      <div className='text-white text-2xl md:text-4xl font-bold'>
        <BsCart2 />
      </div>
        <span className="absolute top-0 right-0 bg-red text-white text-[.5rem] md:text-[1rem] h-[0.8rem] md:h-[1.4rem] rounded-full px-[3px]">{count}</span>
      </div>
      
    </nav>
  )
}

export default Navbar