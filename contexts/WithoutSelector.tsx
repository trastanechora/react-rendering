import React, { useState, createContext } from 'react';
import type { ReactNode, Dispatch, SetStateAction } from 'react';

interface State {
  count1: number;
  count2: number;
}

type Context = [State, Dispatch<SetStateAction<State>>]

const DEFAULT_STATE: State = { count1: 0, count2: 0 };
const WithoutSelectorContext = createContext<Context>([DEFAULT_STATE, () => {}]);

const ContextProvider = ({ children }: { children: ReactNode }) => (
  <WithoutSelectorContext.Provider value={useState(DEFAULT_STATE)}>
    {children}
  </WithoutSelectorContext.Provider>
);

export { WithoutSelectorContext, ContextProvider };
