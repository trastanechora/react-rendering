import React, { useState } from 'react';
import type { ReactNode, Dispatch, SetStateAction } from 'react';

import { createContext } from 'use-context-selector';

interface State {
  count1: number;
  count2: number;
}

type Context = [State, Dispatch<SetStateAction<State>>]

const DEFAULT_STATE: State = { count1: 0, count2: 0 };
const WithSelectorContext = createContext<Context>([DEFAULT_STATE, () => {}]);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  console.log("Rendering ContextProvider");
  return (<WithSelectorContext.Provider value={useState(DEFAULT_STATE)}>
    {children}
  </WithSelectorContext.Provider>)
};

export { WithSelectorContext, ContextProvider };
