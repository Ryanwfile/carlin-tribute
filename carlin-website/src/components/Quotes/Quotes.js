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

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
// import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CONSTANTS } from "../../constants";
// import { styled } from "@mui/material/styles";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
SwiperCore.use([Navigation, EffectCoverflow, Pagination, Scrollbar, Autoplay]);
const useStyles = makeStyles({
  media: {
    // height: 0,
    // paddingTop: 0,
    // position: "relative",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "orange",
    // border: "5px solid black",
    // verticalAlign: "baseline",
    // top: "10px",
    // fontSize: "75%",
    // alignContent: "center",
    // lineHeight: "1",
  },
  swiperContainer: {
    // paddingTop: 0,
    // paddingBottom: "3rem",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "orange",
    // border: "5px solid black",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    justifySelf: "center",
    justifyContent: "center",
    justifyItems: "center",
  },
  // cardWrapper: {
  //   // color: "red",
  //   // fontFamily: "Courier Prime",
  // display: "flex",
  // alignContent: "center",
  // alignItems: "center",
  // alignSelf: "center",
  // justifySelf: "center",
  // justifyContent: "center",
  // justifyItems: "center",
  // },
});
function Quotes(props) {
  const { media, swiperContainer } = useStyles();

  return (
    <div
    // style={{
    //   display: "flex",
    //   alignItems: "center",
    //   justifyContent: "center",
    // }}
    >
      <Card
        className={media}
        // style={{
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   backgroundColor: "orange",
        // }}
      >
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          speed={5000}
          // centeredSlides
          textAlign="center"
          className={swiperContainer}
          keyboard={{ enabled: true }}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          loop
          autoplay={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {CONSTANTS.QUOTES.map((quote, index) => {
            return (
              <SwiperSlide className={swiperContainer}>
                <CardContent className={media} key={index}>
                  <Typography
                    variant="h4"
                    style={{
                      // display: "flex",
                      fontFamily: "Courier Prime",
                      fontWeight: "450",
                      // alignSelf: "center",
                      // justifySelf: "center",
                    }}
                  >
                    {quote.quote}
                  </Typography>
                </CardContent>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Card>
    </div>
    // </ThemeProvider>
  );
}
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// function Item(props) {
//   return (
//     <Paper>
//       <h2>{props.item.name}</h2>
//       <p>{props.item.quote}</p>
//       <Button className="CheckButton"></Button>
//     </Paper>
//   );
// }

export default Quotes;
