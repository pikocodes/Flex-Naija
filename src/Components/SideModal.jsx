import React, { useState, useRef, useEffect } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useSpotContext } from './SpotContext';


function SideModal(loginAccount) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const menuRef = useRef(null);


  const { setSelectedSpot } = useSpotContext();



  useEffect(() => {
    function handleOutsideClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsModalOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function handleMenuItemClick(item) {
    setSelectedMenuItem(item);
    setIsModalOpen(false);
    // perform action based on selected menu item
    // alert(`Clicked ${item.label}`);
  }


  const menuItems = [
    { label: 'Spots', value: 'NavSpots' },
    { label: 'Contact Us', value: 'Contact-Us' },
    // { label: `${loginAccount[0]}`, value: '/loginAccount' },
    { label: 'Login', value: 'Login' },
    { label: 'Sign up', value: 'Sign-up' },
    { label: 'Dashboard', value: 'Dashboard' },
    { label: 'Registe As Vendor', value: 'PersonalDetailsPage' },
  ];

  return (
    <div className="relative z-50">
      <button
        className="p-2 rounded-full bg-gray-300 text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
        onClick={toggleModal}
      >
        <HiMenuAlt3 size={16} />
      </button>
      {isModalOpen && (
        <div
          ref={menuRef}
          className="absolute top-full right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
          <div className="py-1 z-50">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`${
                  selectedMenuItem?.value === item.value
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700'
                } block w-full text-left px-4 py-2 text-sm`}
                onClick={() => handleMenuItemClick(item)}
              ><Link to={`/${item.value}`} onClick={() => setSelectedSpot(`${item.label}`)}>
                {item.label} 
              </Link>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SideModal;
