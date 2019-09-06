import firebase from 'firebase/app';

export const recordCurrentTime = (userId, time) => {
    return dispatch => {
        console.log('[videoactions',time);
        let tempo = setInterval(
            function() { 
                let vid = document.getElementById("myVideo");
                if(vid){
                    console.log(vid);
                    console.log(vid.currentTime);
                } else {
                    clearInterval(tempo);
                }
            }, 1000
            );
            var user = firebase.firestore().collection("users").doc(userId);
            
            return user.update({
                time: 13
            })
            .then(function() {
                console.log("Document successfully updated!");
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
            
            
            
            // dispatch(loginStart());
            // firebase.auth().signInWithEmailAndPassword(email, password)
            // .then(function( data ){
            //     // console.log("Usuário logado com sucesso");
            //     // console.log( data );
            //     // console.log(data.user.uid);
            //     let docRef = firebase.firestore().collection("users").doc(data.user.uid);
            //     docRef.get()
            //     .then(function(doc) {
            //         if (doc.exists) {
            //             // console.log("Document data:", doc.data());
            //             let userData = doc.data();
            //             userData.userId = data.user.uid;
            //             // console.log(userData);
            //             dispatch(loginSuccess( userData ));
            //         } else {
            //             // doc.data() will be undefined in this case
            //             // console.log("No such document!");
            //         }
            //     })
            //     .catch(function(error) {
            //         console.log("Error getting document:", error);
            //     });
            // })
            // .catch(function(error) {
            //     var errorCode = error.code;
            //     var errorMessage = error.message;
            //     // console.log(errorMessage);
            //     // console.log(errorCode);
            //     dispatch(loginFail(errorMessage));
            // });
        }
    }