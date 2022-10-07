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
import { parse } from "papaparse";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

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

const UploadCsv = () => {
  const [csvData, setCsvData] = useState([]);
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
        onDrop={(e) => {
          e.preventDefault();
          Array.from(e.dataTransfer.files).map(async (file) => {
            let text = await file.text();
            let res = parse(text, { header: true });
            setCsvData(res.data);
          });
        }}
      >
        <Typography style={{ fontSize: "45px" }}>
          Drop Your File Here
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <Button variant="outlined">Save</Button>

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
            {csvData.map((dep) => (
              <StyledTableRow key={dep._id}>
                <StyledTableCell component="th" scope="row">
                  {dep.depth}
                </StyledTableCell>
                <StyledTableCell align="right">{dep.gr}</StyledTableCell>
                <StyledTableCell align="right">{dep.nphi}</StyledTableCell>
                <StyledTableCell align="right">{dep.vp}</StyledTableCell>
                <StyledTableCell align="right">{dep.vs}</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UploadCsv;
