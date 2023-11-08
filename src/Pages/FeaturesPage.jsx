import React, {useContext} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import PageHero from '../Components/PageHero'
import FeaturesComp from '../Components/FeaturesComp'
import { useSpotContext } from '../Components/SpotContext';
import { useAccountContext } from '../Components/AccountHolder'
import BackToTop from '../Components/BackToTop'


function FeaturesPage() {
  // const spotsPlaces = useContext(SelectedSpotContext);
  // const { name } = useParams();
  const { selectedSpot } = useSpotContext();
 
  const { accountHolder } = useAccountContext();
  
  return (
    <div>
        <BackToTop/>
        <Navbar/>
        {/* Catergory Hero Section */}
        <PageHero spot={selectedSpot} loginAccount={accountHolder}/> 
        <FeaturesComp spot={selectedSpot} loginAccount={accountHolder}/>
        <Footer/>
        
    </div>
  )
}

export default FeaturesPage