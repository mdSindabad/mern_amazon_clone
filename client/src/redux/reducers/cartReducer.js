import {ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, UPDATE_CART_QTY} from '../actionTypes/index';

const initialCart = {
    products: []
};


export const cartReducer = (state = initialCart, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const updatedProducts = state.products;
            return {
                ...state,
                products: [...updatedProducts, action.payload]
            }            
            
        case REMOVE_FROM_CART:
            const newProducstList = state.products.filter(product => product._id !== action.payload);
            return {
                ...state,
                products: newProducstList
            }   
            
        case UPDATE_CART_QTY:
            const updatedProduct = state.products.filter(product => product._id !== action.payload._id)
            return {
                ...state,
                products: [...updatedProduct, action.payload]
            }
                
        case CLEAR_CART:
            return initialCart          
                
        default:
            return state
            
    }
};
