import React, { useState, createContext, useContext } from 'react';
import type { ReactNode } from 'react';

const DataContext = createContext({});
const ApiContext = createContext({});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentNumber, setCurrentNumber] = useState<number>(0);

  const checkValue = () => {
    console.warn('[DEBUG] currentNumber', currentNumber)
  };

  return (
    <DataContext.Provider value={{ currentNumber }}>
      <ApiContext.Provider value={{ setCurrentNumber, checkValue }}>
        {children}
      </ApiContext.Provider>
    </DataContext.Provider>
  );
};

export const useFormState = () => useContext(DataContext);
export const useFormApi = () => useContext(ApiContext);