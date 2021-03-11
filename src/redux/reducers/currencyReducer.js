import { UPDATE_CURRENCY} from '../actions';

const CURRENCY_OBJ = {
    currency: -1,
  };

  const currencyReducer = (state = CURRENCY_OBJ , action) => {
    switch(action.type){
        case UPDATE_CURRENCY:    
            return{
                currency: action.payload,
            };
        default: 
            return state
    }
    return state;
} 

export default currencyReducer;
