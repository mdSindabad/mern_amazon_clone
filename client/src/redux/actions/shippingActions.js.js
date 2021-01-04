import {ADD_SHIPPING_ADDRESS, REMOVE_SHIPPING_ADDRESS} from '../actionTypes/index';


// shipping action creators
export const add_shipping_address = (payload) => {
    return {
        type: ADD_SHIPPING_ADDRESS,
        payload
    }
};
export const remove_shipping_address = () => {
    return {
        type: REMOVE_SHIPPING_ADDRESS
    }
};


