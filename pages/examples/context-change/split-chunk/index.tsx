import React from 'react';
import { ContextProvider } from '@/contexts/WithoutSplitChunk';
import Container from '@mui/material/Container';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WithoutSplitChunkButton from '@/components/WithContext/WithoutSplitChunk/Button';
import WithoutSplitChunkCounter from '@/components/WithContext/WithoutSplitChunk/Counter';
import WithoutSplitChunkNamer from '@/components/WithContext/WithoutSplitChunk/Namer';

const MemoizedNavbar = React.memo(Navbar);
const MemoizedFooter = React.memo(Footer);

const StateChangeWithMemo = () => {
  return (
    <ContextProvider>
      <MemoizedNavbar />
      <Container fixed sx={{ marginTop: 10 }}>
        <WithoutSplitChunkCounter />
        <WithoutSplitChunkNamer />
        <WithoutSplitChunkButton />
      </Container>
      <MemoizedFooter />
    </ContextProvider>
  );
};

export default StateChangeWithMemo;
