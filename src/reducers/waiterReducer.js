import {FETCH_WAITERS, SELECT_WAITER} from '../actions/types';

const initialState = {
    waiters: [],
    waiterId: -1
};

export default function( state = initialState, action) {
    switch(action.type) {    
        case SELECT_WAITER:
            let temp = state.waiters.concat();
            temp.map((item) => {
                if(item.id === action.payload) item["status"] = true;
                else item["status"] = false;
            });
            
            return {
                ...state,
                waiterId: action.payload,
                waiters: temp
            }
        case FETCH_WAITERS: 
            return {
                ...state,
                waiters:action.payload
            }
        default :
            return state;
    }
}