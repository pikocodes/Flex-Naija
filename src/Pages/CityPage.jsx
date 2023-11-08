import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PageHero from '../Components/PageHero'
import CatergoricSpotsComp from '../Components/CatergoricSpotsComp'
import { useSpotContext } from '../Components/SpotContext';
import CityComp from '../Components/CityComp';


function CityPage() {

    const { selectedSpot } = useSpotContext();

    

    // console.log(selectedSpot)

    


  return (
    <div>
         <Navbar/>
        {/* Catergory Hero Section */}
        <PageHero spot={selectedSpot} riderText={`Explore adventurous chilling spots in ${selectedSpot}`}/> 
        {/* <CatergoricSpotsComp spot={selectedSpot}/> */}
        <CityComp state={selectedSpot}/>
        <Footer/>
    </div>
  )
}

export default CityPage