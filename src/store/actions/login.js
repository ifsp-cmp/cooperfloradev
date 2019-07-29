import axios from 'axios';

import * as actionTypes from './actionsTypes';

export const loginStart = () => {
	console.log("Cheguei no start");
	return {
		type: actionTypes.LOGIN_START
	};
};

export const loginSuccess = (loginData) => {
	return {
		type: actionTypes.LOGIN_SUCCESS,
		loginData: loginData
	};
};

export const loginFail = (error) => {
	return {
		type: actionTypes.LOGIN_FAIL,
		error: error
	};
};

export const checkAuthTimeout = (expirationTime) => {
	return dispatch => {
		setTimeout(() => {
		//	dispatch(logout());
	  	}, expirationTime * 1000);
	};
}

export const login = (email, password, isSignup) => {
	console.log(email);
	console.log(password);
	console.log("Cheguei no login do store");
	return dispatch => {
		dispatch(loginStart());
		const authData = {
			email: email,
			password: password,
			returnSecureToken: true
		};
		let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDtMtsQXXKNm9_M726endfcCwsYsIxd1cI';
    if (!isSignup) {
      url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDtMtsQXXKNm9_M726endfcCwsYsIxd1cI';
    }
    axios.post(url, authData)
      .then(response => {
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('userId', response.data.localId);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch(loginSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(error => {
        dispatch(loginFail(error.response.data.error));
      });
	};
};
