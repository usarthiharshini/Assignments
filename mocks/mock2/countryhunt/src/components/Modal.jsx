import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Chip } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  let languages = props.language;
  console.log(props.language);
  return (
    <div>
      <Button onClick={handleOpen}>More Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Native Name: {props.nativename}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Sub Region: {props.subregion}
          </Typography>


    {props.currency?  <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2"> Currencies: </Typography> {props.currency.map((currency)=>{
            return <Chip label={currency.symbol+"   "+ currency.name}></Chip>
        })}
    </Box> :   <Typography id="modal-modal-title" variant="h6" component="h2">
           No Currency
          </Typography> } 


{/* 
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {currencies[0].name} 
          </Typography> 
          <Typography id="modal-modal-title" variant="h6" component="h2">
           {props.language[0].name} 
  </Typography>*/}
         {props.border?  <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2"> Borders: </Typography> {props.border.map((border)=>{
            return <Chip label={border}></Chip>
        })}
    </Box> :   <Typography id="modal-modal-title" variant="h6" component="h2">
           No border
          </Typography> } 

          {languages?  <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2"> languages: </Typography> {languages.map((lang)=>{
            return <Chip label={lang.iso639_1}></Chip>
        })}
    </Box> :   <Typography id="modal-modal-title" variant="h6" component="h2">
           No language
          </Typography> }  
        </Box>

       

      </Modal>
    </div>
  );
}