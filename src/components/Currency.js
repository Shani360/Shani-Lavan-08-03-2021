import { updateCurrency } from '../redux/actions';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { INTERVAL_MS } from '../configs/data';
import { CURRENCY_URL } from '../configs/data';

function Currency(){
  const [currency, setCurrency] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
        fetch(CURRENCY_URL)
        .then(response => response.json())
        .then(data => {
            setCurrency(data.rates.ILS);
            dispatch(updateCurrency(
              {
                currency : data.rates.ILS
              }
            ))
        }).catch(error => {
          alert('There was a problem loading the currency');
      });
      return false;
    }, INTERVAL_MS );
    return () => clearInterval(interval); 
  }, [])
  return (
    []
  );
    }
  
  export default Currency;