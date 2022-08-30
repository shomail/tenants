import { Button, Typography, Grid } from '@mui/material';

interface Props {
  showCreteForm: () => void;
}

export default function Header({ showCreteForm }: Props) {
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="space-between" sx={{ mb: 10 }}>
      <Grid item xs={9}>
        <Typography variant="h4">Tenants</Typography>
      </Grid>
      <Grid item xs={3}>
        <Button variant="outlined" color="primary" size="large" onClick={showCreteForm}>
          Create new Tenant
        </Button>
      </Grid>
    </Grid>
  );
}
