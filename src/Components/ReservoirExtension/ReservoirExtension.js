import * as React from "react";
import { Card, Box, Input, Grid, Paper } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DropdownRE from "./DropdownRE";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(2),
  textAlign: "center",
}));
const center = [-1.252588047374721, 116.82692451046243];
export default function ReservoirExtension() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          p: 3,
          m: 1,
          bgcolor: "blue",
          borderRadius: 1,
        }}
      >
        <Card sx={{ maxWidth: 205 }}>
          <MapContainer
            center={center}
            zoom={10}
            style={{ width: "30vw", height: "30vh" }}
          >
            <TileLayer
              url="https://api.maptiler.com/maps/topographique/256/{z}/{x}/{y}.png?key=sSq3GnIbKcaK12XlMa8j"
              attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
          </MapContainer>

          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Box
          sx={{
            display: "flex",
            p: 1,
            m: 1,
            borderRadius: 1,
          }}
        >
          <Grid container spacing columns={{ xs: 4, sm: 8, md: 12 }}>
            {[
              "TML Prob",
              "Top Full Amp",
              "Top Near Amp",
              "Top Mid Amp",
              "Top Far Amp",
              "Top Ufar Amp",
            ].map((text, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Item>{text} </Item>
              </Grid>
            ))}

            <Button variant="contained" sx={{ marginLeft: 1, paddingY: 0 }}>
              Add to Interactive
            </Button>
          </Grid>
        </Box>
        <Card>
          <CardContent>
            <DropdownRE />
            <Input placeholder="Nama Project" />
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
