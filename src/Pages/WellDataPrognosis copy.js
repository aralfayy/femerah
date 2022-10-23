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

export const WellData = () => {
  const [well, setWell] = useState([]);

  useEffect(() => {
    getWellData();
  }, []);

  const getWellData = async () => {
    const res = await axios.get("http://localhost:5000/wells");
    console.log(res);
    setWell(res.data);
  };

  const deleteWell = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/wells/${id}`);
      getWellData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <Button component={Link} to="/WellData/AddWell" variant="outlined">
            Add Well
          </Button>
          <Button variant="outlined">Save</Button>

          <TableRow>
            <StyledTableCell>Nama Well</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {well.map((well, i) => (
            <StyledTableRow key={well._id}>
              <StyledTableCell
                component="th"
                scope="row"
                to={`/WellData/DepthData`}
              >
                {well.well}
              </StyledTableCell>

              <StyledTableCell align="right">
                <Button
                  variant="outlined"
                  component={Link}
                  to={`/WellData/DepthData/${well._id}`}
                >
                  View
                </Button>
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
      </Table>
    </TableContainer>
  );
};
