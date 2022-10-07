import { Box, Card, Typography } from "@mui/material";
import * as React from "react";
import Plot from "react-plotly.js";

export default function TMLDistribution() {
  return (
    <div>
      <Box sx={{ m: 3 }}>
        <Card sx={{ p: 3 }}>
          <Plot
            data={[
              {
                values: [16, 15, 12, 6, 5, 4, 42],
                labels: [
                  "US",
                  "China",
                  "European Union",
                  "Russian Federation",
                  "Brazil",
                  "India",
                  "Rest of World",
                ],
                domain: { column: 0 },
                name: "GHG Emissions",
                hoverinfo: "label+percent+name",
                hole: 0.4,
                type: "pie",
              },
            ]}
            layout={{
              title: "TML Reserves Distribution",
              height: 400,
              width: 600,
              showlegend: false,
            }}
          />
          <Typography sx={{ textAlign: "center" }}>Netpay : m</Typography>
          <Typography sx={{ textAlign: "center" }}>Reserves : bcf</Typography>
        </Card>
      </Box>
    </div>
  );
}
