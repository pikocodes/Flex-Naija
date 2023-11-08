import React, { useState, useRef } from 'react';
import CloseMenu from '../assets/close_white_edited.png'
import HamburgerMenu from '../assets/menu_white.png'
import SideModal from './SideModal';
import { Link } from 'react-router-dom';

function MobileNavbar(loginAccount) {

  const inputRef = useRef();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [Menubutton, setMenuButton] = useState(true);



  const [search, setSearch] = useState('');

    const handleSearch = () => {
        search === '' ? inputRef.current.focus() : alert(search);
    }

  //do the opposite when clicked
  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setMenuButton(!Menubutton);
  };



  return (
    <nav className='bg-white opacity-100 text-black py-5'>
      <div className='flex justify-between'>
      
      {/* Logo */}
      <div className='flex-initial px-6 justify-start'>
        <Link to="/">
                    <span className='text-orange-500 font-medium'>Flex</span>Naija
        </Link>
      </div>

        {/* Menu button */}
        <div className='flex flex-col px-4'>


{/* New one menu with modal */}
      <SideModal loginAccount={loginAccount} className=' z-50'/>
      </div>
      </div>
    </nav>

  );
}

export default MobileNavbar;
