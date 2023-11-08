import React from 'react'

function VendorsDashboardHeroComp({loginAccount}) {

  console.log(loginAccount)


  return (
    <div className="hero -z-30 sm:-z-50">
    {/* Hero Text */}
    <div className="absolute top-0 left-0 w-full h-full items-center justify-center flex sm:flex search-bar z-50">

     <div>
       <p className=' text-center text-3xl sm:text-5xl mb-1 block sm:block text-white font-medium sm:font-bold
       '>Dashboard</p> 

       {/* <p className='text-center text-sm sm:text-xl mb-8 block sm:block text-slate-300 font-light sm:font-normal italic'>How can we assist you</p> */}

         </div>
   </div>
   
   <div className="overlay"></div>

   <div className='container pb-0 mb-0'>
    <img src="https://images.pexels.com/photos/4907455/pexels-photo-4907455.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Hero" className='image '/>  
   </div>

 </div>
  )
}

export default VendorsDashboardHeroComp