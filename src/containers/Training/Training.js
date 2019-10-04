import React, { Component } from 'react';
import { connect } from 'react-redux';
import Video from '../../components/Video/Video';

import "./Training.css";
import * as userActions from '../../store/actions/index';

class Training extends Component{ 

	componentDidMount(){
		this.props.recordCurrentTime(this.props.userData);
	}

	render(){
		return(
			<div className="Training">
                {/* <p>Vídeo da Formação</p> */}
                <Video currentTime={this.props.userData.videoTime} />
			</div>
		);
	};
}

const mapStateToProps = state => {
	return {
		userData: state.userData,
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