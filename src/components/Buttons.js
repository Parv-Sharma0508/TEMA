import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CheckIcon from "@mui/icons-material/Check";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ConstructionIcon from "@mui/icons-material/Construction";

function Buttons(){
 return(
    <Stack
    direction="row"
    sx={{ justifyContent: "space-around", mt: 4 }}
  >
    <Button
      variant="contained"
      startIcon={<CheckIcon />}
      color="secondary"
    >
      Assign
    </Button>
    <Button
      variant="contained"
      startIcon={<ConstructionIcon />}
      color="success"
    >
      Resolve
    </Button>
    <Button
      variant="contained"
      startIcon={<BorderColorIcon />}
    >
      Update
    </Button>
  </Stack>

 );
}

export default Buttons;

