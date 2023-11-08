import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function VendorsFormComp({title, linkLabel, linkToPrevPage, linkDirection, verifyVendorAccount}) 
    {


        const [spot, setSpot] = useState({name:'', category:'', description:'', registerationNumber: '', openningTime:'', closingTime:'', openningDays:[], address:'', phoneNumber:'', email:'', instagramHandle:'', twitterHandle:'', facebookHandle:'', website:'', features:[], Image1:'', Image2:'', Image3:'', Image4:'', video: ''});

        const handleSubmit = (e) => {
          e.preventDefault();
      
          // Push the received data to the server
          const fetchData = async () => {
            try {
              const response = await axios.post('API URL', { spot });
              // Handle the response here (e.g., update state)
              console.log(spot)
            } catch (error) {
              // Handle the error here (e.g., show an error message)
              console.error('Error fetching data:', error.message);
            }
          };
          
          fetchData();
      
          // Pass the button as a prop to the new component
          linkDirection();
          console.log(spot)
        };

      console.log(verifyVendorAccount)

        const handleItemChange = (event) => {
       const { value, checked } = event.target;

          setSpot((prevSpot) => {
            if (checked) {
              return {
                ...prevSpot,
                openningDays: [...prevSpot.openningDays, value]
              };
            } else {
              return {
                ...prevSpot,
                openningDays: prevSpot.openningDays.filter((item) => item !== value)
              };
            }
          });
        };


        // Handling Image Uploads
        const handleImage1Change = (event) => {
          const selectedImage = event.target.files[0]; // Get the selected file
          if (selectedImage) {
            // Check the file size (in bytes)
            const maxSizeInBytes = 3 * 1024 * 1024; // 3 MB in bytes
            if (selectedImage.size > maxSizeInBytes) {
              alert("Selected image is too large. Please select an image that is 3 MB or smaller.");
              event.target.value = ""; // Clear the input field
            } else {
              setSpot({ ...spot, Image1: selectedImage });
            }
          }
        };
        
        
        const handleImage2Change = (event) => {
          const selectedImage = event.target.files[0]; // Get the selected file
          if (selectedImage) {
            // Check the file size (in bytes)
            const maxSizeInBytes = 3 * 1024 * 1024; // 3 MB in bytes
            if (selectedImage.size > maxSizeInBytes) {
              alert("Selected image is too large. Please select an image that is 3 MB or smaller.");
              event.target.value = ""; // Clear the input field
            } else {
              setSpot({ ...spot, Image2: selectedImage });
            }
          }
        };
        
        
        
        const handleImage3Change = (event) => {
          const selectedImage = event.target.files[0]; // Get the selected file
          if (selectedImage) {
            // Check the file size (in bytes)
            const maxSizeInBytes = 3 * 1024 * 1024; // 3 MB in bytes
            if (selectedImage.size > maxSizeInBytes) {
              alert("Selected image is too large. Please select an image that is 3 MB or smaller.");
              event.target.value = ""; // Clear the input field
            } else {
              setSpot({ ...spot, Image3: selectedImage });
            }
          }
        };
        
         
        const handleImage4Change = (event) => {
          const selectedImage = event.target.files[0]; // Get the selected file
          if (selectedImage) {
            // Check the file size (in bytes)
            const maxSizeInBytes = 3 * 1024 * 1024; // 3 MB in bytes
            if (selectedImage.size > maxSizeInBytes) {
              alert("Selected image is too large. Please select an image that is 3 MB or smaller.");
              event.target.value = ""; // Clear the input field
            } else {
              setSpot({ ...spot, Image4: selectedImage });
            }
          }
        };
        


      //  const handleVideoChange = (event) => {
      //   const file = event.target.files[0];
      //   setSpot({...spot, video: file });
      //   }

      const handleVideoChange = (event) => {
        const selectedVideo = event.target.files[0]; // Get the selected file
        if (selectedVideo) {
          // Check the file size (in bytes)
          const maxSizeInBytes = 25 * 1024 * 1024; // 25 MB in bytes
          if (selectedVideo.size > maxSizeInBytes) {
            alert("Selected video is too large. Please select an video that is 25 MB or smaller.");
            event.target.value = ""; // Clear the input field
          } else {
            setSpot({...spot, video: selectedVideo });
          }
        }
      };
      



  // Array of Days to loop through
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',  'Sunday']

  // Array of features to loop through
  const spotType = ['Pick your Category', 'Art Gallery', 'Bar', 'Pools', 'Beach', 'Club', 'Game Center',  'Mountain Resort', 'Hotel', 'Lounge', 'Museum', 'Park', 'Resort', 'Resturant', 'SPA & Massage', 'Water Fall']

  return (
    <div>
        
        {/* The linkDirection works as props function for the re-useable component  */}
       <form onSubmit={handleSubmit} className='w-full mx-auto md:w-3/5 bg-white my-10 rounded-lg'>
       <p className=' text-center text-2xl text-orange-600 py-1'>{title}</p>
       <p className='w-4/5 md:w-full text-center text-xs italic text-slate-500 pb-3 mx-auto'>Fill in the required information about your Vendor below</p>


       
       <div className='grid grid-cols-1 md:grid-cols-2'>


{/* Stage one */}
{/* First Line */}
<div>
  <input type="text" placeholder='Name of Vendor' value={spot.name} onChange={e => setSpot({ ...spot, name: e.target.value })} className=' grid w-3/5 md:w-full mt-3 text-sm border-b border-slate-200 mx-auto md:grid col-span-1  p-2 md:mr-3'/>
</div>

{/* Second Line */}
<div>
  <select name="category" id="" onChange={e => setSpot({ ...spot, category: e.target.value })} className=' mt-3 text-sm border-b border-slate-200 w-3/5 md:w-full grid mx-auto md:grid col-span-1  p-2  md:ml-3' >
    {
      spotType.map((spot, index) => (
        <option key={index} value={spot}>{spot}</option>
      ))
    }


  </select>
</div>
</div>



{/* Stage two */}
<div >

{/* Third Line */}
<div>
  <div className='grid mx-auto w-3/4 md:w-full md:grid-cols-1'>
    <textarea name="" id="" value={spot.description} onChange={e => setSpot({ ...spot, description: e.target.value })} cols="30" placeholder='Write a short description of your Vendor to help customers know what to find in your place' className='mt-3 text-sm border border-slate-200 md:col-span-2 p-2' rows="10"></textarea>
  </div>
</div>
</div>

{/* Stage three */}
{/* Info: include an external view to help customers recognize it when they see it */}
  <p className=' mt-8 text-sm font-medium mb-3 text-center md:text-left'>Upload Pictures of your Vendor</p>
<div className='grid grid-cols-1 md:grid-cols-2 mt-3 md:w-full w-3/4 mx-auto mb-3'>

{/* Fourth Line */}

      {/* left side */}
      <div className=' text-sm text-slate-400'>
        <input
          type="file"
          accept="image/*"
          onChange={handleImage1Change}
        />
        {/* Display the selected image name, if needed */}
        {spot.Image1 && <p>Selected image: {spot.Image1.name}</p>}
        
        <input
          type="file"
          accept="image/*"
          onChange={handleImage2Change}
          className='mt-3'
        />
        {/* Display the selected image name, if needed */}
        {spot.Image2 && <p>Selected image: {spot.Image2.name}</p>}
      </div>

      {/* right side */}
      <div className=' text-sm text-slate-400'>
        <input
          type="file"
          accept="image/*"
          onChange={handleImage3Change}
          className='mt-3 md:mt-0'
        />
        {/* Display the selected image name, if needed */}
        {spot.Image3 && <p>Selected image: {spot.Image3.name}</p>}
        
        <input
          type="file"
          accept="image/*"
          onChange={handleImage4Change}
          className='mt-3'
        />
        {/* Display the selected image name, if needed */}
        {spot.Image4 && <p>Selected image: {spot.Image4.name}</p>}
      </div>
    
</div>


{/* Authentication */}
{/* Stage four */}

<div className='grid md:w-full w-4/5 mx-auto grid-cols-1 md:grid-cols-2'>
  <div className='md:col-span-2 mt-3 md:mt-5'>
    <label className="font-semibold text-center md:text-left ">For Authentication of your Vendor:</label>

  </div>
</div>

<div className='grid md:w-full w-4/5 mx-auto grid-cols-1 md:grid-cols-2 md:mb-5'>

{/* left Side */}
<div>
  <div className="space-y-2 mt-2 md:mt-3 w-3/5 text-sm grid col-span-1">
    <label className="font-semibold">Upload a 30 seconds Vendor Video, with a file size under 25MB.</label>
    
    <div className=''>
    <input
          type="file"
          accept="video/*"
          onChange={handleVideoChange}
          className='md:mt-3 mt-2 mb-3'
        />
        {/* Display the selected image name, if needed */}
        {spot.video && <p>Selected image: {spot.video.name}</p>}
    </div>
  </div>
</div>



{/* Sixth Line */}
<div>
  <div className='mt-3 block md:w-4/5 text-sm w-full md:grid  '>
  <label className="font-semibold">Enter your Vendor's Registeration Number</label>
    <input type="text" placeholder="CAC, SON, Any Registeration" value={spot.registerationNumber} onChange={e => setSpot({ ...spot, registerationNumber: e.target.value })} className='md:mt-3 mt-1 mb-5 md:mb-0 text-sm border-b border-slate-200 w-full p-2'/>
  </div>
</div>

</div>


{/* Stage four */}
<div className='grid md:w-full w-4/5 mx-auto grid-cols-1 md:grid-cols-2'>

{/* Fifth Line */}
<div>
  <div className="space-y-2 mt-3 w-3/5 text-sm grid col-span-1">
    <label className="font-semibold">Select Days Open:</label>
    <div className=''>
      {
        days.map((day, index) => (
          <label key={index} className="flex  space-x-2">
            <input 
              type="checkbox"
              value={`${day}`}
              checked={spot.openningDays.includes(`${day}`)}
              onChange={handleItemChange}
              className="form-checkbox h-4 text-indigo-600"
            />
            <span>{day}</span>
          </label>
        ))
      }
    </div>
  </div>
</div>



{/* Sixth Line */}
<div>
  <div className='mt-3 block md:w-4/5 w-full md:grid  '>
    <input type="text" placeholder='Address' value={spot.address} onChange={e => setSpot({ ...spot, address: e.target.value })} className='mt-3 text-sm border-b border-slate-200 w-full p-2'/>
    <input type="tel" placeholder='Phone Number' value={spot.phoneNumber} onChange={e => setSpot({ ...spot, phoneNumber: e.target.value })} className='mt-3 text-sm border-b border-slate-200 w-full p-2'/>
    <input type="email" placeholder='Email Address' value={spot.email} onChange={e => setSpot({ ...spot, email: e.target.value })} className='mt-3 text-sm border-b border-slate-200 w-full   p-2'/>
  </div>
</div>

</div>




{/* Stage five */}

<div >
{/* Seventh Line */}

{/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

<div>
  <div className="md:grid block grid-cols-2 mt-3">
    <input type="text" placeholder='Opening Time' value={spot.openningTime} onChange={e => setSpot({ ...spot, openningTime: e.target.value })} className='mt-3 grid w-4/5 text-sm border-b border-slate-200  p-2 mx-auto  md:ml-3'/>
    <input type="text" placeholder='Closing Time' value={spot.closingTime} onChange={e => setSpot({ ...spot, closingTime: e.target.value })} className='mt-3 grid w-4/5 text-sm border-b border-slate-200   p-2 mx-auto  md:ml-3'/>
    {/* <input type="text" placeholder='Website' value={spot.website} onChange={e => setSpot({ ...spot, website: e.target.value })} className='mt-3 grid  w-4/5 text-sm border-b border-slate-200   p-2 mx-auto  md:ml-3'/> */}
  </div>
</div>

{/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

<div>
  <div className="md:grid block grid-cols-3 mt-3">
    <input type="text" placeholder='Instagram' value={spot.instagramHandle} onChange={e => setSpot({ ...spot, instagramHandle: e.target.value })} className='mt-3 grid w-4/5 text-sm border-b border-slate-200  p-2 mx-auto  md:ml-3'/>
    <input type="tel" placeholder='Facebook' value={spot.facebookHandle} onChange={e => setSpot({ ...spot, facebookHandle: e.target.value })} className='mt-3 grid w-4/5 text-sm border-b border-slate-200   p-2 mx-auto  md:ml-3'/>
    <input type="text" placeholder='Website' value={spot.website} onChange={e => setSpot({ ...spot, website: e.target.value })} className='mt-3 grid  w-4/5 text-sm border-b border-slate-200   p-2 mx-auto  md:ml-3'/>
  </div>
</div>



{/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}




{/* Eighth Line */}
<div>
<p className=' mt-8 text-sm font-medium mb-3 text-center md:text-left '>List out the Features in your Vendor</p>
  <div className="grid grid-cols-1 mt-3">
    <input type="text" placeholder='List the Features this way [Games, Wine]' className='text-sm border-b mx-auto w-4/5 md:w-full md:mx-0 border-slate-200 p-2'/>
  </div>
</div>


        </div>


           
      
      <div className=' w-4/5 md:w-full mx-auto md:mx-0'>
        {/* Next Button */}
     <button className=' bg-orange-600 hover:bg-orange-700 px-12 float-right py-2 text-xs text-center text-white rounded-full mt-4'>{linkLabel}</button>

          {/* Back to Home */}
          <Link to={`${linkToPrevPage}`}><button className='mt-4 bg-orange-600 hover:bg-orange-700 text-white text-xs py-2 float-left px-12 rounded-full'>Back</button></Link>
      </div>
     
    </form>
    </div>
  )
}

export default VendorsFormComp