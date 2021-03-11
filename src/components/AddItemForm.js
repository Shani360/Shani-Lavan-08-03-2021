import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';

import {v1 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/actions';

function AddItemForm(){

  const [itemName, setItemName] = useState("");
  const [itemOnlineStore, setItemOnlineStore] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDeliveryDate, setitemDeliveryDate] = useState("");
  const [isItemNameInvalid, setIsItemNameInvalid] = useState(false);
  const [isItemOnlineStoreInvalid, setIsItemOnlineStoreInvalid] = useState(false);
  const [isItemPriceInvalid, setIsItemPriceInvalid] = useState(false);
  const [isItemDeliveryDate, setIsItemDeliveryDateInvalid] = useState(false);

  const dispatch = useDispatch();

  const clearForm = () => {
    setItemName("");
    setItemOnlineStore("");
    setItemPrice("");
    setitemDeliveryDate("");
  };
  
  const validate = () => {
    itemName !== "" ? setIsItemNameInvalid(false) : setIsItemNameInvalid(true);
    itemOnlineStore !== "" ? setIsItemOnlineStoreInvalid(false) : setIsItemOnlineStoreInvalid(true);
    itemPrice !== "" ? setIsItemPriceInvalid(false) : setIsItemPriceInvalid(true);
    itemDeliveryDate !== "" ? setIsItemDeliveryDateInvalid(false) : setIsItemDeliveryDateInvalid(true);
  };
const isValid = () => {
  return !isItemNameInvalid && !isItemOnlineStoreInvalid && !isItemPriceInvalid && !isItemDeliveryDate;
}
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (isValid()) {
        dispatch(addItem(
        {
          id: uuid(),
          itemName: itemName,
          itemOnlineStore: itemOnlineStore,
          itemPrice: itemPrice,
          itemDeliveryDate: itemDeliveryDate      
        }
      ));
      clearForm();}}}> 
            <Paper>
              <div style={{padding: "1.6rem",margin: "0.5rem"}}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
                    label="item name"
                    onChange={e => setItemName(e.target.value)}
                    error={isItemNameInvalid}
                    helperText={isItemNameInvalid && "item name required"}
                    value={itemName}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    label="online store"
                    onChange={e => setItemOnlineStore(e.target.value)}
                    error={isItemOnlineStoreInvalid}
                    helperText={isItemOnlineStoreInvalid && "item name required"}
                    value={itemOnlineStore}
                />
                </Grid>
                <Grid item xs={6}>
                <TextField
                    label="price"
                    type="number"
                    onChange={e => setItemPrice(e.target.value)}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">$</InputAdornment>,
                    }}
                    error={isItemPriceInvalid}
                    helperText={isItemPriceInvalid && "item name required"}
                    value={itemPrice}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    label="delivery date"
                    type="date"
                    onChange={e => setitemDeliveryDate(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={isItemDeliveryDate}
                    helperText={isItemDeliveryDate && "item name required"}
                    value={itemDeliveryDate}
                />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={validate}
                  >
                     Add Item
                  </Button>
                </Grid>
              </Grid>
              </div>
            </Paper>

          </form>
      </div>
    );
  }

export default AddItemForm;
