import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white  w-full'>
        <div className=' flex item-center justify-around md:justify-between  px-10 lg:px-40   py-5'>
        <div className="logo font-bold text-xl md:text-2xl  ">
            <span className='text-purple-700'>&lt;</span>
            <span className=''>Pass</span>
            <span className='text-purple-700'>OP/&gt;</span>
        </div>
    <div>
        <button className='flex items-center  bg-purple-600 rounded-full  md:px-2 ring-1 ring-white'>
            <img src="icons/github.svg" alt="" className=' w-7 md:w-10 invert p-1' />
            <span className='font-bold text-sm md:text-xl px-1'>GitHub</span>
        </button>
    </div>
        </div>
    </nav>
  )
}

export default Navbar