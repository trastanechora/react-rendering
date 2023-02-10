import React from 'react';
import { ContextProvider } from '@/contexts/WithSplit';
import Container from '@mui/material/Container';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WithSplitButton from '@/components/WithContext/WithSplit/Button';
import WithSplitCounter from '@/components/WithContext/WithSplit/Counter';

const MemoizedNavbar = React.memo(Navbar);
const MemoizedFooter = React.memo(Footer);

const StateChangeWithMemo = () => {
  return (
    <ContextProvider>
      <MemoizedNavbar />
      <Container fixed sx={{ marginTop: 10 }}>
        <WithSplitCounter />
        <WithSplitButton />
      </Container>
      <MemoizedFooter />
    </ContextProvider>
  );
};

export default StateChangeWithMemo;
