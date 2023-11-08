import React, {useContext} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import PageHero from '../Components/PageHero'
import CatergoricSpotsComp from '../Components/CatergoricSpotsComp'
// import { useParams } from 'react-router-dom';
import { useSpotContext } from '../Components/SpotContext';
import BackToTop from '../Components/BackToTop'

function CatergoryPage() {
  // const spotsPlaces = useContext(SelectedSpotContext);
  // const { name } = useParams();
  const { selectedSpot } = useSpotContext();
 
  
  return (
    
    <div>
        <BackToTop/>
        <Navbar/>
        {/* Catergory Hero Section */}
        <PageHero spot={selectedSpot}/> 
        <CatergoricSpotsComp spot={selectedSpot}/>
        <Footer/>
        
    </div>
  )
}

export default CatergoryPage