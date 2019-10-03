import {
    AUTH_LOGIN_START,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_ERROR,
    AUTH_LOGOUT,
} from './login.const';

import { loginService } from '../../../services/login.services';

export const logoutActionCreator = () => ({
    type: AUTH_LOGOUT,
    payload: null,
})

const startActionCreator = () => ({
    type: AUTH_LOGIN_START,
    payload: null,
})

const successActionCreator = (data) => ({
    type: AUTH_LOGIN_SUCCESS,
    payload: data,
})

const errorActionCreator = (errorMessage) => ({ 
    type: AUTH_LOGIN_ERROR,
    payload: errorMessage,
})

export const loginActionsAsyncCreator = (email, password) => {
    return (dispatch, getStore) => {
        dispatch(startActionCreator());

        loginService({username: email, password: password }).then(data => {
            localStorage['token']= data.token;
            dispatch(successActionCreator(data.data));
        }).catch(err => {
            dispatch(errorActionCreator(err));
        })
    }
}  