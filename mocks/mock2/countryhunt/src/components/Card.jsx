import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import BasicModal from './Modal';

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.name}
          </Typography>
          <Typography variant="caption" display="block" color="text.secondary" >
          Population:{props.population}
          </Typography>
          <Typography variant="caption" display="block" color="text.secondary">
          Region:{props.region}
          </Typography>
          <Typography variant="caption" display="block" color="text.secondary">
          Capital:{props.capital}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <BasicModal subregion={props.subregion} nativename={props.nativename} language={props.language} currency={props.currency} border={props.border}></BasicModal>
      </CardActions>
    </Card>
  );
}