import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';


function Items({tasks}) {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (<FormGroup >
       
        {tasks.map((task)=>{
          return  <FormControlLabel
         
        control={<Checkbox {...label}  color="success" />}
        label={task}
      />
        })} 
    </FormGroup> );
}

export default Items;