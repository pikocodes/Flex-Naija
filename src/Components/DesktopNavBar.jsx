import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
// import CloseMenu from '../assets'
// import Hamburger from '../assets'
import SideModal from './SideModal';
import { useSpotContext } from './SpotContext';
import SideModalDesktop from './SideModalDesktop';

function DesktopNavBar(loginAccount) {

  const { setSelectedSpot } = useSpotContext();

    // const [isOpen, setIsOpen] = useState(false);

  // BUTTON
    // const inputRef = useRef();
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // const [Menubutton, setMenuButton] = useState(true);


      //do the opposite when clicked
  //   const handleToggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  //   setMenuButton(!Menubutton);
  // };

    // const openModal = () => {
    //   setIsOpen(true);
    // };
  
    // const closeModal = () => {
    //   setIsOpen(false);
    // };
  
    const navLinks = [
    { label: 'Home', value: '/' },
    { label: 'Spots', value: '/NavSpots' },
    { label: 'Contact Us', value: '/Contact-Us' },
    // { label: `${loginAccount}`, value: '/loginAccount' },
    // { label: 'Sign up', value: '/Sign-up' },
    // { label: 'Register As Vendor', value: '/PersonalDetailsPage' },
    // { label: 'Account', value: 'Account' },
  ];





  return (
    <div>
        <nav className='bg-white text-black px-2 py-5'>
            <div className='flex justify-between'>

                {/* Logo */}
                <div className='flex-initial px-6 justify-start pt-1'><Link to="/">

                    <span className='text-orange-500 font-medium'>Flex</span>Naija
                </Link>
                </div>

           
                {/* Navigation Links */}
                <div>
                    <ul className='flex gap-x-5 px-14 cursor-pointer text-black text-sm'>
                    {
                      navLinks.map((eachNavLink, navIndex) => (
                        <li key={navIndex} className='hover:text-orange-600 pt-1' ><Link  to={eachNavLink.value} onClick={() => setSelectedSpot(eachNavLink.label)}>{eachNavLink.label}</Link></li>
                      ))
                    }
                    <SideModalDesktop loginAccount={loginAccount} className=' z-50'/>
                    </ul>


                </div>

                

            </div>
        </nav>
    </div>
  )
}

export default DesktopNavBar