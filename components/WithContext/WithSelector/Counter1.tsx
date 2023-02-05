import React, { memo } from 'react';
import { useContextSelector } from 'use-context-selector';
import { WithSelectorContext } from '@/contexts/WithSelector';

const Counter1 = () => {
  console.log("[DEBUG] Rendering Counter1 WithSelector!");
  const count1 = useContextSelector(WithSelectorContext, v => v[0].count1);
  const setState = useContextSelector(WithSelectorContext, v => v[1]);
  const increment = () => setState(s => ({
    ...s,
    count1: s.count1 + 1,
  }));
  return (
    <div>
      <span>Count1: {count1}</span>
      <button type="button" onClick={increment}>+1</button>
    </div>
  );
};

export default memo(Counter1);
