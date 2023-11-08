import React from 'react'
import { Link } from 'react-router-dom'

function ErrorComp() {
  return (
    <div className=' h-screen block md:grid md:grid-cols-2 '>
        <div className=' md:my-auto mt-10 mx-auto w-3/5'>
            <img src="../../assets/images/boy-error.jpg" alt="Illustration" />
        </div>

        <div className=' md:my-auto mt-10'>
            <p className=' text-3xl font-semibold md:font-normal md:text-7xl mb-1 md:mb-5 text-center md:text-left'>Error 404</p>
            <p className=' text-sm md:text-base mx-auto md:mx-0 md:w-3/5 mt-3 w-3/5 md:mt-0 text-center md:text-left'>Oopsie-daisy! Looks like you wandered off the virtual dance floor to a URL that doesn't exist. Let's groove back to where the party's at!</p>

            {/* Back to Home */}
            <Link to='/'><button className=' mt-4 bg-gray-400 hover:bg-orange-600 text-white text-xs py-2 mx-auto flex md:float-left px-6 rounded-sm'> Home</button></Link>

        </div>
    </div>
  )
}

export default ErrorComp