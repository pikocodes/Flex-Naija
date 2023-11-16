import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSpotContext } from './SpotContext';
import { useAccountContext } from './AccountHolder';

function Features(loginAccount) {

  

const catergories = [
  {
    image: 'https://images.pexels.com/photos/6173859/pexels-photo-6173859.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Karaoke Nights',
    spots: 'Karaoke Nights',
  },
  
  {
    image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Comedy Shows',
    spots: 'Comedy Shows',
  },
  {
    image: 'https://images.pexels.com/photos/7148674/pexels-photo-7148674.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Bonfire Evenings',
    spots: 'Bonfire Evenings',
  },
  {
    image: 'https://images.pexels.com/photos/12336037/pexels-photo-12336037.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Mocktails',
    spots: 'Mocktails',
  },
  {
    image: 'https://images.pexels.com/photos/4088015/pexels-photo-4088015.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Live Bands',
    spots: 'Live Bands',
  },
  {
    image: 'https://images.pexels.com/photos/5860693/pexels-photo-5860693.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Suites',
    spots: 'Suites',
  },
  {
    image: 'https://images.pexels.com/photos/7222179/pexels-photo-7222179.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Swimming Pool',
    spots: 'Swimming Pool',
  },
  {
    image: 'https://images.pexels.com/photos/1857732/pexels-photo-1857732.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'BBQ Picnics',
    spots: 'BBQ Picnics',
  },
  {
    image: 'https://images.pexels.com/photos/5240677/pexels-photo-5240677.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Spa Treatments',
    spots: 'Spa Treatments',
  },
]

const { setSelectedSpot } = useSpotContext();

const { setAccountHolder } = useAccountContext();

const [stateCatergories, setCatergories] = useState([]);

// useEffect (() => {
//     axios.get('URL LINK')
//     .then(resp => {
//       setCatergories(resp.data)
//     })
//     .catch(err => {
//       console.error(err)
//     })
// }, [stateCatergories])







  return (
    <div className=' bg-slate-200 m-0 pb-14 sm:pb-14  pt-14 sm:pt-14'>
       <h2 className=' text-xl sm:text-2xl text-center  md:text-3xl font-semibold'>Features</h2>
        <p className='mx-6 mt-1 text-slate-400 text-center text-xs sm:text-sm font-light mb-7 sm:mb-14'>Explore Fascinating Categories and Expand Your Horizons! </p>

    <div className='flex overflow-x-scroll text-lg font-medium scrollbar mt-3 mx-1 relative'>
   
{
  catergories.map((catergory, index) => (
    <div key={index} className='w-auto sm:w-3/12 mx-3 box-border'>
      <Link to={`/FeaturesPage`} onClick={() => {setSelectedSpot(catergory.spots), setAccountHolder(loginAccount)}}>
    <div> 
      <img src={catergory.image} alt={catergory.alt} className='hidden sm:block sm:w-full sm:h-40 sm:object-cover rounded-t-md w-auto mb-1' />
    </div>
    
      

  <div className=' py-16 sm:py-14 px-16 sm:px-24 items-center text-center bg-white mb-2 rounded sm:rounded-b-md sm:rounded-none text-slate-900 text-sm sm:text-base'>
    {catergory.spots}
    </div>
    </Link>
</div>
  ))
}

    </div>
    </div>
  )
}

export default Features