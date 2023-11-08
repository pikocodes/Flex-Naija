import React from 'react'
import { Link } from 'react-router-dom'
import { useSpotContext } from './SpotContext';
import { useAccountContext } from './AccountHolder';

function AddNewVendorCard({src, alt, text, icon, loginAccount}) {

  const { setSelectedSpot } = useSpotContext();
  const { setAccountHolder } = useAccountContext();

  //Create a state that carries account datails for each account

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
      <div className="absolute inset-0 bg-orange-700 opacity-90"></div>


<Link to={`/VendorDetailsPage`} onClick={() => {setSelectedSpot('Vendor Account Details'), setAccountHolder(loginAccount)}}>
    <div className="absolute top-7 left-5 translate-x-2/4 translate-y-2/4">
      <div className=' opacity-100 hover:opacity-80'>
        <img src={icon} alt={alt} className=' w-16 mx-auto my-auto'/>
        <h3 className="text-white  text-center text-xl font-normal">{text}</h3>
      </div>
    </div>
  </Link>
  </div>


  )
}

export default AddNewVendorCard