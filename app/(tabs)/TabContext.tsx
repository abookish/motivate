import React, { createContext, useState, useContext } from 'react';
const TabContext = createContext<any>(null); 

export const TabProvider = ({ children }: { children: React.ReactNode }) => {
  const [wroteTodayButton, setWroteTodayButton] = useState<boolean>(false); //state will reset to false every render

  return (
    <TabContext.Provider value={{ wroteTodayButton, setWroteTodayButton }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabContext = () => useContext(TabContext);
