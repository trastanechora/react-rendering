import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useContextData2 } from '@/contexts/WithSplitChunk';

const StateChangeWithMemo = () => {
  console.log('[DEBUG] Rendering Namer WithSplitChunk!');
  const name = useContextData2();

  return (
    <Container fixed sx={{ marginTop: 10 }}>
      <Box sx={{ bgcolor: '#cfe8fc', padding: 4 }}>
        <Box sx={{ display: 'flex' }}>
          { name }
        </Box>
      </Box>
    </Container>
  );
};

export default StateChangeWithMemo;
