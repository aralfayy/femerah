import {
  Box,
  Button,
  IconButton,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@mui/material";

import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { InputWelldataProg } from "../Components/InputWellData/InputWelldataProg";
import { Add, Delete, Edit } from "@mui/icons-material/";
import axios from "axios";
import { Link } from "react-router-dom";

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

export const WellDataPrognosis = () => {
  const [well, setWell] = useState([]);
  const [addData, setaddData] = useState([]);
  // const [csvData, setCsvData] = useState([]);
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
  const [reload, setReload] = useState(false);

  useEffect(() => {
    getWellData();
  }, [reload]);

  const getWellData = async () => {
    const res = await axios.get("http://localhost:5000/prognosis");

    setWell(res.data);
  };
  const addWellData = async () => {
    const res = await axios.post("http://localhost:5000/prognosis");
    console.log(res);
    setWell(res.data);
  };

  const deleteWell = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/prognosis/${id}`);
      getWellData();
    } catch (error) {
      console.log(error);
    }
  };
  const saveDepth = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:5000/prognosis/`, {
        wellName,
        depth: parseInt(depth),
        twt: parseInt(twt),
        area,
        perimeter,
        resolution: parseInt(resolution),
        reservoir,
        survey,
        wellRes: parseInt(wellRes),
        horizonName,
        avgAmp: parseInt(avgAmp),
        minAmp: parseInt(minAmp),
        medAmp: parseInt(medAmp),
        maxAmp: parseInt(maxAmp),
        offsetWellCalibration: parseInt(offsetWellCalibration),
      });
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button
        component={Link}
        to="/WellData/InputCsvPrognosis"
        variant="outlined"
      >
        Add Well Data by CSV
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
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
            {well.map((well, i) => (
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

                <StyledTableCell align="right">
                  <Button
                    onClick={() => deleteWell(well._id)}
                    variant="outlined"
                    startIcon={<Delete />}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          <TableBody onSubmit={saveDepth}>
            <StyledTableRow key={well._id}>
              <StyledTableCell component="th" scope="row">
                <TextField
                  type="text"
                  onChange={(e) => {
                    setwellName(e.target.value);
                    e.target.value = 0;
                  }}
                ></TextField>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <TextField
                  type="text"
                  onChange={(e) => {
                    setReservoir(e.target.value);
                    e.target.value = 0;
                  }}
                ></TextField>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <TextField
                  type="text"
                  onChange={(e) => {
                    setSurvey(e.target.value);
                  }}
                ></TextField>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <TextField
                  type="text"
                  onChange={(e) => {
                    setWellRes(e.target.value);
                  }}
                ></TextField>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <TextField
                  type="text"
                  onChange={(e) => {
                    setHorizonName(e.target.value);
                  }}
                ></TextField>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <TextField
                  type="number"
                  onChange={(e) => {
                    setTwt(e.target.value);
                  }}
                ></TextField>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <TextField
                  type="text"
                  onChange={(e) => {
                    setDepth(e.target.value);
                  }}
                ></TextField>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <TextField
                  type="text"
                  onChange={(e) => {
                    setArea(e.target.value);
                  }}
                ></TextField>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <TextField
                  type="text"
                  onChange={(e) => {
                    setPerimeter(e.target.value);
                  }}
                ></TextField>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <TextField
                  type="number"
                  onChange={(e) => {
                    setResolution(e.target.value);
                  }}
                ></TextField>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <TextField
                  type="number"
                  onChange={(e) => {
                    setAvgAmp(e.target.value);
                  }}
                ></TextField>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <TextField
                  type="number"
                  onChange={(e) => {
                    setMinAmp(e.target.value);
                  }}
                ></TextField>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <TextField
                  type="number"
                  onChange={(e) => {
                    setMedAmp(e.target.value);
                  }}
                ></TextField>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <TextField
                  type="number"
                  onChange={(e) => {
                    setMaxAmp(e.target.value);
                  }}
                ></TextField>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <TextField
                  type="number"
                  onChange={(e) => {
                    setOffsetWellCalibration(e.target.value);
                  }}
                ></TextField>
              </StyledTableCell>

              <StyledTableCell align="right">
                <Button
                  variant="contained"
                  type="submit"
                  onClick={saveDepth}
                  startIcon={<Add />}
                >
                  Add Data
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
