import axios from 'axios';
import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, SIGN_OUT_USER} from '../actionTypes/index';


// user sign-in action creators
export const fetch_user_request = () => {
    return {
        type: FETCH_USER_REQUEST,
    }
};
export const fetch_user_success = (payload) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload
    }
};
export const fetch_user_failure = (payload) => {
    return {
        type: FETCH_USER_FAILURE,
        payload
    }
};
export const sign_out_user = () => {
    return {
        type: SIGN_OUT_USER
    }
};

// sign-in user
export const signInUser = (user) => {
    return dispatch => {
        dispatch(fetch_user_request());
        const localData = JSON.parse(localStorage.getItem('data'));
        if(localData) {
            dispatch(fetch_user_success(localData.user));
        } else {
            axios.post('/user/signin', user)
                .then(res =>{
                    sessionStorage.setItem('data', JSON.stringify(res.data))
                    dispatch(fetch_user_success(res.data.user));
                })
                .catch(err => {
                    dispatch(fetch_user_failure(err.message));
                })
        }
    }
};
// register-in user
export const registerUser = (user) => {
    return dispatch => {
        dispatch(fetch_user_request());
        axios.post('/user/register', user)
            .then(res =>{
                sessionStorage.setItem('data', JSON.stringify(res.data))
                dispatch(fetch_user_success(res.data.user));
            })
            .catch(err => {
                dispatch(fetch_user_failure(err.message));
            })
    }
};

export const signOutUser = () => {
    return dispatch => {
        dispatch(sign_out_user());
    }
}