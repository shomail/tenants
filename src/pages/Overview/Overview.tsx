import { Grid } from '@mui/material';
import { useSelector } from 'hooks';
import EmptyOverview from './EmptyOverview';
import TenantCard from './TenantCard';

export default function Overview() {
  const data = useSelector((state) => state.tenants.tenants);

  if (!data.length) return <EmptyOverview />;

  return (
    <Grid container spacing={4}>
      {data.map((row) => (
        <Grid item xs={4} key={row.id}>
          <TenantCard id={row.id} address={row.address} />
        </Grid>
      ))}
    </Grid>
  );
}
