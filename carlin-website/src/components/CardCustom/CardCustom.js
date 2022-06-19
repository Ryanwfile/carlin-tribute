import { Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import { CONSTANTS } from "../../constants";

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: "100%",
  },
});

export default function CardCustom(cardCustomProps) {
  const { media } = useStyles();
  return (
    <Card>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        centeredSlides
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {CONSTANTS.IMAGES.map((image) => {
          return (
            <SwiperSlide>
              <CardMedia image={image.src} className={media} />
              {/* <div class="swiper-pagination"></div>

              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>

              <div class="swiper-scrollbar"></div> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Card>
  );
}
