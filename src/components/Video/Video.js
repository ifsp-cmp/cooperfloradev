import React, { Component }from 'react';
import './Video.css';
import video from '../../assets/videos/videoteste.mp4';

class Video extends Component{

	render(){
		return (
			<div className='Video'>
				<video id='myVideo' controls>
					<source src={video} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
		);
	};
}

export default Video;