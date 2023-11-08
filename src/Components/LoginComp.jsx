import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAccountContext } from './AccountHolder';


function LoginComp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { setAccountHolder } = useAccountContext();
    // const { AccountHolder } = useAccountContext();
  


    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };


    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent the form submission
    
      // axios.push('API URL', { email, password })
      setAccountHolder({ email, password });
    }

      // console.log(`Login Account: ${AccountHolder}`);
      console.log(`Email: ${email}, password: ${password}`);

  return (
    <div className='md:grid grid-cols-2 md:m-auto mx-auto my-40 h-screen'>

    <div className='mx-auto my-auto ' style={{width: '330px'}}>
      <div className='relative'>
       <form onSubmit={handleSubmit} className='p- bg-white  my-10 rounded-lg'>
       <p className='text-center text-2xl text-orange-600 py-1'>Login in to Flex-Naija</p>
       <p className='text-center text-xs italic text-slate-300 pb-3'>Some Hot Spots for You to check out</p>
        <input type="text" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} className=' mt-3 text-sm bg-slate-100 rounded w-full p-2'/>
        {/* <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} className=' mt-4 text-sm bg-slate-100 rounded w-full p-2'></input> */}
        <div className=' justify-between'>
        <div className=''>
        
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='mt-4 text-sm bg-slate-100 rounded w-full p-2'
        />

      </div>

      <div className=''>

      {/* Back to Home */}
      <button className=' mt-4 bg-orange-600 hover:bg-orange-700 text-white text-xs py-2 float-left px-12 rounded-full'><Link to='/'> Back</Link></button>


      {/* Submit */}
      <Link to='/' onClick={() => setAccountHolder({ email, password })
}><button className=' bg-orange-600 hover:bg-orange-700 px-11  float-right py-2 text-xs text-center text-white rounded-full mt-4'>Login</button></Link>
      </div>
    
    
       {/* Show password not in use until plassed in the right position */}    
     {/* <button type='button' 
     className=' hover:bg-orange-600 border border-orange-600 px-12 float-right py-2 text-xs text-center text-orange-600 hover:text-white focus:outline-none rounded-full mt-4'
     onClick={togglePasswordVisibility}>{showPassword ? 'Hide' : 'Show'}</button> */}
     
     </div>

    </form>

    {/* <div className=''>
    <Link to='/Sign-up'><button className=' hover:bg-orange-600 border border-orange-600 px-12 py-2 my-6 text-xs text-center text-orange-600 hover:text-white focus:outline-none rounded-full mx-auto'>Sign Up</button></Link>
        
        </div> */}
    </div>
    </div>



{/* <div> */}
    <div className='hidden md:grid bg-gradient-to-tr from-orange-600 to-yellow-600 to-90%'>
      <div className='my-auto mx-auto text-white'>
      <p className=' text-center font-bold mb-4 text-4xl'>Welcome Back!</p>
      <p className=' text-center text-xs mb-7'>To maintain a connection with us, please login using <br/> your personal information.</p>
      <div className='flex justify-center'>
      <Link to='/Sign-up'><button className='border border-white hover:bg-white px-12 py-2 text-xs text-center hover:text-orange-700  text-white rounded-full'>Sign Up </button></Link>
      {/* </div> */}
      </div>
      </div>
    </div>

    </div>
  )
}

export default LoginComp