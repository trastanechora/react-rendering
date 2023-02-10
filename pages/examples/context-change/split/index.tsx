import React from 'react';
import { ContextProvider } from '@/contexts/WithoutSplit';
import Container from '@mui/material/Container';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WithoutSplitButton from '@/components/WithContext/WithoutSplit/Button';
import WithoutSplitCounter from '@/components/WithContext/WithoutSplit/Counter';

const MemoizedNavbar = React.memo(Navbar);
const MemoizedFooter = React.memo(Footer);

const StateChangeWithMemo = () => {
  return (
    <ContextProvider>
      <MemoizedNavbar />
      <Container fixed sx={{ marginTop: 10 }}>
        <WithoutSplitCounter />
        <WithoutSplitButton />
      </Container>
      <MemoizedFooter />
    </ContextProvider>
  );
};

export default StateChangeWithMemo;
