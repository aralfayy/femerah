import "./App.css";

import Dashboard from "./Pages/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#c32130",
      },
      secondary: {
        main: "#a4be37",
      },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <Navbar bgcolor="primary" />
      </ThemeProvider>
    </div>
  );
}
