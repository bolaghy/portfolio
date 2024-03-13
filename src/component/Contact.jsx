import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'> 
    <h1 className='text-4xl font-bold text-center text-[#001b5e] py-4'>Contact
    </h1>
    <form action="https://getform.io/f/payngyrb" method='POST' encType='multipart/form-data'>
      <div className='grid md:grid-cols-2 py-2 w-full gap-4'>
        <div className='flex flex-col'>
          <label className='uppercase text-sm py-2'>Full name</label>
          <input className='border-2 rounded-lg p-3 border-gray-300' type="text"  name='name'/>
        </div>
        <div className='flex flex-col'>
          <label className='uppercase text-sm py-2'>Phone</label>
          <input className='border-2 rounded-lg p-3  border-gray-300' type="text"  name='Phone Number'/>
        </div>
      </div>
      <div  className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>E-mail</label>
          <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text"  name='E-mail'/>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Review</label>
         <textarea className='border-2 rounded-lg p-3 flex border-gray-300' name="review" rows="10"></textarea>
        </div>
        <button className='bg-[#001b5e] text-gray-100 mt-4 p-4 w-full rounded-lg font-semibold'>
        Submit
        </button>
    </form>
        
    </div>
  )
}

export default Contact
