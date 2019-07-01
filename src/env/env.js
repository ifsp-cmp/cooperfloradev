import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC7NYBkoDeNIriLWn_8Imu3VVSszVXaOcc",
  authDomain: "cooperflora-76823.firebaseapp.com",
  databaseURL: "https://cooperflora-76823.firebaseio.com",
  projectId: "cooperflora-76823",
  storageBucket: "cooperflora-76823.appspot.com",
  messagingSenderId: "700860511446",
  appId: "1:700860511446:web:dc39e11dae571f21"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database()