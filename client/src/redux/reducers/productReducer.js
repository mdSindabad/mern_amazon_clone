import {GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE} from '../actionTypes/index';

const initialState = {
    isLoading: false,
    products: [],
    error: ''
};


export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                products: [],
                error: ''
            }                    
                
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                error: ''
            }                    
                
        case GET_PRODUCTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                products: [],
                error: action.payload
            }                    
                
        default:
            return state
            
    }
};
