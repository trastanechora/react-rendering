import React from 'react';
import { ContextProvider } from '@/contexts/WithoutSelector';
import Container from '@mui/material/Container';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Counter1 from '@/components/WithContext/WithoutSelector/Counter1';
import Counter2 from '@/components/WithContext/WithoutSelector/Counter2';
import Empty from '@/components/Empty';

const ContextChangeWithSoutelector = () => {
  console.log("[DEBUG] Rendering ContextChange WithoutSelector");
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

export default ContextChangeWithSoutelector;
