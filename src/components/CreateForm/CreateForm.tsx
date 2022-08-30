import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDebounce } from 'hooks';
import { fetchAddresses } from 'api';
import { Address } from 'types';
import { useDispatch } from 'hooks';
import { add } from 'store';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

export default function CreateForm({ isOpen, handleClose }: Props) {
  const [data, setData] = useState<Address[]>([]);
  const [address, setAddress] = useState<Address | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      if (debouncedSearchTerm.length >= 3) {
        fetchAddresses(debouncedSearchTerm).then((data) => setData(data));
      }
    } else {
      setData([]);
    }
  }, [debouncedSearchTerm]);

  const handleCreate = () => {
    if (!address) return;

    const payload = {
      id: address.adresse.id,
      address: address.tekst,
    };
    dispatch(add(payload));
    setData([]);
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>Create tenancy</DialogTitle>
      <DialogContent>
        <Autocomplete
          disablePortal={false}
          id="combo-box-address"
          sx={{ mt: 1 }}
          options={data}
          filterOptions={(x) => x}
          isOptionEqualToValue={(option, value) => option.adresse.id === value.adresse.id}
          getOptionLabel={(option) => option.tekst}
          onChange={(e, value) => setAddress(value)}
          onInputChange={(e, inputValue) => setSearchTerm(inputValue)}
          fullWidth
          renderInput={(params) => <TextField {...params} label="Address" />}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleCreate} disabled={!address}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}
