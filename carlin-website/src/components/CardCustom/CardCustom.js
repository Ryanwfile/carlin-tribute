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
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { CONSTANTS } from "../../constants";

SwiperCore.use([Navigation, EffectCoverflow, Pagination, Scrollbar, Autoplay]);
const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: "100%",
  },
});

export default function CardCustom(cardProps) {
  const { media } = useStyles();
  return (
    <Card>
      <Swiper
        spaceBetween={75}
        slidesPerView={3}
        centeredSlides
        keyboard={{ enabled: true }}
        loop
        autoplay={true}
        onSlideChange={() => console.log()}
        onSwiper={() => console.log()}
      >
        {CONSTANTS.IMAGES.map((image, index) => {
          const key = `${index} + ${image.src}`;
          return (
            <SwiperSlide>
              <CardMedia image={image.src} className={media} key={key} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Card>
  );
}
