import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import StatusBarVendorsRegistration from '../Components/StatusBarVendorsRegistration'
import VendorAuthentication from '../Components/VendorAuthentication'

function VendorAuthenticationPage() {

    const nextPageLink = useNavigate()

    const nextPage = () => {
        nextPageLink('/');
  }


  return (
    <div>
         {/* Stages tracking */}
         <StatusBarVendorsRegistration bar1Color={'orange-600'} bar2Color={'orange-600'} bar3Color={'orange-600'}
        bar4Color={'orange-600'} />

        {/* Vendors Details Form */}
        <VendorAuthentication />

        {/* Go back to Homepage */}
        <div className='flex justify-center'>
        <Link to='/'><button className=' mt-6 mb-10 bg-orange-600 hover:bg-orange-700 text-white text-xs py-2 px-10 rounded-full'>Back to Home</button></Link>
        </div>
    </div>
  )
}

export default VendorAuthenticationPage