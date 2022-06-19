import { Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Swiper, SwiperSlide, autoplay } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

import { CONSTANTS } from "../../constants";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

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
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        centeredSlides
        grabCursor
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        navigation
        loop
        autoplay={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {CONSTANTS.IMAGES.map((image, index) => {
          return (
            <SwiperSlide>
              <CardMedia image={image.src} className={media} key={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Card>
  );
}
