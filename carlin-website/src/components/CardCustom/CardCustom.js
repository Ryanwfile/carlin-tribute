import { Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  EffectCoverflow,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
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
// import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from "swiper";

SwiperCore.use([Navigation, EffectCoverflow, Pagination, Scrollbar, Autoplay]);
const useStyles = makeStyles({
  media: {
    height: "2vh",
    paddingTop: "100%",
  },
  swiperContainer: {
    paddingTop: 0,
    paddingBottom: "3rem",
  },
});

export default function CardCustom(cardCustomProps) {
  const { media, swiperContainer } = useStyles();

  return (
    <Card>
      <Swiper
        // modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        centeredSlides
        grabCursor
        className={swiperContainer}
        keyboard={{ enabled: true }}
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
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
