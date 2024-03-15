import React from 'react'

const projectItem = ({img, title}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl 
                        group bg-gradient-to-t from-gray-200 to-[#001b5e]'>
      <img src={img} alt="/" className='rounded-xl group-hover:opacity-10'/>
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
      <h3 className='md:text-2xl text-sm text-white font-bold tracking-wider text-center '>
        {title }
      </h3>
      <p className='pb-1 pt-1  md:text-2xl text-sm text-center text-white font-semibold'>React Js</p>
      <a href=""><p className='text-center p-1 rounded-lg bg-white text-gray-700 
                                 cursor-pointer text-sm md:text-lg'>More Info</p></a>
      </div>
    </div>
  )
}

export default projectItem
