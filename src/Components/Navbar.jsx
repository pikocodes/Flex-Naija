import React, { useState, useEffect } from 'react';
import DesktopNavBar from './DesktopNavBar';
import MobileNavbar from './MobileNavbar';

function Navbar(loginAccount) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth > 768 ? <DesktopNavBar loginAccount={loginAccount} /> : <MobileNavbar loginAccount={loginAccount} />;
}

export default Navbar;
