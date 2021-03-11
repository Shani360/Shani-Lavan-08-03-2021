import React from 'react';
import { Paper, Grid, Typography,} from '@material-ui/core';
import Price from './Price';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
      color: 'white',
      padding: '1.5rem',
      margin: '1rem 3rem 0rem 3rem',
    },
  });

function StoreItem({props}){
    let currency = useSelector(state => state.currency).currency.currency;
    const classes = useStyles();

    return (
      <div>
 <Paper className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                    <Typography variant="body2" gutterBottom>
                    Store:{props.itemOnlineStore}
                    </Typography>
                </Grid>
                <Grid item>
                    <Price itemPrice={props.itemsSumPrice} currency={currency} text={'Total Sum:'}/>
                </Grid>
            </Grid>
         </Grid>
         </Grid>
      </Paper>
      </div>
      );
    }
  
  export default StoreItem;