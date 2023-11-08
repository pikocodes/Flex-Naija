import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import StatusBarVendorsRegistration from '../Components/StatusBarVendorsRegistration'
import VendorsActivityComp from '../Components/VendorsActivityComp'
import EditVendorData2Comp from '../Components/EditVendorData2Comp'
import { useSpotContext } from '../Components/SpotContext'

function EditVendorData2Page() {

    const nextPageLink = useNavigate()

    const { selectedSpot } = useSpotContext();
    console.log(`Vendor Data 2: ${selectedSpot}`);

    // change destination
    const nextPage = () => {
        nextPageLink('/EditAuthenticationPage');
  }

  return (
    <div>
        {/* Stages tracking */}
        <StatusBarVendorsRegistration bar1Color={'orange-600'} bar2Color={'orange-600'} bar3Color={'orange-600'}
        bar4Color={'slate-400'} />


        {/* Vendors Details Form */}
        <div className='mx-auto mb-20'>
        <EditVendorData2Comp linkLabel={'Update'} linkToPrevPage={'/EditVendorData1Page'} linkDirection={nextPage} verifyVendorAccount={selectedSpot} title={'Vendor Activities'}/>
        </div>

        {/* Go back to Homepage */}
        <div className='flex justify-center'>
        <Link to='/'><button className=' mt-6 mb-10 bg-orange-600 mx-auto hover:bg-orange-700 text-white text-xs py-3 px-7 rounded-full'>Back to Home</button></Link>
        </div>
    </div>
  )
}

export default EditVendorData2Page