import { createContext, useContext, useState } from 'react';

const SpotContext = createContext();

export const useSpotContext = () => useContext(SpotContext);

export const SpotProvider = ({ children }) => {
  const [selectedSpot, setSelectedSpot] = useState('');

  return (
    <SpotContext.Provider value={{ selectedSpot, setSelectedSpot }}>
      {children}
    </SpotContext.Provider>
  );
};
