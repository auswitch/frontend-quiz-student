import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    fetch('https://donation-server-production.up.railway.app/donation')
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  };

  return (
    <DataContext.Provider value={{ data, isLoading, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};