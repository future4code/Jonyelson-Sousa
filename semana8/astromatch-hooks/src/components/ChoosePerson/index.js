import React from "react";

import IconButton from "@material-ui/core/IconButton";

import FavoriteIcon from "@material-ui/icons/Favorite";
import CloseIcon from "@material-ui/icons/Close";

import { green } from "@material-ui/core/colors";

function ChoosePerson() {
  return (
    <>
      <IconButton>
        <CloseIcon fontSize="large" color="secondary" />
      </IconButton>
      <IconButton>
        <FavoriteIcon style={{ color: green[500] }} fontSize="large" />
      </IconButton>
    </>
  );
}

export default ChoosePerson;
