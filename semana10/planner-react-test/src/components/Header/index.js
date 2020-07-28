import React, { useState } from "react";
import { HeaderContainer } from "./styles";
import axios from "axios";

const Header = () => {
  const [taskList, setTaskList] = useState([]);
  const [inputTask, setInputTask] = useState("");
  const [day, setDay] = useState(1);

  const handleInputTask = (event) => {
    setInputTask(event.target.value);
  };

  const handleInputDay = (event) => {
    setDay(event.target.value);
  };

  const addTask = () => {
    const newTask = {
      text: inputTask,
      day: day,
    };
    const body = newTask;
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-jonyelson",
        body
      )
      .then((response) => {
        console.log(response.config.data);
      });
    setInputTask("");
  };
  return (
    <HeaderContainer>
      <input
        value={inputTask}
        onChange={handleInputTask}
        placeholder="Nova tarefa"
      ></input>
      <select onChange={handleInputDay}>
        <option value="1">Segunda-Feira</option>
        <option value="2">Terça-Feira</option>
        <option value="3">Quarta-Feira</option>
        <option value="4">Quinta-Feira</option>
        <option value="5">Sexta-Feira</option>
        <option value="6">Sábado</option>
        <option value="7">Domingo</option>
      </select>
      <button onClick={addTask}>Adicionar</button>
    </HeaderContainer>
  );
};

export default Header;
