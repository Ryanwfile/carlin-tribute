import React from 'react';
import './ImageCarousel.css';
import Carousel from 'react-material-ui-carousel';
import {CONSTANTS} from '../../constants';

function ImageCarousel() {
          return (
            <div class="carousel-wrapper">
                <Carousel interval={4000} >
                    {CONSTANTS.IMAGES.map(item => {
                        return (
                            <div>
                            <img src={item.src} alt="carlin" />
                            <p className="legend">{item.name}</p>
                        </div>
                        )
                    })}
                </Carousel>
            </div>
        )
    }


export default ImageCarousel;