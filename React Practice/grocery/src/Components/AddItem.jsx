import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function AddItem({add}) {
  const [task,setTask] = React.useState('');
 
 const handleChange = (e)=>{
  e.preventDefault();
  setTask(e.target.value)
 }
 
const handleClick=(e)=>{
  e.preventDefault();
  add(task)
  setTask('')
}


  return (
    <Box  >
       <Stack spacing={2} direction="row" justifyContent='center' marginTop='10px'  >
      <TextField size='small' id="outlined-basic" value={task} label="Add Item" variant="outlined" onChange={handleChange} />
      <Button size='small' variant="contained"  onClick={handleClick} >Add </Button></Stack>
    </Box>
  );
}