import { getData } from '@/utils/dataStorageMethods';
import React, { createContext, useState, useContext, useEffect } from 'react';
const TabContext = createContext<any>(null); 

export const TabProvider = ({ children }: { children: React.ReactNode }) => {
  const [dataLoaded, setDataLoaded] = useState<Boolean>(false)
  const [selected, setSelected] = useState<string[]>([])
  const [wroteToday, setWroteToday] = useState(false);
  
  const fetchData = async () => {
    let data = await getData()
    if (data?.length > 0) {
      setSelected(data)
    }
    setDataLoaded(true)
  }
    useEffect( () => {
      console.log("Fetching previous data...")
      fetchData()
    }, []);
    
     if (!dataLoaded) {
      return "Fetching data"
     }


  return (
    <TabContext.Provider value={{ selected, setSelected, wroteToday, setWroteToday }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabContext = () => useContext(TabContext);
