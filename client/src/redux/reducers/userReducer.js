import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, SIGN_OUT_USER} from '../actionTypes/index';

const initialState = {
    loading: false,
    user: {},
    isLoggedIn: false,
    error: ''
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
                user: {},
                isLoggedIn: false,
                error: ''
            }            
            break;
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                isLoggedIn: true,
                error: ''
            }            
            break;
        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                user: {},
                isLoggedIn: false,
                error: action.payload
            }            
            break;
        case SIGN_OUT_USER:
            return {
                ...state,
                loading: false,
                user: {},
                isLoggedIn: false,
                error: ''
            }            
            break;
    
        default:
            return state
            break;
    }
};
