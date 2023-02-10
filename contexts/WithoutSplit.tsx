import React, { useState, createContext, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';

interface Props {
  data: number;
  doIncrement: (input: number) => void
}

const Context = createContext({} as Props);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<number>(0);

  const value = useMemo(() => ({
    data: state,
    doIncrement: (input: number) => setState(input)
  }), [state])

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export const useContextedState = () => useContext(Context);