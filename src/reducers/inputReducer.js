import {ADD_USN, ADD_USER_MOBILE, ADD_PAYMENT_MODE} from '../actions/types';

const initialState = {
    usn: '',
    userMobile: -1,
    paymentMode: 'CASH'
};

export default function( state = initialState, action) {
    switch(action.type) {
        case ADD_USN:
            return {
                ...state,
                usn: action.payload
            }
        case ADD_USER_MOBILE: 
            return {
                ...state,
                userMobile:action.payload
            }
        case ADD_PAYMENT_MODE: 
            return {
                ...state,
                paymentMode:action.payload
            }
        default :
            return state;
    }
}