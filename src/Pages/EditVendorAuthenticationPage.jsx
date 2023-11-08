import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import StatusBarVendorsRegistration from '../Components/StatusBarVendorsRegistration'
import EditVendorAuthentication from '../Components/EditVendorAuthentication'
import { useSpotContext } from '../Components/SpotContext'

function EditVendorAuthenticationPage() {

    const nextPageLink = useNavigate()

    const { selectedSpot } = useSpotContext();
    const { setSelectedSpot } = useSpotContext();

    console.log(`Authentication Page: ${selectedSpot}`)

    const nextPage = () => {
        nextPageLink('/');
  }


  return (
    <div>
         {/* Stages tracking */}
         <StatusBarVendorsRegistration bar1Color={'orange-600'} bar2Color={'orange-600'} bar3Color={'orange-600'}
        bar4Color={'orange-600'} />

        {/* Vendors Details Form */}
        <EditVendorAuthentication />

        {/* Go back to Homepage */}
        <div className='flex justify-center'>
        <Link to='/Spots' onClick={() => setSelectedSpot(selectedSpot)}><button className=' mt-6 mb-10 bg-orange-600 hover:bg-orange-700 text-white text-xs py-2 px-10 rounded-full'>My Vendor</button></Link>
        </div>
    </div>
  )
}

export default EditVendorAuthenticationPage