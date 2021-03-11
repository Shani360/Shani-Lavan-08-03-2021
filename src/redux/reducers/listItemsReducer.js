import { ADD_ITEM, REMOVE_ITEM} from '../actions';

const ITEMS_OBJ = {
    listItems: [],
  };

const listItemsReducer = (state = ITEMS_OBJ , action) => {
    let newItems = [];
    switch(action.type){
        case ADD_ITEM:
            newItems = [...state.listItems];
            newItems.push(action.payload);
            return {
                listItems: 
                    newItems               
              }
            
        case REMOVE_ITEM:
            newItems = [...state.listItems];
            newItems = newItems.filter(item => item.id !== action.payload.id);
            return {
                listItems: newItems
              };
            return {
                listItems: [
                  ...state.listItems,
                  {
                    ...state.receivedItems,
                    listItems: newItems
                  },
                ],
              }
        default: 
            return state
    }
    return state;
}
export default listItemsReducer;
