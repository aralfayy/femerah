import {
  Box,
  Button,
  Card,
  FilledInput,
  FormControl,
  Input,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const InputWelldataProg = () => {
  const [wellName, setwellName] = useState("");
  const [depth, setDepth] = useState("");
  const [twt, setTwt] = useState("");
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

  const saveWell = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/prognosis/", {
        wellName,
        depth,
        twt,
        reservoir,
        survey,
        wellRes,
        horizonName,
        avgAmp,
        minAmp,
        medAmp,
        maxAmp,
        offsetWellCalibration,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // const { id } = useParams();

  // const saveDepth = async (e) => {
  //   e.preventDefault();

  //   const dataList = {
  //     depth: Number(depth),
  //     gr: Number(gr),
  //     nphi: Number(nphi),
  //     vp: Number(vp),
  //     vs: Number(vs),
  //   };
  //   const res = await axios.get(`http://localhost:5000/wells/${id}`);

  //   let listDepth = res.data.depths ? res.data.depths : [];
  //   listDepth.push(dataList);

  //   axios.patch(`http://localhost:5000/wells/${id}`, {
  //     depths: listDepth,
  //   });
  //   navigate(`/WellData/DepthData/${id}`);
  // };

  return (
    <form onSubmit={saveWell}>
      <TextField
        type="text"
        value={wellName}
        label="wellName"
        onChange={(e) => setwellName(e.target.value)}
      ></TextField>
      <TextField
        type="number"
        value={depth}
        label="depth"
        onChange={(e) => setDepth(e.target.value)}
      ></TextField>
      <TextField
        type="number"
        value={twt}
        label="TwT"
        onChange={(e) => setTwt(e.target.value)}
      ></TextField>
      <TextField
        type="text"
        value={reservoir}
        label="Reservoir"
        onChange={(e) => setReservoir(e.target.value)}
      ></TextField>
      <TextField
        type="text"
        value={survey}
        label="survey"
        onChange={(e) => setSurvey(e.target.value)}
      ></TextField>
      <TextField
        type="text"
        value={wellRes}
        label="wellRes"
        onChange={(e) => setWellRes(e.target.value)}
      ></TextField>
      <TextField
        type="text"
        value={horizonName}
        label="horizonName"
        onChange={(e) => setHorizonName(e.target.value)}
      ></TextField>
      <TextField
        type="number"
        value={avgAmp}
        label="Vs"
        onChange={(e) => setAvgAmp(e.target.value)}
      ></TextField>
      <TextField
        type="number"
        value={minAmp}
        label="minAmp"
        onChange={(e) => setMinAmp(e.target.value)}
      ></TextField>
      <TextField
        type="number"
        value={medAmp}
        label="medAmp"
        onChange={(e) => setMedAmp(e.target.value)}
      ></TextField>
      <TextField
        type="number"
        value={maxAmp}
        label="maxAmp"
        onChange={(e) => setMaxAmp(e.target.value)}
      ></TextField>
      <TextField
        type="number"
        value={offsetWellCalibration}
        label="offsetWellCalibration"
        onChange={(e) => setOffsetWellCalibration(e.target.value)}
      ></TextField>
      <Button variant="contained" type="submit">
        Submit
      </Button>
      <Button variant="outlined">Add Depth by Upload CSV </Button>
    </form>
    // </Box>
  );
};

export default InputWelldataProg;
