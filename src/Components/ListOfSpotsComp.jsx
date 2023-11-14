import React, { useState, useEffect, createContext, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useSpotContext } from './SpotContext';
import SpotCards from './SpotCards';

function CatergoricSpotsComp() {

    const { setSelectedSpot } = useSpotContext();
 

    const spotsPlace = [
      {name: 'Restaurant', link: 'Restuarant', icon:'', image: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800'},
        {name: 'Art Galleries', link: 'Art-Galleries', image: 'https://images.pexels.com/photos/2372978/pexels-photo-2372978.jpeg?auto=compress&cs=tinysrgb&w=800'},
        {name: 'Hotel', link: 'Hotel', icon:'', image: 'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=800'},
        {name: 'Pools', link: 'Pools', icon:'', image: 'https://images.pexels.com/photos/1605480/pexels-photo-1605480.jpeg?auto=compress&cs=tinysrgb&w=800'},
        {name: 'Beach', link: 'Beach', icon:'', image: 'https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg?auto=compress&cs=tinysrgb&w=800'},
        {name: 'Lounge', link: 'Lounge', icon:'', image: 'https://images.pexels.com/photos/6174144/pexels-photo-6174144.jpeg?auto=compress&cs=tinysrgb&w=800'},
        {name: 'Club', link: 'Club', icon:'', image: 'https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg?auto=compress&cs=tinysrgb&w=800'},
        {name: 'Game Center', link: 'Game-Center', icon:'', image: 'https://images.pexels.com/photos/5743695/pexels-photo-5743695.jpeg?auto=compress&cs=tinysrgb&w=800'},
        {name: 'Hotel', link: 'Hotel', icon:'', image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800'},
        {name: 'Hills', link: 'Hills', icon:'', image: 'https://images.pexels.com/photos/705075/pexels-photo-705075.jpeg?auto=compress&cs=tinysrgb&w=800'},
        {name: 'Mountain Resort', link: 'Mountain-Resort', icon:'', image: 'https://images.pexels.com/photos/18971223/pexels-photo-18971223/free-photo-of-hotel-with-a-swimming-pool-with-the-view-of-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=800'},
        {name: 'Museum', link: 'Museum', icon:'', image: 'https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&w=800'},
        {name: 'Resort', link: 'Resort', icon:'', image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800'},
        {name: 'Park', link: 'Park', icon:'', image: 'https://images.pexels.com/photos/18888496/pexels-photo-18888496/free-photo-of-man-painting-portrait-of-woman-in-park.jpeg?auto=compress&cs=tinysrgb&w=800'},
        {name: 'Spa', link: 'Spa-Massage', icon:'', image: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800'},
        {name: 'Water Fall', link: 'Water-fall', icon:'', image: 'https://images.pexels.com/photos/949194/pexels-photo-949194.jpeg?auto=compress&cs=tinysrgb&w=800'},

]
   

  return (
    <div className=' mt-10'>
        <h2 className=' text-2xl text-center mx-6 mt-10 md:text-3xl font-semibold'> All the Spots</h2>
        

       {/* Alternative cards */}
       <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Add multiple Card components as needed */}

        {spotsPlace.map((place, index) => (
        <Link to={`/CategoryPage`} key={index} onClick={() => setSelectedSpot(place.name)}><SpotCards src={place.image} alt={place.name} title={place.name}/></Link>
        ))} 
      </div>
    </div>

        
    </div>
  )
}

export default CatergoricSpotsComp