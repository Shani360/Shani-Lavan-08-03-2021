import React from 'react';
import StoreItem from './StoreItem';

function GroupByStoreSum(storeItems){
    const groupBy = (storeItems, groupByParamKey, sumParamkey) => storeItems.reduce(
        (result, item) => ({
          ...result,
          [item[groupByParamKey]]: [
            ...(result[item[groupByParamKey]] || []),
            parseInt(item[sumParamkey]),
          ],
        }), 
        {},
    );

    let storeComponents = [];
    let obj = groupBy(storeItems, "itemOnlineStore", "itemPrice");
    for (const [key, value] of Object.entries(obj)) {
        let sum = value.reduce((a, b) => a + b, 0);
        storeComponents.push(<StoreItem key={key} props={{itemOnlineStore:key,itemsSumPrice:sum}}/>);
      }
    return storeComponents;
}
function StoresList(props){
    return (
        <div>
             {props.items? GroupByStoreSum(props.items) : []}
        </div>
      );
    }
  
  export default StoresList;