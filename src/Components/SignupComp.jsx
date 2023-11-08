import React from 'react'
import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm';

function SignupComp() {

 

  return (
    
 <div className='md:grid grid-cols-2 m-auto h-screen'>

  {/* Left - Login intro */}
 <div className='hidden md:grid bg-gradient-to-tr from-orange-600 to-yellow-600 to-90%'>
      <div className='my-auto mx-auto text-white'>
      <p className=' text-center font-bold mb-4 text-4xl'>Hello!</p>
      <p className=' text-center text-xs mb-7'>Hey friend! We're excited to have you join us. Begin your journey by <br/> sharing your personal information.</p>
      <div className='flex justify-center'>
      <Link to='/Login'><button className='border border-white hover:bg-white px-12 py-2 text-xs text-center hover:text-orange-700  text-white rounded-full'>Login</button></Link>
      </div>
      </div>
    </div> 


        {/* Right - Signup Form */}

  

  <div className='mx-auto my-auto' style={{width: '330px'}}>
  <div className='relative'>
    <SignUpForm title='Sign Up' linkLabel='Sign Up'/>

    {/* <div className=''>
        <Link to='/Login'><button className=' hover:bg-orange-600 border border-orange-600 px-12 py-2 my-6 text-xs text-center text-orange-600 hover:text-white focus:outline-none rounded-full mx-auto'>Login</button></Link>
        <button className=' my-10 bg-orange-600 hover:bg-orange-700 text-white text-xs py-2 px-5 rounded-full'><Link to='/'> Back Home</Link></button>
        </div> */}
        </div>
    </div>
    </div>
  )
}

export default SignupComp