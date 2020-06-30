import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import axios from "axios";

function ProfileChoose() {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jonyelson/person"
      )
      .then((response) => {
        setProfile(response.data.profile);
      });
  }, []);

  return (
    <Container>
      <img src={profile.photo} alt="foto de perfil"></img>
      <h2>{`${profile.name}, ${profile.age} anos`}</h2>
      <p>{profile.bio}</p>
    </Container>
  );
}

export default ProfileChoose;
