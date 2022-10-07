import { Box, Button, styled, Typography } from "@mui/material";
import React, { Component } from "react";
import Plot from "react-plotly.js";

export default function TMLNPDist() {
  return (
    <div>
      <Box>
        <Plot
          data={[
            {
              type: "bar",
              x: ["one", "two", "three"],
              y: [29, 150, 85],
            },
          ]}
          layout={{
            width: 500,
            height: 500,
            title: "TML NP Distribution Per GTS",
          }}
        />
      </Box>
    </div>
  );
}
