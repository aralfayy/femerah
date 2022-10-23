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
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditWell = () => {
  const [depth, setDepth] = useState("");
  const [gr, setGr] = useState("");
  const [nphi, setNphi] = useState("");
  const [vp, setVp] = useState("");
  const [vs, setVs] = useState("");
  const navigate = useNavigate();
  const { id, index } = useParams();

  useEffect(() => {
    getWellById();
  }, []);

  const getWellById = async () => {
    const res = await axios.get(`http://localhost:5000/wells/${id}`);
    setDepth(res.data.depths[index].depth);
    setGr(res.data.depths[index].gr);
    setNphi(res.data.depths[index].nphi);
    setVp(res.data.depths[index].vp);
    setVs(res.data.depths[index].vs);
  };

  const updateDepth = async (e) => {
    e.preventDefault();
    const dataList = {
      depth: Number(depth),
      gr: Number(gr),
      nphi: Number(nphi),
      vp: Number(vp),
      vs: Number(vs),
    };
    const res = await axios.get(`http://localhost:5000/wells/${id}`);
    res.data.depths[index] = dataList;
    const depths = res.data.depths;
    try {
      await axios.patch(`http://localhost:5000/wells/${id}`, {
        depths,
      });

      navigate(`/WellData/DepthData/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={updateDepth}>
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
        Update
      </Button>
    </form>
    // </Box>
  );
};

export default EditWell;
