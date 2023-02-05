import React, { useState } from 'react';
import ChildWithContext from '@/components/WithContext/WithMemo/Child';
import { ContextProvider } from '@/contexts/WithMemo';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MemoizedNavbar = React.memo(Navbar);
const MemoizedFooter = React.memo(Footer);
const MemoizedChildWithContext = React.memo(ChildWithContext);

const StateChangeWithMemo = () => {
  const [currentNumber, setCurrentNumber] = useState<number>(0);

  const onClick = () => {
    setCurrentNumber(currentNumber + 1);
  };

  return (
    <ContextProvider>
      <MemoizedNavbar />
      <Container fixed sx={{ marginTop: 10 }}>
        <Box sx={{ bgcolor: '#cfe8fc', minHeight: '100vh', padding: 4 }}>
          <p>Current state: {currentNumber}</p>
          <Button variant="contained" onClick={onClick}>Add more number</Button>
          <MemoizedChildWithContext />
        </Box>
      </Container>
      <MemoizedFooter />
    </ContextProvider>
  );
};

export default StateChangeWithMemo;
