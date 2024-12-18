import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
// });

export default function BaseCard({ image, name, description, category, _id}) {
    
    
    // const navigate = useNavigate()
    // const toDetail =  () =>{
    //   navigate(`https://backend-vis3d.onrender.com/products/${_id}`)
    // }
     
    // poner despues en el prop de card onClick={toDetail}
    
    
    
    return (
      <Card sx={{ maxWidth: 345, maxHeight: 500, margin: '1rem' }}  >
        {/* <CardActionArea> */}
          <CardMedia
            component="img"
            alt={name}
            height="260"
            image={image}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {category}
            </Typography>
          
          </CardContent>
       
      </Card>
    );
  }


