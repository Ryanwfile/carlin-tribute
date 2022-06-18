import React from "react";
// import styles from "./Images.module.css";
import Carousel from "react-material-ui-carousel";
import { CONSTANTS } from "../../constants";

const styles = (theme) => ({
  Carousel: {
    width: 300,
    margin: "auto",
    height: 250,
  },
  // Media: {
  //   height: 550,
  //   width: "100%",
  // },
});

function Images() {
  return (
    <div className={styles.carouselWrapper}>
      <Carousel interval={100000}>
        {CONSTANTS.IMAGES.map((image) => {
          return <img src={image.src} alt="carlin" />;
        })}
      </Carousel>
    </div>
  );
}

export default Images;
