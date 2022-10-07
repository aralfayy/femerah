import React from "react";
import Dashboard from "../../Pages/Dashboard";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WellData } from "../../Pages/WellData";

import InputWelldata from "../InputWellData/InputWelldata";
import EditWell from "../InputWellData/EditWell";
import { DepthData } from "../DepthData/DepthData";
import UploadCsv from "../InputWellData/UploadCsv";

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
            <Route path="/WellData/DepthData/Edit/:id" element={<EditWell />} />
            <Route path="/WellData/Input" element={<InputWelldata />} />
            <Route path="/WellData/CSVUpload" element={<UploadCsv />} />
            <Route path="/WellData/DepthData/:id" element={<DepthData />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default Content;
