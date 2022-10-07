import * as React from "react";
import { Box, Paper } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(2),
  textAlign: "center",
}));

export default function SelectedGeo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        m: 3,
        bgcolor: "background.paper",
        borderRadius: 1,
      }}
    >
      <Item sx={{ mb: 2 }}>Highest Probability Geobody</Item>
      <Item sx={{ mb: 2 }}>Netpay</Item>
      <Item sx={{ mb: 2 }}>Reserves</Item>
      <Item sx={{ mb: 2 }}>Geobody ID, Depth, Xcord, Y Cord</Item>
    </Box>
  );
}
