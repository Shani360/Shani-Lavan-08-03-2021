import React from 'react';
import StoresList from './StoresList';
import { useSelector } from 'react-redux';


function FetchBoughtStore(props){
  let items = useSelector(state => state.list).listItems;

    return (
        <StoresList items={items}/>
      );
    }
  
  export default FetchBoughtStore;