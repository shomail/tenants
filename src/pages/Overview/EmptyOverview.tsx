import { Grid, Typography } from '@mui/material';

export default function EmptyOverview() {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ height: 500 }}>
      <Grid item xs={4}>
        <Typography variant="h6">No properties found, please add one</Typography>
      </Grid>
    </Grid>
  );
}
