// import * as React from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`simple-tabpanel-${index}`}
//         aria-labelledby={`simple-tab-${index}`}
//         {...other}
//       >
//         {value === index && (
//           <Box sx={{ p: 3, bgcolor: "primary.main", color: "primary.main" }}>
//             <Typography>{children}</Typography>
//           </Box>
//         )}
//       </div>
//     </ThemeProvider>
//   );
// }

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// export default function Excerpts() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Box
//         sx={{ width: "100%", bgcolor: "primary.main", color: "primary.main" }}
//       >
//         <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             aria-label="basic tabs example"
//             centered
//           >
//             <Tab label="Item One" {...a11yProps(0)} />
//             <Tab label="Item Two" {...a11yProps(1)} />
//             <Tab label="Item Three" {...a11yProps(2)} />
//           </Tabs>
//         </Box>
//         <TabPanel value={value} index={0}>
//           <Item>Item 1</Item>
//         </TabPanel>
//         <TabPanel value={value} index={1}>
//           <Item>Item Two</Item>
//         </TabPanel>
//         <TabPanel value={value} index={2}>
//           Item Three
//         </TabPanel>
//       </Box>
//     </ThemeProvider>
//   );
// }
