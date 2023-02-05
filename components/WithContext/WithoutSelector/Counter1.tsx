import React, { memo, useContext } from 'react';
import { WithoutSelectorContext } from '@/contexts/WithoutSelector';

const Counter1 = () => {
  console.log("[DEBUG] Rendering Counter1 WithoutSelector!");
  const [state, setState] = useContext(WithoutSelectorContext);
  const increment = () => {
    setState(s => ({
      ...s,
      count1: s.count1 + 1,
    }))
  };
  return (
    <div>
      <span>Count1: {state.count1}</span>
      <button type="button" onClick={increment}>+1</button>
    </div>
  );
};

export default memo(Counter1);

