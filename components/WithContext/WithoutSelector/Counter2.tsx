import React, { memo, useContext } from 'react';
import { WithoutSelectorContext } from '@/contexts/WithoutSelector';

const Counter2 = () => {
  console.log("[DEBUG] Rendering Counter2 WithoutSelector!");
  const [state, setState] = useContext(WithoutSelectorContext);
  const increment = () => {
    setState(s => ({
      ...s,
      count2: s.count2 + 1,
    }))
  };
  return (
    <div>
      <span>Count2: {state.count2}</span>
      <button type="button" onClick={increment}>+1</button>
    </div>
  );
};

export default memo(Counter2);
