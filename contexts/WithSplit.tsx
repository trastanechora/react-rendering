import React, { useState, createContext, useContext } from 'react';
import type { ReactNode, Dispatch, SetStateAction } from 'react';

type DataProps = number;

type ApiProps = Dispatch<SetStateAction<number>>

const DataContext = createContext<DataProps>(0);
const ApiContext = createContext<ApiProps>(() => {});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<number>(0);

  return (
    <DataContext.Provider value={state}>
      <ApiContext.Provider value={setState}>
      {children}
      </ApiContext.Provider>
    </DataContext.Provider>
  );
};

export const useContextData = () => useContext(DataContext);
export const useContextApi = () => useContext(ApiContext);
