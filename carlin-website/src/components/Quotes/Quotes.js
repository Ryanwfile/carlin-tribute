import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
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
  swiperContainer: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
});
function Quotes(props) {
  const { swiperContainer } = useStyles();
  return (
    <Card>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        speed={5000}
        centeredSlides
        textAlign="center"
        keyboard={{ enabled: true }}
        loop
        autoplay={true}
        onSlideChange={() => console.log()}
        onSwiper={() => console.log()}
      >
        {CONSTANTS.QUOTES.map((quote, index) => {
          const key = `${index} + ${quote}`;
          return (
            <SwiperSlide className={swiperContainer}>
              <CardContent key={key}>
                <Typography variant="h4">{quote.quote}</Typography>
              </CardContent>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Card>
  );
}

export default Quotes;
