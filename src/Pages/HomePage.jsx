import React, {useEffect} from 'react'
import Navbar from '.././Components/Navbar'
import Hero from '.././Components/Hero'
import Features from '.././Components/Features'
import NewSpots from '.././Components/NewSpots'
import PopularPlaces from '.././Components/PopularPlaces'
import Banner from '.././Components/Banner'
import Footer from '.././Components/Footer'
import Cities from '.././Components/Cities'
import CallToAction from '.././Components/CallToAction'
import BackToTop from '../Components/BackToTop'
import { useAccountContext } from '../Components/AccountHolder'

function HomePage() {

  const { accountHolder } = useAccountContext();

  // Use useEffect to log the value when it changes
  useEffect(() => {
    console.log(accountHolder);
  }, [accountHolder]);




  return (
    <div>
        <BackToTop/>
        <Navbar loginAccount = {accountHolder}/>
        <Hero/>
        <Features loginAccount = {accountHolder}/>
        {/* <h1>This is Home Page</h1> */}
        <NewSpots loginAccount = {accountHolder}/>
        <PopularPlaces loginAccount = {accountHolder}/>
        <Banner/>
        <Cities loginAccount = {accountHolder}/>
        <CallToAction/>
        <Footer/>
    </div>
  )
}
 
export default HomePage