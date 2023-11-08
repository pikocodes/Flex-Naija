import React, {useHistory, useRef} from 'react'
import SignupComp from '../Components/SignupComp'
import { Link, useNavigate } from 'react-router-dom'
import SignUpForm from '../Components/SignUpForm'
import RegisterAsVendor2 from './RegisterAsVendor2'
import StatusBarVendorsRegistration from '../Components/StatusBarVendorsRegistration'


function RegisterAsVendor1() {

 const nextPageLink = useNavigate()
 const prevPageLink = useNavigate()

    const nextPage = () => {
      nextPageLink('/VendorDetailsPage');
}

const prevPage = () => {
  prevPageLink('/');
}


  return (
    <div>
        {/* Stages tracking */}
        <StatusBarVendorsRegistration bar1Color={'orange-600'} bar2Color={'slate-400'} bar3Color={'slate-400'}
        bar4Color={'slate-400'} />
        


        {/* Personal Details Form */}
        <div className='mx-auto my-20' style={{width: '330px'}}>
            <SignUpForm title='Personal Details' linkToPrevPage='/' linkLabel='Next' linkDirection={nextPage}/>
        </div>

       
        
    </div>
  )
}

export default RegisterAsVendor1