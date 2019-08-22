import * as actionsTypes from './actionsTypes';
import firebase from 'firebase/app';

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

export const addUserSuccess = (userData) => {
    return {
        type: actionsTypes.ADD_USER_SUCCESS,
        userData: userData
    };
}

export const addUserFailed = ( error ) => {
    return {
        type: actionsTypes.ADD_USER_FAILED,
        error: error
    };
}

export const addUserStart = () => {
    return {
        type: actionsTypes.ADD_USER_START
    }
}

export const addUser = ( userData ) => {
    return dispatch => {
        console.log("Cheguei no action adduser");
        // dispatch(addUserStart());
        dispatch(addUserStart());

        console.log(userData);
        let userEmail = userData.email;
        let userPassword = userData.password;
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
        .then(function( res ){
            console.log("Retorno da criação do usuário:", res)
            console.log(res.user.uid);
            console.log("Usuário criado com sucesso");
            firebase.firestore().collection("users").doc(res.user.uid).set({
                name: userData.name,
                phone: userData.phone,
                email: userData.email,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(function(docRef) {
                console.log("Dados armazenados com sucesso");
                userData.userId = res.user.uid;
                dispatch(addUserSuccess(userData));
            })
            .catch(function(error) {
                console.error("Erro ao incluir o livro: ", error);
                dispatch(addUserFailed(error));
            });
        })
        .catch(function(error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            dispatch(addUserFailed(error));
        });
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

