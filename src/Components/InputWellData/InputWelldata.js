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

const InputWelldata = () => {
  const [depth, setDepth] = useState("");
  const [gr, setGr] = useState("");
  const [nphi, setNphi] = useState("");
  const [vp, setVp] = useState("");
  const [vs, setVs] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  const saveDepth = async (e) => {
    e.preventDefault();

    const dataList = {
      depth: Number(depth),
      gr: Number(gr),
      nphi: Number(nphi),
      vp: Number(vp),
      vs: Number(vs),
    };
    const res = await axios.get(`http://localhost:5000/wells/${id}`);

    let listDepth = res.data.depths ? res.data.depths : [];
    listDepth.push(dataList);

    axios.patch(`http://localhost:5000/wells/${id}`, {
      depths: listDepth,
    });
    navigate(`/WellData/DepthData/${id}`);
  };

  return (
    <form onSubmit={saveDepth}>
      <TextField
        type="number"
        value={depth}
        label="Depth"
        onChange={(e) => setDepth(e.target.value)}
      ></TextField>
      <TextField
        type="number"
        value={gr}
        label="Gammaray"
        onChange={(e) => setGr(e.target.value)}
      ></TextField>
      <TextField
        type="number"
        value={nphi}
        label="Neutron Porosity"
        onChange={(e) => setNphi(e.target.value)}
      ></TextField>
      <TextField
        type="number"
        value={vp}
        label="Vp"
        onChange={(e) => setVp(e.target.value)}
      ></TextField>
      <TextField
        type="number"
        value={vs}
        label="Vs"
        onChange={(e) => setVs(e.target.value)}
      ></TextField>
      <Button variant="contained" type="submit">
        Submit
      </Button>
      <Button variant="outlined">Add Depth by Upload CSV </Button>
    </form>
    // </Box>
  );
};

export default InputWelldata;
