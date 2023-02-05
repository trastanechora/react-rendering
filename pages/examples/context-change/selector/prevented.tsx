import React from 'react';
import { ContextProvider } from '@/contexts/WithSelector';
import Container from '@mui/material/Container';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Counter1 from '@/components/WithContext/WithSelector/Counter1';
import Counter2 from '@/components/WithContext/WithSelector/Counter2';
import Empty from '@/components/Empty';

const ContextChangeWithSelector = () => {
  console.log("[DEBUG] Rendering ContextChange WithSelector");
  return (
    <ContextProvider>
      <Navbar />
      <Container fixed sx={{ marginTop: 10 }}>
        <Counter1 />
        <Counter2 />
        <Empty />
      </Container>
      <Footer />
    </ContextProvider>
  );
};

export default ContextChangeWithSelector;
