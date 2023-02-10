import React from 'react';
import { ContextProvider } from '@/contexts/WithSplitChunk';
import Container from '@mui/material/Container';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WithSplitChunkButton from '@/components/WithContext/WithSplitChunk/Button';
import WithSplitChunkCounter from '@/components/WithContext/WithSplitChunk/Counter';
import WithSplitChunkNamer from '@/components/WithContext/WithSplitChunk/Namer';

const MemoizedNavbar = React.memo(Navbar);
const MemoizedFooter = React.memo(Footer);

const StateChangeWithMemo = () => {
  return (
    <ContextProvider>
      <MemoizedNavbar />
      <Container fixed sx={{ marginTop: 10 }}>
        <WithSplitChunkCounter />
        <WithSplitChunkNamer />
        <WithSplitChunkButton />
      </Container>
      <MemoizedFooter />
    </ContextProvider>
  );
};

export default StateChangeWithMemo;
