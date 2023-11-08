import React from 'react'

function Footer() {
  return (
    <div className='pt-12 text-sm text-center bg-gray-900 text-white'>
    <div className='block sm:flex'>
      <div className='text-center sm:text-left mx-6'>
        <h1 className=' text-base sm:text-lg font-medium'>Pick your Spots</h1>
        <ul className=' text-sm sm:text-base font-light text-slate-400'>
          <li><a>Food</a></li>
          <li><a>Hiking</a></li>
          <li><a>Relaxation</a></li>
          <li><a>Pools</a></li>
          <li><a>Art</a></li>
          <li><a>Club</a></li>
        </ul>
      </div>
      <div className='text-center sm:text-left sm:ml-28 mt-8 sm:mt-0'>
        <h1 className=' text-base sm:text-lg font-medium'>Contact</h1>
        <ul className=' text-sm sm:text-base font-light text-slate-400'>
          <li>Phone Number</li>
          <li>info@flex-naija.com</li>
        </ul>
      </div>
    </div>

  {/* Demarcating line */}
  <div className="border-t my-6 mx-auto border-solid w-4/5 border-gray-700"></div>


    {/* Copyrights */}
    <div className='text-center pt-1 pb-4'>
        <h1 className=' text-xs sm:text-sm text-gray-700 font-regular justify-end'> Copyrights 2023, Flex Naija</h1>
        
      </div>
    </div>
  )
}

export default Footer