import React, { useState, createContext, useContext } from 'react';
import type { ReactNode } from 'react';

interface Props {
  value: string;
}

const Context = createContext({} as Props);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentName, setCurrentName] = useState<string>('Context Without Memo');

  return (
    <Context.Provider value={{ value: currentName }}>
      {children}
    </Context.Provider>
  );
};

export const useContextedState = () => useContext(Context);