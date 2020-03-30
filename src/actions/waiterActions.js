import {FETCH_WAITERS, SELECT_WAITER} from './types';
export const fetchWaiters = () => dispatch => {    
    fetch('http://localhost:5000/waiters').then(res => res.json())
    .then(waiters => {
            dispatch({
                type: FETCH_WAITERS,
                payload: waiters
            }
        )}
    );
}

export function selectWaiter(data) {  
    return({
      type:SELECT_WAITER,
      payload: data.id
    });
}