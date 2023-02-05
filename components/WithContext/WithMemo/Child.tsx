import React from "react";
import GrandChild from '@/components/WithContext/WithMemo/GrandChild';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useContextedState } from '@/contexts/WithMemo';

const StateChangeWithMemo = () => {
  const { value } = useContextedState();
  console.log('[DEBUG] Rendering child WithMemo!', value);

  return (
    <Container fixed sx={{ marginTop: 10 }}>
      <Box sx={{ bgcolor: '#cfe8fc', padding: 4 }}>
        <Box sx={{ display: 'flex' }}>
          <GrandChild />
        </Box>
      </Box>
    </Container>
  );
};

export default StateChangeWithMemo;
