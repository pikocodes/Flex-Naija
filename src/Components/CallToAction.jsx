import React from 'react'
import {Link} from 'react-router-dom'

function CallToAction() {
  return (
    <div>
        <div className=' bg-orange-600 text-white p-28 items-center text-center'>
            <p className=' text-xl sm:text-2xl font-normal sm:font-normal'>Sign up as a User</p>
            <Link to='/Sign-up'><button className=' rounded bg-white py-2 hover:s sm:py-2 px-5 sm:px-5 text-sm sm:text-base sm:font-medium text-black hover:text-orange-600 m-2'>Sign Up</button></Link>
        </div>
    </div>
  )
}

export default CallToAction