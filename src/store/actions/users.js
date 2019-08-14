import * as actionsTypes from './actionsTypes';

export const addUser = () => {
    return null;
};

export const removeUser = () => {
    return null;
};

export const loginStart = (email, password) => {
    console.log("Cheguei no novo login start");
    console.log(email);
    return {
        type: actionsTypes.LOGIN_START, 
        email: email, 
        password: password
    }
};

export const loginSuccess = () => {
    return null;
};

export const loginFail = () => {
    return null
};

