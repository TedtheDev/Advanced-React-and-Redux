import axios from 'axios';
import { browserHistory } from 'react-router';
import { 
    AUTH_USER,
    UNAUTH_USER, 
    AUTH_ERROR
 } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({email, password}) {
    return function(dispatch) {
        // Submit email/password to the server
        axios.post(`${ROOT_URL}/signin`, { email, password})
            .then(response => {
                // If request is good...
                // - Save the JWT Token
                localStorage.setItem('token', response.data.token);
                // - Update state to indicate user is authenticated
                dispatch({type: AUTH_USER})
                // - Redirect to the route '/feature'
                browserHistory.push('/feature');
            })
            .catch(err => {
                // If request is bad....
                // - Show an error to the user
                dispatch(authError('Bad Login Info'));
            });
    }
};

export function signupUser({email, password}) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signup`, { email, password })
            .then(response => {
                console.log(response)
                localStorage.setItem('token', response.data.token);
                dispatch({type: AUTH_USER});
                browserHistory.push('/feature');
            })
            .catch(response => dispatch(authError(response.response.data.error)));
    }
};

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
};

export function signoutUser() {
    localStorage.removeItem('token');

    return { type: UNAUTH_USER }
};

export function fetchMessage() {
    return function(dispatch) {
        axios.get(`${ROOT_URL}/`, {
            headers: { authorization: localStorage.getItem('token') }
        })
            .then(response => {
                console.log(response)
            })
            .catch(err => console.log(err));
    }
};