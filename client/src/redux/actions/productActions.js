import {GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS} from '../actionTypes/index';
import axios from 'axios';


// products action creators
export const get_products_request = () => {
    return {
        type: GET_PRODUCTS_REQUEST
    }
};
export const get_products_success = (payload) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload
    }
};
export const get_products_failure = (payload) => {
    return {
        type: GET_PRODUCTS_FAILURE,
        payload
    }
};

// fetch products
export const getProducts = () => {
    return dispatch => {
        const products = JSON.parse(sessionStorage.getItem('products'));
        if(products) {
            dispatch(get_products_success(products.data))
        }else {
            dispatch(get_products_request());
            axios.get('/products')
                .then(products => {
                    sessionStorage.setItem('products', JSON.stringify(products))
                    dispatch(get_products_success(products.data))
                })
                .catch(err => dispatch(get_products_failure(err.message)))
        }

    }
}