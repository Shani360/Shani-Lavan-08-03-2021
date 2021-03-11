import React from 'react';
import StoresList from './StoresList';
import { useSelector } from 'react-redux';

function FetchReceivedStore(props){
  let items = useSelector(state => state.received).receivedItems;
    return (
        <StoresList items={items}/>
      );
    }
  
  export default FetchReceivedStore;