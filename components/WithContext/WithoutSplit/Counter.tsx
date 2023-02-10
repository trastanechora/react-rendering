import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useContextedState } from '@/contexts/WithoutSplit';

const StateChangeWithMemo = () => {
  console.log('[DEBUG] Rendering Counter WithoutSplit!');
  const { data } = useContextedState();

  return (
    <Container fixed sx={{ marginTop: 10 }}>
      <Box sx={{ bgcolor: '#cfe8fc', padding: 4 }}>
        <Box sx={{ display: 'flex' }}>
          { data }
        </Box>
      </Box>
    </Container>
  );
};

export default StateChangeWithMemo;
