import { useCallback } from 'react';
import { useContextedState } from '@/contexts/WithoutSplit';
import Box from '@mui/material/Box';

const Child = () => {
  console.log("[DEBUG] Rendering Button WithoutSplit!");
  const { doIncrement } = useContextedState();

  const handleClick = useCallback(() => {
    doIncrement(Math.random());
  }, [doIncrement])
  return (
    <Box sx={{ padding: 4 }} >
      <button onClick={handleClick}>Chagne</button>
      <p>Use this button to change state</p>
    </Box>
  );
};

export default Child;
