import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MemoizedNavbar = React.memo(Navbar);
const MemoizedFooter = React.memo(Footer);

function StateChangeExample() {
  console.log('[DEBUG] Rendering Example state-change!');
  const [currentNumber, setCurrentNumber] = useState<number>(0);

  const handleClick = () => {
    setCurrentNumber(currentNumber + 1);
  }

  return (
    <>
      <MemoizedNavbar />
      <Container fixed sx={{ marginTop: 10 }}>
        <Box sx={{ bgcolor: '#cfe8fc', minHeight: '100vh', padding: 4 }}>
          <p>Current number: {currentNumber}</p>
          <Button variant="contained" onClick={handleClick}>Add more number</Button>
        </Box>
      </Container>
      <MemoizedFooter />
    </>
  );
}
export default StateChangeExample;