import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useContextData1 } from '@/contexts/WithSplitChunk';

const StateChangeWithMemo = () => {
  console.log('[DEBUG] Rendering Counter WithSplitChunk!');
  const count = useContextData1();

  return (
    <Container fixed sx={{ marginTop: 10 }}>
      <Box sx={{ bgcolor: '#cfe8fc', padding: 4 }}>
        <Box sx={{ display: 'flex' }}>
          { count }
        </Box>
      </Box>
    </Container>
  );
};

export default StateChangeWithMemo;
