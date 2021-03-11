import React from 'react';
import './Sounds.css';
import { CONSTANTS } from '../../constants';
const styles = {
    display: "inline-block"
}
class Sounds extends React.Component {
    
    render() {
        return (
            <div>
                {CONSTANTS.SOUNDS.map(item => {
                    return (
                        <div style={styles}>
                            <h4>{item.name}</h4>
                            <audio
                                controls
                                src={item.src} >
                            </audio>
                        </div>
                    )

                })}

            </div>
        )
    }
}

export default Sounds;