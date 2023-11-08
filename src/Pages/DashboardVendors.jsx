import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import VendorsDashboardHeroComp from '../Components/VendorsDashboardHeroComp'
import VendorDashboardComp from '../Components/VendorDashboardComp'
import { useAccountContext } from '../Components/AccountHolder'
import BackToTop from '../Components/BackToTop'

function DashboardVendors() {

  const { accountHolder } = useAccountContext();
  console.log(accountHolder);

  return (
    <div>
        <BackToTop/>
        <Navbar loginAccount={accountHolder}/>
        <VendorsDashboardHeroComp loginAccount={accountHolder}/>
        <VendorDashboardComp loginAccount={accountHolder}/>
        <Footer/>
    </div>
  )
}

export default DashboardVendors