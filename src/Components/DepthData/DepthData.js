import {
  Box,
  Button,
  IconButton,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import { Delete, Edit } from "@mui/icons-material/";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

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

export const DepthData = () => {
  const [depth, setDepth] = useState([]);

  useEffect(() => {
    getWellData();
  }, [depth]);

  const { id } = useParams();

  const getWellData = async () => {
    // const res = await axios.get("http://localhost:5000/wells");
    const res = await axios.get(`http://localhost:5000/wells/${id}`);
    setDepth(res.data.depths);
  };

  const deleteDepth = async (index) => {
    const res = await axios.get(`http://localhost:5000/wells/${id}`);
    let listDepth = res.data.depths;
    listDepth.splice(index, 1);

    axios.patch(`http://localhost:5000/wells/${id}`, {
      depths: listDepth,
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <Button
            component={Link}
            to={`/WellData/Input/${id}`}
            variant="outlined"
          >
            Add Depth
          </Button>
          <Button
            component={Link}
            to={`/WellData/CSVUpload/${id}`}
            variant="outlined"
          >
            Add Depth by Upload CSV
          </Button>

          <TableRow>
            <StyledTableCell>Depth</StyledTableCell>
            <StyledTableCell align="right">Gamma Ray</StyledTableCell>
            <StyledTableCell align="right">Neutron Porosity</StyledTableCell>
            <StyledTableCell align="right">Vp</StyledTableCell>
            <StyledTableCell align="right">Vs</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {depth.map((dep, i) => (
            <StyledTableRow key={dep._id}>
              <StyledTableCell component="th" scope="row">
                {dep.depth}
              </StyledTableCell>
              <StyledTableCell align="right">{dep.gr}</StyledTableCell>
              <StyledTableCell align="right">{dep.nphi}</StyledTableCell>
              <StyledTableCell align="right">{dep.vp}</StyledTableCell>
              <StyledTableCell align="right">{dep.vs}</StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  component={Link}
                  to={`/WellData/DepthData/Edit/${id}/${i}`}
                  variant="outlined"
                  startIcon={<Edit />}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => deleteDepth(i)}
                  variant="outlined"
                  startIcon={<Delete />}
                >
                  Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
