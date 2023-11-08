import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import StatusBarVendorsRegistration from '../Components/StatusBarVendorsRegistration'
import VendorsActivityComp from '../Components/VendorsActivityComp'

function RegisterAsVendor3() {

    const nextPageLink = useNavigate()

    const nextPage = () => {
        nextPageLink('/VendorAuthentication');
  }

  return (
    <div>
        {/* Stages tracking */}
        <StatusBarVendorsRegistration bar1Color={'orange-600'} bar2Color={'orange-600'} bar3Color={'orange-600'}
        bar4Color={'slate-400'} />


        {/* Vendors Details Form */}
        <div className='mx-auto mb-20'>
        <VendorsActivityComp linkLabel={'Next'} linkToPrevPage={'/VendorDetailsPage'} linkDirection={nextPage} title={'Vendor Activities'}/>
        </div>

        {/* Go back to Homepage */}
        <div className='flex justify-center'>
        <Link to='/'><button className=' mt-6 mb-10 bg-orange-600 mx-auto hover:bg-orange-700 text-white text-xs py-3 px-7 rounded-full'>Back to Home</button></Link>
        </div>
    </div>
  )
}

export default RegisterAsVendor3