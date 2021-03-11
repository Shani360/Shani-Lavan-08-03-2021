import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import receivedItemsReducer from './reducers/receivedItemsReducer';
import listItemsReducer from './reducers/listItemsReducer';
import currencyReducer from './reducers/currencyReducer';


export const reducer = combineReducers({
  list: listItemsReducer,
  received: receivedItemsReducer,
  currency: currencyReducer,
});

const configStorage = {
  key: 'root',
  storage,
  whitelist: ['list','received']
};

export default persistReducer(configStorage, reducer);