import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import VendorsFormComp from '../Components/VendorsFormComp'
import StatusBarVendorsRegistration from '../Components/StatusBarVendorsRegistration'
import { useSpotContext } from '../Components/SpotContext';
import EditVendorData1Comp from '../Components/EditVendorData1Comp';


function EditVendorData1Page({loginAccount}) {


  const { selectedSpot } = useSpotContext();
  const nextPageLink = useNavigate()

 
     const nextPage = () => {
       nextPageLink('/EditVendorData2Page');
 }
 

console.log(loginAccount);


  return (
    <div className=' '>

        {/* Stages tracking */}
        <StatusBarVendorsRegistration bar1Color={'orange-600'} bar2Color={'orange-600'} bar3Color={'slate-400'}
        bar4Color={'slate-400'} />


        {/* Vendors Details Form */}
        <div className='mx-auto my-20' style={{
        width: '100%', // Set the default width for all screen sizes
        '@media (min-width: 1024px)': {
          width: '530px', // Apply styles for desktop screens (screens wider than 768px)
        },
      }}>
            <EditVendorData1Comp title='Vendor Details' linkLabel='Update' linkToPrevPage='/Dashboard' linkDirection={nextPage} verifyVendorAccount={selectedSpot}/>
        </div>

        {/* Go back to Homepage */}
        <div className=' flex justify-center'>
        <Link to='/'><button className=' mt-3 mb-10 bg-orange-600 hover:bg-orange-700 text-white text-xs py-2 px-5 rounded-full'>Back to Home</button></Link>
        </div>
        
    </div>
  )
}

export default EditVendorData1Page