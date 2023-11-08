import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'

import ContactPage from './Pages/ContactPage'
import CatergoryPage from './Pages/CatergoryPage'
import IndividualPage from './Pages/IndividualPage'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import RegisterAsVendor1 from './Pages/RegisterAsVendor1'
import SignUpForm from './Components/SignUpForm'
import RegisterAsVendor2 from './Pages/RegisterAsVendor2'
import RegisterAsVendor3 from './Pages/RegisterAsVendor3'
import VendorAuthenticationPage from './Pages/VendorAuthenticationPage'
import SpotsNavPage from './Pages/SpotsNavPage'
import { SpotProvider } from './Components/SpotContext';
import ListOfSpotsComp from './Components/ListOfSpotsComp'
import CatergoricSpotsComp from './Components/CatergoricSpotsComp'
import PageHero from './Components/PageHero'
import FeaturesPage from './Pages/FeaturesPage'
import CityPage from './Pages/CityPage'
import ErrorPage from './Pages/ErrorPage'
import DashboardVendors from './Pages/DashboardVendors'
import EditVendorData1Page from './Pages/EditVendorData1Page'
import EditVendorData2Page from './Pages/EditVendorData2Page'
import EditVendorAuthenticationPage from './Pages/EditVendorAuthenticationPage'
import { AccountHolderProvider } from './Components/AccountHolder'



function App() {
  return (
    <AccountHolderProvider>
    <SpotProvider>
    <div>
      <Routes>
        <Route path='/' element= {<HomePage/>} />
        <Route path='/Spots' element= {<IndividualPage/>} />
        <Route path='/Contact-Us' element= {<ContactPage/>} />
        <Route path='/CategoryPage' element={<CatergoryPage/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/Sign-up' element={<SignupPage/>}/>
        <Route path='/PersonalDetailsPage' element={<RegisterAsVendor1/>}/>
        <Route path='/VendorDetailsPage' element={<RegisterAsVendor2/>}/>
        <Route path='/VendorActivitiesPage' element={<RegisterAsVendor3/>}/>
        <Route path='/VendorAuthentication' element={<VendorAuthenticationPage/>}/>
        <Route path='/NavSpots' element={<SpotsNavPage/>}/>
        <Route path='/ListSpots' element={<ListOfSpotsComp/>}/>
        <Route path='/CategoricSpotsComp' element={<CatergoricSpotsComp/>}/>
        <Route path='/PageHero' element={<PageHero/>}/>
        <Route path='/FeaturesPage' element={<FeaturesPage/>}/>
        <Route path='/CityPage' element={<CityPage/>}/>
        <Route path='*' element={<ErrorPage/>} />
        <Route path='/Dashboard' element={<DashboardVendors/>} />
        <Route path='/EditVendorData1Page' element={<EditVendorData1Page/>} />
        <Route path='/EditVendorData2Page' element={<EditVendorData2Page/>} />
        <Route path='/EditAuthenticationPage' element={<EditVendorAuthenticationPage/>} />
      </Routes>
    </div>
    </SpotProvider>
    </AccountHolderProvider>
  )
}

export default App
