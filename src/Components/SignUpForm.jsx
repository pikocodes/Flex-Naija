import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function SignUpForm({title, linkToPrevPage, linkLabel, linkDirection}) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };





  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Assuming you have the following variables defined: firstName, lastName, email, password
    const userData = { firstName, lastName, email, password };
  
    // Push the received data to the server
    const fetchData = async () => {
      try {
        const response = await axios.post('API URL', userData);
        // Handle the response here (e.g., update state)
        console.log('Data successfully sent:', response.data);
      } catch (error) {
        // Handle the error here (e.g., show an error message)
        console.error('Error fetching data:', error.message);
      }
    };
  
    fetchData();
  
    // Pass the button as a prop to the new component
    linkDirection();
  };
  

 

  return (
    <div>

        {/* The linkDirection works as props function for the re-useable component  */}
       <form onSubmit={handleSubmit} className='p- bg-white  my-10 rounded-lg'>
       <p className='text-center text-2xl text-orange-600 py-1'>{title}</p>
       <p className='text-center text-xs italic text-slate-500 pb-3'>Let's get to know You</p>
        <input type="text" placeholder='First Name' value={firstName} onChange={e => setFirstName(e.target.value)} className=' mt-3 text-sm border-b border-slate-200  w-full p-2'/>
        <input type="text" placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)} className=' mt-3 text-sm border-b border-slate-200  w-full p-2'/>
        <input type="text" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} className=' mt-3 text-sm border-b border-slate-200  w-full p-2'/>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='mt-4 text-sm border-b border-slate-200  w-full p-2'
        />

        <input
          type={'password'}
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className='mt-4 text-sm border-b border-slate-200  w-full p-2'
        />
      
      <div>
       {/* Next button */}
     <button className=' bg-orange-600 hover:bg-orange-700 px-12  float-right py-2 text-xs text-center text-white rounded-full mt-4'>{linkLabel}</button>


        {/* Back to Home */}
        <Link to='/'><button className='mt-4 bg-orange-600 hover:bg-orange-700 text-white text-xs py-2 float-left px-12 rounded-full'>Back</button></Link>
     
      </div>
   
    </form>
    </div>
  )
}

export default SignUpForm