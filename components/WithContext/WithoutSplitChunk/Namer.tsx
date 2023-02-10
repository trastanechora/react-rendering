import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useContextData } from '@/contexts/WithoutSplitChunk';

const StateChangeWithMemo = () => {
  console.log('[DEBUG] Rendering Namer WithoutSplitChunk!');
  const { name } = useContextData();

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
