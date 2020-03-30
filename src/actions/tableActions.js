import {FETCH_TABLES, SELECT_TABLE} from './types';
export const fetchTables = () => dispatch => {    
    fetch('http://localhost:5000/tables').then(res => res.json())
    .then(tables => {
            dispatch({
                type: FETCH_TABLES,
                payload: tables
            }
        )}
    );
}

export function selectTable(data) {  
    return({
      type:SELECT_TABLE,
      payload: data.id
    });
}

