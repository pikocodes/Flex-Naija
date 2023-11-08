import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import PageHero from '../Components/PageHero'
import ListOfSpotsComp from '../Components/ListOfSpotsComp'
import { useSpotContext } from '../Components/SpotContext';
import BackToTop from '../Components/BackToTop'

function SpotsNavPage() {

  const { selectedSpot } = useSpotContext();


  return (
    <div>
        <BackToTop/>
        <Navbar/>
        {/* Catergory Hero Section */}
        <PageHero spot={selectedSpot} riderText={`Check out a couple of ${selectedSpot} to chill at`}/> 
        <ListOfSpotsComp />
        <Footer/>
    </div>
  )
}

export default SpotsNavPage