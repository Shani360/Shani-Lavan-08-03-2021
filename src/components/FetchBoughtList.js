import React from 'react';
import ItemsList from './ItemsList';
import { useSelector } from 'react-redux';

function FetchBoughtList(props){
  let items = useSelector(state => state.list).listItems;
    return (
        <ItemsList items={items}/>
      );
    }
  
  export default FetchBoughtList;