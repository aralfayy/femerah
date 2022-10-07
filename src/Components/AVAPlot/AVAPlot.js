import { Box, Button, styled } from "@mui/material";
import React, { Component } from "react";
import Plot from "react-plotly.js";
import AVARadius from "./AVARadius";
import Depth from "./Depth";
import GeobodyID from "./GeobodyID";
import Well from "./Well";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#a4be37"),
  margin: 2,
  backgroundColor: "#a4be37",
  "&:hover": {
    backgroundColor: "#a4be37",
  },
}));

export default function Avaplot() {
  return (
    <div>
      <Box display="flex">
        <Plot
          data={[
            {
              type: "line",
              x: ["one", "two", "three"],
              y: [29, 150, 85],
            },
          ]}
          layout={{ width: 500, height: 500, title: "AVA Plot" }}
        />
        <Box>
          <AVARadius />
          <GeobodyID />
          <Well />
          <Depth />
          <ColorButton>Average Trend</ColorButton>
          <ColorButton>Average Trend</ColorButton>
          <ColorButton>Average Trend</ColorButton>
        </Box>
      </Box>
    </div>
  );
}
