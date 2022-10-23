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
    console.log(res);

    let listDepth = res.data.depths ? res.data.depths : [];
    const dataMap = csvData.map((res, i) => ({
      depth: parseInt(res.depth),
      gr: parseInt(res.gr),
      nphi: parseInt(res.nphi),
      vp: parseInt(res.vp),
      vs: parseInt(res.vs),
    }));
    dataMap.map((res, i) => {
      listDepth.push(res);
    });
    console.log(csvData);
    // listDepth.push(dataMap);

    axios.patch(`http://localhost:5000/wells/${id}`, {
      depths: listDepth,
    });
    navigate(`/WellData/DepthData/${id}`);
  };

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
            setCsvData(res.data);
            console.log(res.data);
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
              <StyledTableCell>Depth</StyledTableCell>
              <StyledTableCell align="right">Gamma Ray</StyledTableCell>
              <StyledTableCell align="right">Neutron Porosity</StyledTableCell>
              <StyledTableCell align="right">Vp</StyledTableCell>
              <StyledTableCell align="right">Vs</StyledTableCell>
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
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UploadCsv;
