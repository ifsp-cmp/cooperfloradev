import * as actionTypes from '../actions/actionsTypes';
// import firebaseSetup from '../../firebaseSetup';

const initialState = {
  userData:{
    name: null,
    phone: null,
    email: null,
    password: null,
    token: null,
    userId: null
  },
  users: null,
  error: false,
  loading: false,
  authRedirect: '/'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER_START:
      return {
        ...state,
        loading: true
    }
    case actionTypes.ADD_USER_SUCCESS:
      return {
        ...state,
        userData: action.userData,
        loading: false
    }
    case actionTypes.ADD_USER_FAILED:
      return {
        ...state,
        loading: false
    }
    case actionTypes.LOGIN_START:
      // console.log("Cheguei no start");
      // console.log(action.email);
      // console.log(action.password);

      // console.log(firebaseSetup);

      // firebase.auth().signInWithEmailAndPassword(action.email, action.password)
      // .then(function(){
      //   console.log("Usuário logado com sucesso");
      // })
      // .catch(function(error) {
      //   // Handle Errors here.
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //   console.log(errorMessage);
      //   //document.getElementById("errorMessage").innerText = errorMessage;
      // });

      return {
        ...state,
        error: null,
        loading: true
      }
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        error: null,
        loading: false
      }
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case actionTypes.LIST_USERS:
      // console.log(action);
      return{
        ...state,
        users: action.users,
        error: false,
        loading: false
      }
    case actionTypes.LIST_USERS_FAILED:
        return{
          ...state,
          error: true,
          loading: false
        }
    default:
      return state;
  }
}

export default reducer;