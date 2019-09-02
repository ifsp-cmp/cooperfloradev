import React from 'react';
import './Video.css';
import video from '../../assets/videos/videoteste.mp4';

const Video = () => {
	return (
		<div className='Video'>
			<video controls>
				<source src={video} type="video/mp4" />
				Your browser does not support the video tag.
            </video>
		</div>
	);
}

export default Video;