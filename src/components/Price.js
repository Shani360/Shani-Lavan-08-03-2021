import React from 'react';
import { Typography} from '@material-ui/core';


function Price(props){
    const convertedPrice = (parseInt(props.itemPrice) * props.currency).toFixed(2) ;
    return (
        <Typography variant="subtitle1">{props.text} {props.itemPrice}$ / { convertedPrice }₪</Typography>
        );
    }
  
  export default Price;