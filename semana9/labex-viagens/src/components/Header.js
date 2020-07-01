import React from "react";
import ButtonLogout from "./ButtonLogout";
import { HeaderContainer } from "../AppStyled";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Icon, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();

  const goToLoginPage = () => {
    history.push("/login");
  };

  return (
    <HeaderContainer>
      <ButtonLogout />
      <IconButton aria-label="avatar" onClick={goToLoginPage}>
        <AccountCircleIcon fontSize="large" color="primary" />
      </IconButton>
    </HeaderContainer>
  );
}
