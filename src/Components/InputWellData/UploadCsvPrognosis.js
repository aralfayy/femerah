import {
  Box,
  Typography,
  Button,
  IconButton,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { React, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { parse } from "papaparse";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Delete } from "@mui/icons-material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const UploadCsvPrognosis = () => {
  const [csvData, setCsvData] = useState([]);
  const [wellName, setwellName] = useState("");
  const [depth, setDepth] = useState("");
  const [twt, setTwt] = useState("");
  const [area, setArea] = useState("");
  const [perimeter, setPerimeter] = useState("");
  const [resolution, setResolution] = useState("");
  const [reservoir, setReservoir] = useState("");
  const [survey, setSurvey] = useState("");
  const [wellRes, setWellRes] = useState("");
  const [horizonName, setHorizonName] = useState("");
  const [avgAmp, setAvgAmp] = useState("");
  const [minAmp, setMinAmp] = useState("");
  const [medAmp, setMedAmp] = useState("");
  const [maxAmp, setMaxAmp] = useState("");
  const [offsetWellCalibration, setOffsetWellCalibration] = useState("");
  const navigate = useNavigate();

  const [deleteData, setDeleteData] = useState([]);

  const { id } = useParams();

  const saveDepth = async (e) => {
    e.preventDefault();

    const dataMap = csvData.map((res, i) => ({
      wellName: res.wellName,
      depth: parseInt(res.depth),
      twt: parseInt(res.twt),
      area: res.area,
      perimeter: res.perimeter,
      resolution: parseInt(res.resolution),
      reservoir: res.reservoir,
      survey: res.survey,
      wellRes: parseInt(res.wellRes),
      horizonName: res.horizonName,
      avgAmp: parseInt(res.avgAmp),
      minAmp: parseInt(res.minAmp),
      medAmp: parseInt(res.medAmp),
      maxAmp: parseInt(res.maxAmp),
      offsetWellCalibration: parseInt(res.offsetWellCalibration),
    }));

    dataMap.map(async (res, i) => {
      // console.log(res);
      try {
        await axios.post(`http://localhost:5000/prognosis/`, res);
        navigate(`/WellDataPrognosis`);
      } catch (error) {
        console.log(error);
      }
    });

    // listDepth.push(dataMap);
  };
  const deleteDepth = (index) => {
    const delData = csvData.splice(index, 1);
    setDeleteData(delData);
    deleteData();
    console.log(csvData);
  };
  // const deleteDepth = async () => {
  //   const dataMap = csvData.map((res, i) => ({
  //     wellName: res.wellName,
  //     depth: parseInt(res.depth),
  //     twt: parseInt(res.twt),
  //     area: res.area,
  //     perimeter: res.perimeter,
  //     resolution: parseInt(res.resolution),
  //     reservoir: res.reservoir,
  //     survey: res.survey,
  //     wellRes: parseInt(res.wellRes),
  //     horizonName: res.horizonName,
  //     avgAmp: parseInt(res.avgAmp),
  //     minAmp: parseInt(res.minAmp),
  //     medAmp: parseInt(res.medAmp),
  //     maxAmp: parseInt(res.maxAmp),
  //     offsetWellCalibration: parseInt(res.offsetWellCalibration),
  //   }));

  //   dataMap.map(async (index) => {
  //     // console.log(res);
  //     csvData.splice(index, 1);
  //   });
  // };

  return (
    <div>
      <Box
        style={{
          textAlign: "center",
          height: "300px",
          border: "5px solid black",
          margin: "10%",
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={async (e) => {
          e.preventDefault();
          Array.from(e.dataTransfer.files).map(async (file) => {
            let text = await file.text();
            let res = parse(text, { header: true });
            res.data.pop();
            setCsvData(res.data);
            // setCsvData(csvData.pop());
          });
        }}
        onSubmit={saveDepth}
      >
        <Typography style={{ fontSize: "45px" }}>
          Drop Your File Here
        </Typography>
      </Box>

      <TableContainer component={Paper} onSubmit={saveDepth}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <Button variant="outlined" type="submit" onClick={saveDepth}>
              Save
            </Button>

            <TableRow>
              <StyledTableCell>Nama Well</StyledTableCell>
              <StyledTableCell align="right">Reservoir</StyledTableCell>
              <StyledTableCell align="right">Survey</StyledTableCell>
              <StyledTableCell align="right">WellRes</StyledTableCell>
              <StyledTableCell align="right">Horizon Name</StyledTableCell>
              <StyledTableCell align="right">TwT</StyledTableCell>
              <StyledTableCell align="right">Depth</StyledTableCell>
              <StyledTableCell align="right">Area</StyledTableCell>
              <StyledTableCell align="right">Perimeter</StyledTableCell>
              <StyledTableCell align="right">Resolution</StyledTableCell>
              <StyledTableCell align="right">Average Amplitude</StyledTableCell>
              <StyledTableCell align="right">Min Amplitude</StyledTableCell>
              <StyledTableCell align="right">Median Amplitude</StyledTableCell>
              <StyledTableCell align="right">Max Amplitude</StyledTableCell>
              <StyledTableCell align="right">
                Offset Well Calibration
              </StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {csvData.map((well, i) => (
              <StyledTableRow key={well._id}>
                <StyledTableCell component="th" scope="row">
                  {well.wellName}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {well.reservoir}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {well.survey}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {well.wellRes}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {well.horizonName}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {well.twt}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {well.depth}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {well.area}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {well.perimeter}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {well.resolution}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {well.avgAmp}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {well.minAmp}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {well.medAmp}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {well.maxAmp}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {well.offsetWellCalibration}
                </StyledTableCell>
                <Button
                  onClick={() => deleteDepth(i)}
                  variant="outlined"
                  startIcon={<Delete />}
                >
                  Delete
                </Button>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UploadCsvPrognosis;
