import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'hooks';
import { remove } from 'store';

interface Props {
  id: string;
  address: string;
}

export default function TenantCard({ id, address }: Props) {
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="houses"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="text" color="error" onClick={() => dispatch(remove(id))}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
