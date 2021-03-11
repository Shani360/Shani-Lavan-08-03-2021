import React from 'react';
import Item from './Item';

function ItemsList(props){
  let items = props.items

  if(items != [])
     items = items.sort((a, b) => new Date(b.itemDeliveryDate) - new Date(a.itemDeliveryDate));

    return (
        <div>
        {items !== undefined ? items.map(item => {
           return <Item key={item.id} props={item}/>
        }) : []}
    </div>
      );
    }
  
  export default ItemsList;