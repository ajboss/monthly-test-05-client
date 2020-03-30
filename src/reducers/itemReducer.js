import {ADD_ITEM} from '../actions/types';

let initialState ={
    items: []
}

export default function (state = initialState, action) {
    let stateCopy = {...state};
    switch(action.type) {
        case ADD_ITEM: 
            stateCopy.items.unshift(action.payload);
            return stateCopy;
        default:
            return state;
    }
}