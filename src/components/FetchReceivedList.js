import React from 'react';
import ItemsList from './ItemsList';
import { useSelector } from 'react-redux';

function FetchReceivedList(){
  let items = useSelector(state => state.received).receivedItems;
    return (
        <ItemsList items={items}/>
      );
    }
  
  export default FetchReceivedList;