import React from "react";
import { useHistory } from "react-router-dom";

const Page = () => {
  const history = useHistory();

  const goToLoginPage = () => {
    history.push("/login");
  };

  const goToListTripsPage = () => {
    history.push("/trips/list");
  };
  return (
    <>
      <div>Página Home</div>
      <button onClick={goToLoginPage}>Ir para pagina de login</button>
      <button onClick={goToListTripsPage}>Listar Viagens</button>
    </>
  );
};

export default Page;
