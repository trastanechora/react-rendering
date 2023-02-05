import React, { useState, useMemo } from "react";
import Button from '@mui/material/Button';
import ChildWithChildren from '@/components/ChildWithChildren';
import Child from '@/components/Child';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MemoizedChildWithChildren = React.memo(ChildWithChildren);
const MemoizedNavbar = React.memo(Navbar);
const MemoizedFooter = React.memo(Footer);

const StateChangeWithMemo = () => {
  const [currentNumber, setCurrentNumber] = useState<number>(0);

  const onClick = () => {
    setCurrentNumber(currentNumber + 1);
  };

  const memoValue = useMemo(() => ({ name: "first" }), []);

  return (
    <>
      <MemoizedNavbar />
      <Container fixed sx={{ marginTop: 10 }}>
        <Box sx={{ bgcolor: '#cfe8fc', minHeight: '100vh', padding: 4 }}>
          <p>Current state: {currentNumber}</p>
          <Button variant="contained" onClick={onClick}>Add more number</Button>
          <MemoizedChildWithChildren>
            <Child value={memoValue} />
          </MemoizedChildWithChildren>
        </Box>
      </Container>
      <MemoizedFooter />
    </>
  );
};

export default StateChangeWithMemo;
