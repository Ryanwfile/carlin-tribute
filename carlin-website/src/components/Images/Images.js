import React from "react";
import styles from "./Images.module.css";
import Carousel from "react-material-ui-carousel";
import { CONSTANTS } from "../../constants";

function Images() {
  return (
    <div className={styles.carouselWrapper}>
      <Carousel interval={4000}>
        {CONSTANTS.IMAGES.map((image) => {
          return (
            <div>
              <img src={image.src} alt="carlin" />
              <p>{image.name}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Images;
