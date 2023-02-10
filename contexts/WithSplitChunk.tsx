import React, { useState, createContext, useContext, useMemo } from 'react';
import type { ReactNode, Dispatch, SetStateAction } from 'react';

type ApiProps = {
  setCount: Dispatch<SetStateAction<number>>;
  setName: Dispatch<SetStateAction<string>>;
}

const defaultApi = {
  setCount: () => {},
  setName: () => {},
}

const DataContext1 = createContext<number>(0);
const DataContext2 = createContext<string>('');
const ApiContext = createContext<ApiProps>(defaultApi);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');

  return (
    <DataContext1.Provider value={count}>
      <DataContext2.Provider value={name}>
        <ApiContext.Provider value={{ setCount, setName }}>
        {children}
        </ApiContext.Provider>
      </DataContext2.Provider>
    </DataContext1.Provider>
  );
};

export const useContextData1 = () => useContext(DataContext1);
export const useContextData2 = () => useContext(DataContext2);
export const useContextApi = () => useContext(ApiContext);
