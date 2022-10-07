import { Box, Button, Typography } from "@mui/material";
import * as React from "react";

export default function RecommendationGeobody() {
  return (
    <Box display="flex" sx={{ p: 5 }}>
      <Typography>Nama Geobody</Typography>
      <Button variant="contained" sx={{ ml: 2, flexgrow: 2 }}>
        View
      </Button>
      <Button variant="contained" sx={{ ml: 2, flexgrow: 2 }}>
        Add to Interactive
      </Button>
    </Box>
  );
}
