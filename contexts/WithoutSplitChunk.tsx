import React, { useState, createContext, useContext, useMemo } from 'react';
import type { ReactNode, Dispatch, SetStateAction } from 'react';

interface DataProps {
  count: number;
  name: string;
}

type ApiProps = {
  setCount: Dispatch<SetStateAction<number>>;
  setName: Dispatch<SetStateAction<string>>;
}

const defaultData = {
  count: 0,
  name: ''
};

const defaultApi = {
  setCount: () => {},
  setName: () => {},
}

const DataContext = createContext<DataProps>(defaultData);
const ApiContext = createContext<ApiProps>(defaultApi);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');

  const value = useMemo(() => ({
    count: count,
    name: name
  }), [count, name])

  return (
    <DataContext.Provider value={value}>
      <ApiContext.Provider value={{ setCount, setName }}>
      {children}
      </ApiContext.Provider>
    </DataContext.Provider>
  );
};

export const useContextData = () => useContext(DataContext);
export const useContextApi = () => useContext(ApiContext);
