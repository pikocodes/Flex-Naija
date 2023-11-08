import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import IndividualpageImageDisplay from '../Components/IndividualpageImageDisplay'
import IndividualPageBody from '../Components/IndividualPageBody'
import Modal from '../Components/Modal'
import { useSpotContext } from '../Components/SpotContext';
import BackToTop from '../Components/BackToTop'
import { useAccountContext } from '../Components/AccountHolder'

function IndividualPage() {

  const { selectedSpot } = useSpotContext();
  const {accountHolder} = useAccountContext();

  console.log(accountHolder)

  

  return (
    <div>
        <BackToTop/>
        <Navbar/>
        {/* Image Layout */}
        <IndividualpageImageDisplay individualSpot={selectedSpot} loginAccount={accountHolder}/>
        <IndividualPageBody individualSpot={selectedSpot} loginAccount={accountHolder}/>
        {/* <Modal/> */}
        <Footer/>
    </div>
  )
}

export default IndividualPage


