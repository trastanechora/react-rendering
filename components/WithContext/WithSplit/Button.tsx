import { useCallback } from 'react';
import Button from '@mui/material/Button';
import { useContextApi } from '@/contexts/WithSplit';
import Box from '@mui/material/Box';

const Child = () => {
  console.log("[DEBUG] Rendering Button WithSplit!");
  const doIncrement = useContextApi();

  const handleClick = useCallback(() => {
    doIncrement(Math.random);
  }, [doIncrement])
  return (
    <Box sx={{ padding: 4 }} >
      <button onClick={handleClick}>Chagne</button>
      <p>Use this button to change state</p>
    </Box>
  );
};

export default Child;
