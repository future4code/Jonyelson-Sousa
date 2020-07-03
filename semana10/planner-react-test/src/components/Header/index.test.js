import React from "react";
import { render, wait } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Header from "../Header";
import axios from "axios";

const addTask = async () => {
  const utils = render(<Header />);

  const input = utils.getByPlaceholderText("Nova tarefa");

  await userEvent.type(input, "tarefa teste");
};
