import {ADD_USN, ADD_USER_MOBILE, ADD_PAYMENT_MODE} from './types';

export function addUsn(data) {  
    return({
      type:ADD_USN,
      payload: data
    });
}

export function addUserMobile(data) {  
    return({
      type:ADD_USER_MOBILE,
      payload: data
    });
}

export function addPaymentMode(data) {  
    return({
      type:ADD_PAYMENT_MODE,
      payload: data
    });
}