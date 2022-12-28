import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function AddItem() {
  return (
    <Box  >
       <Stack spacing={2} direction="row" justifyContent='center' marginTop='10px'  >
      <TextField size='small' id="outlined-basic" label="Add Item" variant="outlined" />
      <Button size='small' variant="contained">Add </Button></Stack>
    </Box>
  );
}