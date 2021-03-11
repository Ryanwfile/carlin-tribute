import React from 'react';
import './About.css';
import stage_microphone from '../../images/stage_microphone.jpg';

const styles = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${stage_microphone})`
  };

function About(){
    return (
        <div class="about-wrapper">
            <div class = "image-wrapper" style= {styles}>
                {/* <img src={stage_microphone} alt="red curtain stage microphone" /> */}
            </div>
            About George Carlin
        </div>
    )
}

export default About;