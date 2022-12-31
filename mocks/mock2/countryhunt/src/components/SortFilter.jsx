import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants() {
  const [sort, setSort] = React.useState('');
  const [filter, setFilter] = React.useState('');

  const handleSort = (event) => {
    setSort(event.target.value);
  };
  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={sort}
          onChange={handleSort}
          label="Sort"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='pop'>Population</MenuItem>
        
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={filter}
          onChange={handleFilter}
          label="Filter"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Africa</MenuItem>
          <MenuItem value={10}>America</MenuItem>
          <MenuItem value={10}>Asia</MenuItem>
          <MenuItem value={10}>Europe</MenuItem>
          <MenuItem value={10}>Ocenia</MenuItem>
         
        </Select>
      </FormControl>
      
    </div>
  );
}