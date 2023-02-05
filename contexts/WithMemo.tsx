import React, { useState, createContext, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';

interface Props {
  value: string;
}

const Context = createContext({} as Props);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentName, setCurrentName] = useState<string>('Context With Memo');

  const value = useMemo(
    () => ({
      value: currentName
    }),
    [currentName]
  );

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export const useContextedState = () => useContext(Context);