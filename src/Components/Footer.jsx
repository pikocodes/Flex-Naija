import React from 'react'
import { Link } from 'react-router-dom'
import { useSpotContext } from './SpotContext';

function Footer() {

  const { setSelectedSpot } = useSpotContext();

  const spotsPlace = [
    {name: 'Restaurant', link: 'Restuarant', icon:'', image: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800'},
      {name: 'Hotel', link: 'Hotel', icon:'', image: 'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=800'},
      {name: 'Spa', link: 'Spa', icon:'', image: 'https://images.pexels.com/photos/5240677/pexels-photo-5240677.jpeg?auto=compress&cs=tinysrgb&w=800'},
      {name: 'Beach', link: 'Beach', icon:'', image: 'https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg?auto=compress&cs=tinysrgb&w=800'},
      {name: 'Lounge', link: 'Lounge', icon:'', image: 'https://images.pexels.com/photos/6174144/pexels-photo-6174144.jpeg?auto=compress&cs=tinysrgb&w=800'}
]


  return (
    <div className='pt-12 text-sm text-center bg-gray-900 text-white'>
    <div className='block sm:flex'>
      <div className='text-center sm:text-left mx-6'>
        <h1 className=' text-base sm:text-lg font-medium'>Pick your Spots</h1>
        <ul className=' text-sm sm:text-base font-light text-slate-400'>
        {spotsPlace.map((place, index) => (
          <li><Link to={`/CategoryPage`} key={index} onClick={() => setSelectedSpot(place.name)}>{place.name}</Link></li>
        ))} 
        </ul>
      </div>
      <div className='text-center sm:text-left sm:ml-28 mt-8 sm:mt-0'>
        <h1 className=' text-base sm:text-lg font-medium'>Contact</h1>
        <ul className=' text-sm sm:text-base font-light text-slate-400'>
          <li>+234 704 905 3369</li>
          <li>davidsamuel.isokpehi@gmail.com</li>
        </ul>
      </div>
    </div>

  {/* Demarcating line */}
  <div className="border-t my-6 mx-auto border-solid w-4/5 border-gray-700"></div>


    {/* Copyrights */}
    <div className='text-center pt-1 pb-4'>
        <h1 className=' text-xs sm:text-sm text-gray-700 font-regular justify-end'> Copyrights 2023, Flex Naija</h1>
        
      </div>
    </div>
  )
}

export default Footer