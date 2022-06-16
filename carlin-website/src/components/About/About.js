import React from 'react';
import styles from './About.module.css';
import stage_microphone from '../../images/stage_microphone.jpg';
import { CONSTANTS } from '../../constants';

function About(){
    return (
        <div className={styles.aboutWrapper}>
            <div>
                <img src= {stage_microphone} alt ="red curtain stage" />
               {CONSTANTS.ABOUT} 
            </div>
        </div>
    )
}

export default About;