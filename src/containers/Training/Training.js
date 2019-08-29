import React, { Component } from 'react';
import video from '../../assets/videos/videoteste.mp4';

import './Training.css';

class Training extends Component{
    
    render(){
        return (
            <div className="Training">
                <p>Training page</p>
                <video controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            )
        }
    }
    
    export default Training;