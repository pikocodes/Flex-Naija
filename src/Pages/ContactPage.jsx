import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import NewSpots from '../Components/NewSpots'
import Banner from '../Components/Banner'
import CallToAction from '../Components/CallToAction'
import Footer from '../Components/Footer'
import ContactHero from '../Components/ContactHero'
import ContactInfo from '../Components/ContactInfo'
import BackToTop from '../Components/BackToTop'

function ContactPage() {
  return (
    <div>
        <BackToTop/>
        <Navbar/>
        <ContactHero/>
        <ContactInfo/>
        <Footer/>
    </div>
  )
}

export default ContactPage