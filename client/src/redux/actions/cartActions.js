import {ADD_TO_CART, REMOVE_FROM_CART} from '../actionTypes/index';


// cart action creators
export const add_to_cart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload
    }
};
export const remove_from_cart = (payload) => {
    return {
        type: REMOVE_FROM_CART,
        payload
    }
};


