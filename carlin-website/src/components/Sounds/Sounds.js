import React from 'react';
import styles from './Sounds.module.css';
import { CONSTANTS } from '../../constants';

class Sounds extends React.Component {
    render() {
        return (
            <div>
                {CONSTANTS.SOUNDS.map(sound => {
                    return (
                        <div className={styles.soundPlayer}>
                            <h4>{sound.name}</h4>
                            <audio
                                controls
                                src={sound.src} >
                            </audio>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Sounds;