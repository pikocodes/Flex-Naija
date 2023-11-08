import { createContext, useContext, useState } from 'react';

const AccountContext = createContext();

export const useAccountContext = () => useContext(AccountContext);

export const AccountHolderProvider = ({ children }) => {
  const [accountHolder, setAccountHolder] = useState('');

  return (
    <AccountContext.Provider value={{ accountHolder, setAccountHolder }}>
      {children}
    </AccountContext.Provider>
  );
};
