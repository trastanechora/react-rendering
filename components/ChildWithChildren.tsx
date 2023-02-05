import Box from '@mui/material/Box';
import type { PropsWithChildren } from 'react';

const ChildWithChildren = ({ children }: PropsWithChildren) => {
  console.log("[DEBUG] Rendering child with children");

  return (
    <Box sx={{ display: 'flex' }}>
      {children}
    </Box>
  );
};

export default ChildWithChildren;
