import React, { memo } from 'react';
import { useContextSelector } from 'use-context-selector';
import { WithSelectorContext } from '@/contexts/WithSelector';

const Counter2 = () => {
  console.log("[DEBUG] Rendering Counter2 WithSelector!");
  const count2 = useContextSelector(WithSelectorContext, v => v[0].count2);
  const setState = useContextSelector(WithSelectorContext, v => v[1]);
  const increment = () => setState(s => ({
    ...s,
    count2: s.count2 + 1,
  }));
  return (
    <div>
      <span>Count2: {count2}</span>
      <button type="button" onClick={increment}>+1</button>
    </div>
  );
};

export default memo(Counter2);

