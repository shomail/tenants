import * as React from 'react';
import { Grid } from '@mui/material';

interface Props {
  children: React.ReactNode;
}
export default function AppLayout({ children }: Props) {
  return (
    <Grid container justifyContent="center" sx={{ my: 4 }}>
      <Grid item xs={10}>
        {children}
      </Grid>
    </Grid>
  );
}
