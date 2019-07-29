import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

// import currentEnv from './env';

const firebaseSetup = () => {
    const config = {
        apiKey: "AIzaSyC7NYBkoDeNIriLWn_8Imu3VVSszVXaOcc",
        authDomain: "cooperflora-76823.firebaseapp.com",
        databaseURL: "https://cooperflora-76823.firebaseio.com",
        projectId: "cooperflora-76823",
        storageBucket: "cooperflora-76823.appspot.com",
        messagingSenderId: "700860511446",
        appId: "1:700860511446:web:dc39e11dae571f21"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(config);
        firebase.firestore().enablePersistence();
    }
};

export default firebaseSetup;
