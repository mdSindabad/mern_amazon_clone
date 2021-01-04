import {ADD_SHIPPING_ADDRESS, REMOVE_SHIPPING_ADDRESS} from '../actionTypes/index';

const initialState = {

};


export const shippingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SHIPPING_ADDRESS:
            return {
                ...action.payload
            }        
        case REMOVE_SHIPPING_ADDRESS:
            return initialState       
        default:
            return state
    }
};
