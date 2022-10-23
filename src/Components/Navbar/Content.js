import React from "react";
import Dashboard from "../../Pages/Dashboard";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WellData } from "../../Pages/WellData";
import { WellDataPrognosis } from "../../Pages/WellDataPrognosis";

import InputWelldata from "../InputWellData/InputWelldata";
import InputWelldataProg from "../InputWellData/InputWelldataProg";
import EditWell from "../InputWellData/EditWell";
import { DepthData } from "../DepthData/DepthData";
import UploadCsv from "../InputWellData/UploadCsv";
import AddWell from "../InputWellData/AddWell";
import UploadCsvPrognosis from "../InputWellData/UploadCsvPrognosis";

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
const Content = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/WellData" element={<WellData />} />
            <Route path="/WellDataPrognosis" element={<WellDataPrognosis />} />
            <Route
              path="/WellData/DepthData/Edit/:id/:index"
              element={<EditWell />}
            />
            <Route path="/WellData/AddWell" element={<AddWell />} />
            <Route path="/WellData/Input/:id" element={<InputWelldata />} />
            <Route
              path="/WellData/InputPrognosis/"
              element={<InputWelldataProg />}
            />
            <Route
              path="/WellData/InputCsvPrognosis/"
              element={<UploadCsvPrognosis />}
            />
            <Route path="/WellData/CSVUpload/:id" element={<UploadCsv />} />
            <Route path="/WellData/DepthData/:id" element={<DepthData />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default Content;
