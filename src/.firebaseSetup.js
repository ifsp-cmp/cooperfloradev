import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

const firebaseSetup = () => {
    
    let firebaseConfig = null;
    if(process.env.NODE_ENV === 'development'){
        firebaseConfig = {
            apiKey: "AIzaSyAPETTQcyE9vSbLqPpEfqbPvzeDykZyDZ8",
            authDomain: "cooperfloradev.firebaseapp.com",
            databaseURL: "https://cooperfloradev.firebaseio.com",
            projectId: "cooperfloradev",
            storageBucket: "",
            messagingSenderId: "25698003460",
            appId: "1:25698003460:web:f547da0f2b2fca332f2351"
        };
    } else {
        firebaseConfig = {
            apiKey: "AIzaSyC7NYBkoDeNIriLWn_8Imu3VVSszVXaOcc",
            authDomain: "cooperflora-76823.firebaseapp.com",
            databaseURL: "https://cooperflora-76823.firebaseio.com",
            projectId: "cooperflora-76823",
            storageBucket: "cooperflora-76823.appspot.com",
            messagingSenderId: "700860511446",
            appId: "1:700860511446:web:dc39e11dae571f21"
        }
    };
    
    // console.log('[Firebase env]', firebaseConfig);
    
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        firebase.firestore().enablePersistence();
    }
};

export default firebaseSetup;
