import {FETCH_MENU} from './types';
export const fetchMenu = () => dispatch => {    
    fetch('http://localhost:5000/menu').then(res => res.json())
    .then(menus => {
            dispatch({
                type: FETCH_MENU,
                payload: menus
            }
        )}
    );
}