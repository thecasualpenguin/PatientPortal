import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core"; //importing material ui component

export const Developer = function() {
  return (
    <React.Fragment>
      <Button color="primary" variant="contained">
        {" "}
        Press me{" "}
      </Button>
      <TextField id="name" label="Name" variant="outlined" />
    </React.Fragment>
  )
}