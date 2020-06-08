import React from "react";
import AddPlaylist from "./components/AddPlaylist";
import ViewPlaylist from "./components/ViewPlaylist";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <AddPlaylist />
      <ViewPlaylist />
    </div>
  );
}

export default App;
