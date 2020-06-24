import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ListTripsPage from "./pages/ListTripsPage";
import TripDetailsPage from "./pages/TripDetailsPage";

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/trips/list">
        <ListTripsPage />
      </Route>
      <Route exact path="/trips/details ">
        <TripDetailsPage />
      </Route>
    </Switch>
  );
};
