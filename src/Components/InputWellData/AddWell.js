import { React, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";

const AddWell = () => {
  const [well, setWell] = useState("");
  const navigate = useNavigate();
  const saveWell = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/wells/`, {
        well,
      });
      navigate(`/WellData/`);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div>
      <form onSubmit={saveWell}>
        <TextField
          type="string"
          value={well}
          label="Nama Well"
          onChange={(e) => setWell(e.target.value)}
        ></TextField>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddWell;
