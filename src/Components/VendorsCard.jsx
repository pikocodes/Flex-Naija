import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSpotContext } from './SpotContext';
import { useAccountContext } from './AccountHolder';
import "./Modal.css";

function VendorsCard({src, alt, title, address, feature, loginAccount}) {

  const { setSelectedSpot } = useSpotContext();
  const { setAccountHolder } = useAccountContext();
  
  const [visibility, setVisibility] = useState(true);
  const [hide, setHide] = useState(true);
  const [hideVendor, setHideVendor] = useState(false);
  
//   const [myVendor, setMyVendor] = useState({firstName: '', lastName:'', email:'', password:'', 
//   vendors:[{name:'', category:'', description:'', openningTime:'', closingTime:'', openningDays:[], address:'', phoneNumber:'', email:'', instagramHandle:'', twitterHandle:'', facebookHandle:'', website:'', features:[], Image1:'', Image2:'', Image3:'', Image4:''}]
// });

//   const myVendorsDemo = 
// {
//       firstName: 'David', 
//     lastName:'Samuel', 
//     email:'blabla@gmail.com', password:'hhhh', 
//   vendors:[
//     {name:'Vistro Lounge', category:'Resort', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sit assumenda cumque delectus illo quibusdam veniam eligendi blanditiis. Nobis ab id, hic vero fuga quos', openningTime:'', closingTime:'', openningDays:[], address:'Gwaripa, Abuja', phoneNumber:'', email:'', instagramHandle:'', twitterHandle:'', facebookHandle:'', website:'', features:[], Image1:'../../assets/images/chicken.jpg', Image2:'', Image3:'', Image4:''},
  
//   {name:'Vistro Lounge', category:'Resort', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sit assumenda cumque delectus illo quibusdam veniam eligendi blanditiis. Nobis ab id, hic vero fuga quos', openningTime:'', closingTime:'', openningDays:[], address:'Gwaripa, Abuja', phoneNumber:'', email:'', instagramHandle:'', twitterHandle:'', facebookHandle:'', website:'', features:[], Image1:'../../assets/images/chicken.jpg', Image2:'', Image3:'', Image4:''},

//   {name:'Vistro Lounge', category:'Resort', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sit assumenda cumque delectus illo quibusdam veniam eligendi blanditiis. Nobis ab id, hic vero fuga quos', openningTime:'', closingTime:'', openningDays:[], address:'Gwaripa, Abuja', phoneNumber:'', email:'', instagramHandle:'', twitterHandle:'', facebookHandle:'', website:'', features:[], Image1:'../../assets/images/chicken.jpg', Image2:'', Image3:'', Image4:''},

//   {name:'Vistro Lounge', category:'Resort', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sit assumenda cumque delectus illo quibusdam veniam eligendi blanditiis. Nobis ab id, hic vero fuga quos', openningTime:'', closingTime:'', openningDays:[], address:'Gwaripa, Abuja', phoneNumber:'', email:'', instagramHandle:'', twitterHandle:'', facebookHandle:'', website:'', features:[], Image1:'../../assets/images/chicken.jpg', Image2:'', Image3:'', Image4:''},

//   {name:'Vistro Lounge', category:'Resort', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sit assumenda cumque delectus illo quibusdam veniam eligendi blanditiis. Nobis ab id, hic vero fuga quos', openningTime:'', closingTime:'', openningDays:[], address:'Gwaripa, Abuja', phoneNumber:'', email:'', instagramHandle:'', twitterHandle:'', facebookHandle:'', website:'', features:[], Image1:'../../assets/images/chicken.jpg', Image2:'', Image3:'', Image4:''},

// ]
// }
    

    // Receives data from the list of vendors by looping through comparing the individual's name and password (from the login after checking the active account and comparing the name and password) then it returns the object of the individual's information



    // Control the Edit Modal
    const [modal, setModal] = useState(false);
      
    const toggleModal = () => {
      setModal(!modal);
    };


    const toggleVisibility = () => {
      setVisibility(!visibility);
      setHide(!hide);
      setHideVendor(!hideVendor);
      !hide ? alert('Your Vendor is now visible to our customers') : alert('Your Vendor is now hidden from our customers');
      
      // Remove the Vendor from the Database that makes it up for display
    }


    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

    console.log(loginAccount)


  return (
    <div className="md:w-5/6 mx-auto relative rounded-lg overflow-hidden">
      {/* Card Image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-56 object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Card Content */}
      {/* Name and Address */}
      <div className="absolute bottom-12 left-0 p-4">
      <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-white text-sm">{address}</p>
      </div>

      {/* Feature */}
      {/* <div className="absolute top-0 left-0 py-1 px-3 bg-orange-600  rounded-sm m-3">
        <h3 className="text-white text-xs font-medium">{feature}</h3>
      </div> */}
  
  
  
      {/* View Vendor */}
      <div className="absolute bottom-0 left-0 py-1 px-3  flex mb-3">
        <Link to={`/Spots`} onClick={() => {setSelectedSpot(title), setAccountHolder(loginAccount)}}><h3 className="text-slate-100 text-xs font-medium mx-1 px-3 py-1 rounded-sm bg-slate-500">View</h3></Link>

        {/* Maybe a replica of the vendors details and activities form with this time the update method instead of add, to update current object */}
        {/* Edit Vendor */}
        <Link to={`/EditVendorData1Page`} onClick={() => {setSelectedSpot(title), setAccountHolder(loginAccount)}}><h3 className="text-slate-100 text-xs font-medium mx-1 px-3 py-1 rounded-sm bg-slate-500">Edit</h3></Link> 
       
       
        {/* HIDE BUTTON */}
        <button onClick={toggleVisibility}><h3 className="text-slate-100 text-xs font-medium mx-1 px-3 py-1 rounded-sm bg-slate-500 float-right">
          {
        hide ? 'Hide Vendor' : 'Show Vendor'
        }</h3></button> 
      </div>
      
      
      {/* Cancel */}
      {/* Remove the object from the arrays of the individual vendor list and general array of all vendors */}
      <div className="absolute top-0 right-0 py-1 px-3 bg-red-600  rounded-sm m-3">
      <button onClick={toggleModal}><h3 className="text-white text-xs font-medium">Delete</h3></button>
      </div>
      
      
      
      {/* Eye for Hide */}
      {/* Shows if the Vendor is hidden or visible */}
      <div className="absolute top-0 left-0 py-1 px-3  rounded-sm m-3">
      <div>
        <h3 className="text-white text-xs font-medium">
        {
          visibility ? <img src='../../assets/icons/eye.png' className=' w-6'/> :
          <img src='../../assets/icons/close-eye.png' className=' w-6'/>
        }
        </h3>
        </div>
      </div>

      {/* Modal popup */}
      {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay-delete"></div>
            <div className="modal-content rounded">
              {/* <h2 className=' text-center text-lg font-semibold'>Hello Modal</h2> */}
              <p className=' mx-1 mb-5 mt-7 text-center'>
                Proceed if You want to delete your Vendor?
              </p>
              
              <button className="close-modal p-2 opacity-60" onClick={toggleModal}>
                <img src="../assets/icons/close.png" className='h-3' alt="close" />
              </button>
              
              <div className='flex'>
              <button className='mx-auto bg-red-600 rounded text-white text-xs font-medium px-4 py-2 mt-2'><Link to='/'>DELETE</Link></button>
              </div>
            </div>
          </div>
        )}

    </div>
  )
}

export default VendorsCard