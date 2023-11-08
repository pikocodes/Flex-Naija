import axios from 'axios';
import React, {useRef, useState, useEffect} from 'react'

function PageHero({spot, riderText, loginAccount}) {


    const inputRef = useRef();
      const [search, setSearch] = useState('');
  
      const handleSearch = () => {
          search === '' ? inputRef.current.focus() : alert(search);
  
      }
  
      const [CatergoryImage, setCatergoryImage] = useState('')
      const [CatergoryTitle, setCatergoryTitle] = useState('')

      console.log(loginAccount);
     

      // useEffect (() => {
      //   axios.get('Internal URL')
      //   .then((resp) => {
      //     catergory === resp.data.catergory ? setCatergoryImage(resp.catergory_image) && setCatergoryTitle(resp.catergory_title) : null;
      //   })
      //   .catch((err) => {
      //     console.error(err)
      //   })
      // }, [])

  return (
    <div className="hero -z-30 sm:-z-50">
    {/* Hero Text */}
    <div className="absolute top-0 left-0 w-full h-full items-center justify-center flex sm:flex search-bar z-50">

     <div >
       <p className=' text-center text-3xl sm:text-5xl mb-1 block sm:block text-white font-medium sm:font-bold
       '>{spot}</p> {/* Switch 'Lounges' to 'CatergoryTitle' */}

       <p className='text-center text-sm sm:text-xl mb-8 block sm:block text-slate-300 font-light sm:font-normal italic'>{riderText}</p>
     
       

         </div>
   </div>
   
   <div className="overlay"></div>
   {/* Image Carousel */}
   <div className='container'>
    <img src="../../assets/images/hero-carousel/hotels.jpg" alt="Hero" className='image '/>   {/* Switch 'image' to 'CatergoryImage' */}
   </div>

 </div>
  )
}

export default PageHero