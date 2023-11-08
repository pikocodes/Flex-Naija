import React, { useState } from 'react'
import { useSpotContext } from './SpotContext';
import { useAccountContext } from './AccountHolder';
import { Link } from 'react-router-dom';

function Cities({loginAccount}) {

  // const cities = ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  // "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe",
  // "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara",
  // "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
  // "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"]

  const cities = [
    {
      image: 'https://images.pexels.com/photos/17290985/pexels-photo-17290985/free-photo-of-crowded-street-in-nigeria.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Abia',
      state: 'Abia',
    },
    {
      image: 'https://images.pexels.com/photos/3172830/pexels-photo-3172830.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Adamawa',
      state: 'Adamawa',
    },
    {
      image: 'https://images.pexels.com/photos/5273200/pexels-photo-5273200.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Akwa Ibom',
      state: 'Akwa Ibom',
    },
    {
      image: 'https://images.pexels.com/photos/16237807/pexels-photo-16237807/free-photo-of-aerial-view-of-the-moshood-abiola-national-stadium-abuja-nigeria.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Abuja',
      state: 'Abuja',
    },
    {
      image: 'https://images.pexels.com/photos/15200453/pexels-photo-15200453/free-photo-of-life-in-lagos.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Lagos',
      state: 'Lagos',
    },
    {
      image: 'https://images.pexels.com/photos/14881644/pexels-photo-14881644.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Bauchi',
      state: 'Bauchi',
    },
    {
      image: 'https://images.pexels.com/photos/6584498/pexels-photo-6584498.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Bayelsa',
      state: 'Bayelsa',
    },
    {
      image: 'https://images.pexels.com/photos/11390779/pexels-photo-11390779.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Benue',
      state: 'Benue',
    },
    {
      image: 'https://images.pexels.com/photos/10971561/pexels-photo-10971561.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Borno',
      state: 'Borno',
    },
    {
      image: 'https://images.pexels.com/photos/17527662/pexels-photo-17527662/free-photo-of-stalls-on-sandy-street-in-abuja.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Cross River',
      state: 'Cross River',
    },
    // Add more states here...
    {
      image: 'https://images.pexels.com/photos/14314165/pexels-photo-14314165.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Zamfara',
      state: 'Zamfara',
    },
  ];
  


  const { setSelectedSpot } = useSpotContext();

  const {setAccountHolder} = useAccountContext();

  // const [allCities, setAllCities] = useState([]);


  return (
    <div>

<div>

<h2 className=' text-2xl text-center mx-6 mt-10 md:text-3xl font-semibold'>Find a Chilling Spot in your City!</h2>
</div>
{/* for images */}
<div className="flex overflow-x-auto flex-nowrap p-4">
      {cities.map((city, index) => (
        <Link to={`/CityPage`} key={index} onClick={() => {setSelectedSpot(city.state), setAccountHolder(loginAccount)}}><div className="city-card relative w-80 h-44 m-2 rounded-sm overflow-hidden">
          <img
            src={city.image} // Replace with the path to your background image
            alt={city.alt}
            className="w-full h-full absolute top-0 left-0 z-0 object-cover rounded-sm drop-shadow-lg"
          />
          <div className="overlay absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center text-white">
            {city.state}
          </div>
        </div></Link>
      ))}
    </div>



    </div>
  )
}

export default Cities