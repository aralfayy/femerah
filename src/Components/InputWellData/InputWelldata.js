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
import { useNavigate } from "react-router-dom";

const InputWelldata = () => {
  const [depth, setDepth] = useState("");
  const [gr, setGr] = useState("");
  const [nphi, setNphi] = useState("");
  const [vp, setVp] = useState("");
  const [vs, setVs] = useState("");
  const navigate = useNavigate();
  const saveDepth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/wells", {
        depth,
        gr,
        nphi,
        vp,
        vs,
      });
      navigate("/WellData");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <Box
    //   sx={{
    //     "& .MuiTextField-root": { m: 1, width: "25ch" },
    //   }}
    //   onSubmit={saveDepth}
    // >
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
    </form>
    // </Box>
  );
};

export default InputWelldata;
