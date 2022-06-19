import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import { CONSTANTS } from "../../constants";
// import { styled } from "@mui/material/styles";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

function Quotes(props) {
  return (
    <Carousel interval={5000}>
      {CONSTANTS.QUOTES.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.quote}</p>
      <Button className="CheckButton"></Button>
    </Paper>
  );
}

export default Quotes;
