import firebase from 'firebase/app';
import * as actionsTypes from './actionsTypes';

export const updateVideoTime = (userData) => {
    return {
        type: actionsTypes.UPDATE_VIDEO_TIME,
        userData: userData
    };   
}

export const recordCurrentTime = (userData) => {
    return dispatch => {
        let videoTime = null;
        let tempo = setInterval(
            function() { 
                let video = document.getElementById("myVideo");
                if(video){
                    console.log(video.currentTime);
                    videoTime = video.currentTime;
                    var user = firebase.firestore().collection("users").doc(userData.userId);
                    return user.update({
                        videoTime: videoTime
                    })
                    .then(function() {
                        console.log("Document successfully updated!");
                        userData.videoTime = videoTime;
                        dispatch(updateVideoTime(userData));
                    })
                    .catch(function(error) {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
                } else {
                    clearInterval(tempo);
                }
            }, 10000);           
        }
    }