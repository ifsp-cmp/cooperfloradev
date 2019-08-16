import * as actionsTypes from './actionsTypes';
import firebase from 'firebase/app';

export const addUser = (name, phone, email, password) => {
    console.log("Cheguei no add user");
    return {
        type: actionsTypes.ADD_USER,
        name: name,
        phone: phone,
        email: email, 
        password: password
    };
};

export const removeUser = (userId) => {
    return {
        type: actionsTypes.REMOVE_USER,
        userId: userId
    };
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

export const listUser =( users ) => {
    return {
        type: actionsTypes.LIST_USERS,
        users: users
    }
}

export const listUsersFailed =( error ) => {
    return {
        type: actionsTypes.LIST_USERS_FAILED,
        error: error
    };
}

export const getUsers = () =>{
    console.log("Get Users from actions");
    let users = [];
    return dispatch => {
        firebase.firestore().collection("users").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // console.log(doc.id);
                // console.log(doc.data().name);
                const user = doc.data();
                users.push(user);
            });
            dispatch(listUser(users));
        })
        .catch(function(error){
            console.log(error);
            dispatch(listUsersFailed(error));
        });
    };
}

