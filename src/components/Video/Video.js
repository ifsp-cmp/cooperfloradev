import React, { Component }from 'react';
import './Video.css';
import video from '../../assets/videos/videoCooperflora.mp4';

class Video extends Component{

	componentDidMount(){
		var vid = document.getElementById("myVideo");
		if(vid){
			vid.currentTime = this.props.currentTime;
			console.log('[Video] tempo vindo do banco de dados:', this.props.currentTime);
		}
	}

	render(){
		
		return (
			<div className='Video'>
				<video id='myVideo' controls >
					<source src={video} type="video/mp4"  />
					Your browser does not support the video tag.
				</video>
			</div>
		);
	};
}

export default Video;