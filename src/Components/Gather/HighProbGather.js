import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Card, Box, Input, Grid, Paper, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(2),
  textAlign: "center",
}));

export default function HighProbGather() {
  return (
    <Box sx={{ p: 1, m: 1, borderRadius: 1, bgcolor: "green", width: 750 }}>
      <Typography>High Probability Geobody</Typography>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Grid container spacing columns={{ xs: 4, sm: 8, md: 12 }}>
          {["Top Near Amp", "Top Mid Amp", "Top Far Amp"].map((text, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>{text} </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
