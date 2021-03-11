export const ADD_ITEM = "ADD_ITEM";
export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const SAVE_SELECTED = 'SAVE_SELECTED'
export const UPDATE_CURRENCY = "UPDATE_CURRENCY";
export const REMOVE_ITEM = 'REMOVE_ITEM';

export function addItem(item){
    return{
        type: ADD_ITEM,
        payload: item
    }
}

export function recieveItem(item){
    return{
        type: RECEIVE_ITEM,
        payload: item
    }
}

export function removeItem(item){
    return{
        type: REMOVE_ITEM,
        payload: item
    }
}

export function saveSelected(value){
    return { 
        type: SAVE_SELECTED,
         value
    }
}

export function updateCurrency(currency){
    return{
        type: UPDATE_CURRENCY,
        payload: currency
    }
}