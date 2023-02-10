import { useCallback } from 'react';
import { useContextApi } from '@/contexts/WithSplitChunk';
import Box from '@mui/material/Box';

const NAMES = ['Digital Goods', 'New Retail', 'Content', 'Travel', 'Entertainment'];

const Child = () => {
  console.log("[DEBUG] Rendering Button ChunkChunk!");
  const { setCount, setName } = useContextApi();

  const handleClickCount = useCallback(() => {
    setCount(Math.random());
  }, [setCount])

  const handleClicName = useCallback(() => {
    setName(NAMES[Math.floor(Math.random() * NAMES.length)]);
  }, [setName])
  return (
    <Box sx={{ padding: 4 }} >
      <button onClick={handleClickCount}>Chagne Count</button>
      <button onClick={handleClicName}>Chagne Name</button>
      <p>Use this button to change state</p>
    </Box>
  );
};

export default Child;
