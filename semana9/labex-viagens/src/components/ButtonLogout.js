import React from "react";
import { useHistory } from "react-router-dom";

function ButtonLogout() {
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <>
      <button onClick={logout}>Sair</button>
    </>
  );
}

export default ButtonLogout;
