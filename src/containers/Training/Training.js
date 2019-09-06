import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Video from '../../components/Video/Video';

import "./Training.css";
import * as userActions from '../../store/actions/index';

class Training extends Component{ 

	render(){
        this.props.recordCurrentTime(this.props.userId, 10);
		// let tempo = setInterval(
		// 	function() { 
        //         let vid = document.getElementById("myVideo");
		// 		if(vid){
		// 			console.log(vid);
        //             console.log(vid.currentTime);
        //             this.props.recordCurrentTime(vid.currentTime);
		// 		} else {
		// 			clearInterval(tempo);
		// 		}
        //     }, 1000
		// );
		return(
			<div className="Training">
                <p>Training</p>
                <Video />
				
			</div>
		);
	};
}

const mapStateToProps = state => {
	return {
		userId: state.userData.userId,
		error: state.error,
		loading: state.loading,
		isUserAuthenticated: state.userData.userId !== null
	}
}

const mapDispatchToProps = dispatch => {
	return{
        recordCurrentTime: (time) => dispatch(userActions.recordCurrentTime(time))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Training); 