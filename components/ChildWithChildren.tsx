import Box from '@mui/material/Box';
import type { PropsWithChildren, ReactNode } from 'react';

interface Props extends PropsWithChildren {
  custom: ReactNode
}

const ChildWithChildren = ({ children, custom }: Props) => {
  console.log("[DEBUG] Rendering ChildWithChildren");

  return (
    <Box sx={{ display: 'flex' }}>
      {custom}
      {children}
    </Box>
  );
};

export default ChildWithChildren;
