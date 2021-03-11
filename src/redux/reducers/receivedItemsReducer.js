import { RECEIVE_ITEM} from '../actions';

const RECEIVED_OBJ = {
    receivedItems: [],
  };

const receivedItemsReducer = (state = RECEIVED_OBJ , action) => {
    let newReceivedItems = [];
    switch(action.type){
        case RECEIVE_ITEM:
            newReceivedItems = [...state.receivedItems];
            newReceivedItems.push(action.payload);
            return {
                receivedItems:newReceivedItems
              }
        default: 
            return state
    }
    return state;
}
export default receivedItemsReducer;