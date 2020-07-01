import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import axios from "axios";

const Page = () => {
  const [trips, setTrips] = useState([{}]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/jonyelson-mello/trips"
      )
      .then((response) => {
        setTrips(response.data.trips);
        console.log(response.data.trips);
      });
  }, []);

  return (
    <>
      <Header />
      <div>Página Home</div>
      {trips.map((trip) => {
        return (
          <div>
            <p>{trip.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default Page;
