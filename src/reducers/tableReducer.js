import {FETCH_TABLES, SELECT_TABLE} from '../actions/types';

const initialState = {
    tables: [],
    tableId: -1
};

export default function( state = initialState, action) {
    switch(action.type) {
        case SELECT_TABLE:
            let temp = state.tables.concat();
            temp.map((item) => {
                if(item.id === action.payload) item["status"] = true;
                else item["status"] = false;
            });
            
            return {
                ...state,
                tableId: action.payload,
                tables: temp
            }
        case FETCH_TABLES: 
            return {
                ...state,
                tables:action.payload
            }
        default :
            return state;
    }
}