import React from 'react';
import { useDispatch } from 'react-redux';
import { recieveItem, removeItem } from '../redux/actions';
import { Paper, Grid, Typography, Button} from '@material-ui/core';
import { useSelector } from 'react-redux';
import Price from './Price';
import {useLocation} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { configRoutes } from '../configs/data';
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '1.5rem',
    margin: '1rem 3rem 0rem 3rem',
  },
});

function Item({props}){
    const dispatch = useDispatch();
    const location = useLocation();
    const classes = useStyles();

    let currency = useSelector(state => state.currency).currency.currency;

    return (
      <div>
      <Paper className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Name:{props.itemName}
                </Typography>
                <Typography variant="body2" gutterBottom color="textSecondary">
                  Store:{props.itemOnlineStore}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Delivery Date:{props.itemDeliveryDate}
                </Typography>
              </Grid>
              <Grid item>
              {location.pathname === "/"+configRoutes.paths[0].value ? 
              <Button variant="contained" onClick={()=>{dispatch(recieveItem(props)); dispatch(removeItem(props))}}>Mark as received</Button>
              : []
                }   
              </Grid>
            </Grid>
            <Grid item>
              <Price itemPrice={props.itemPrice} currency={currency} text={'Price:'}/>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      </div>
      );
    }
  
  export default Item;