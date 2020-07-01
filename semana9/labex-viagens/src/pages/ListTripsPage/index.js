import React from "react";
import { useHistory } from "react-router-dom";

const Page = () => {
  const history = useHistory();

  const goToTripDetailsPage = () => {
    history.push("/trips/details ");
  };
  return (
    <div>
      <h3>Lista de viagens</h3>
      <button onClick={goToTripDetailsPage}>detalhes</button>
    </div>
  );
};

export default Page;
