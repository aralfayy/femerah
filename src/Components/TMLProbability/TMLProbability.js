import { Box, Button, styled, Typography } from "@mui/material";
import React, { Component } from "react";
import Plot from "react-plotly.js";

export default function TMLProbability() {
  return (
    <div>
      <Box>
        <Plot
          data={[
            {
              x: [1, 2, 3, 4, 5],
              y: [1, 6, 3, 6, 1],
              mode: "markers",
              type: "scatter",
              name: "Team A",
              text: ["A-1", "A-2", "A-3", "A-4", "A-5"],
              marker: { size: 12 },
            },
            {
              x: [1.5, 2.5, 3.5, 4.5, 5.5],
              y: [4, 1, 7, 1, 4],
              mode: "markers",
              type: "scatter",
              name: "Team B",
              text: ["B-a", "B-b", "B-c", "B-d", "B-e"],
              marker: { size: 12 },
            },
          ]}
          layout={{
            width: 500,
            height: 500,
            title: "TML Probability",
          }}
        />
      </Box>
    </div>
  );
}
