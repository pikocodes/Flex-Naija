import React, {useState, useEffect} from 'react'
// import axios from 'axios'

function ContactInfo() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


   const handleSubmit = (e) => {
        alert(`name: ${name}, email: ${email}, message: ${message}`)
   }

//    forwarding the messsages to the Recieving API channel
//    useEffect(() => {
//     axios.post('URL', {name, email, message})
//    }, [])

  return (
    <div className=' bg-slate-200 py-6'>

        {/* Info Desk */}
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 content-center text-center px-7 py-24'>
        <div className="  bg-white py-8 px-8  rounded-lg text-slate-500">
             <img src="../../assets/icons/mail.png" alt="Email icon" className=' w-12 sm:w-14 mx-auto mb-6' />
            <h1 className=' text-xl font-medium text-slate-700'>Email</h1>
            <p>Infodesk@flexnaija.com</p>
        </div>
        <div className=" bg-white py-8 px-8  rounded-lg text-slate-500">
            <img src="../../assets/icons/telephone-1.png" alt="Phone icon"  className=' w-12 sm:w-14 mx-auto mb-6'/>
            <h1 className=' text-xl font-medium text-slate-700'>Phone Number</h1>
            <p>+234 704 905 3369</p>
        </div>
        <div className=" bg-white py-8 px-8  rounded-lg text-slate-500">
            <img src="../../assets/icons/location.png" alt="Address icon" className=' w-12 sm:w-14 mx-auto mb-6'/>
            <h1 className=' text-xl font-medium text-slate-700'>Address</h1>
            <p>Abuja, Nigeria</p>
        </div>
    </div>

    {/* Form to fill */}
    <form onSubmit={handleSubmit} className='px-10 py-8 bg-white mx-7 my-5 rounded-lg'>
        <label className='m-4 text-2xl font-normal'>How can we help you</label> <br />
        <input type="text" placeholder='Name' value={name} onChange={e => setName(e.target.value)} className=' mt-3 bg-slate-200 rounded w-full p-2'/>
        <input type="text" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} className=' mt-3 bg-slate-200 rounded w-full p-2'/>
     <textarea name="" id="" cols="30" rows="10" value={message} onChange={e => setMessage(e.target.value)} className=' bg-slate-200 mt-3 w-full rounded p-2' placeholder='Message' ></textarea>
     <button className=' bg-orange-500 w-full py-3 text-center text-white rounded mt-2'>Submit</button>
        

    </form>
    </div>
  )
}

export default ContactInfo