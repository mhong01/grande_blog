import {LOGIN_SUCCESS, LOGIN_FAILED} from '../ReduxConstants/Constants';

export function loginSuccess(payload) {
    return { type: LOGIN_SUCCESS, payload }
};

export function loginFailed(payload) {
    return { type: LOGIN_FAILED, payload }
};