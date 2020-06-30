import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("Ao clicar em adicionar um novo post é criado", () => {
  // preparação
  const { getByText, getByPlaceholderText, getByTestId } = render(<App />);

  const inputPlace = getByPlaceholderText("Novo post");

  const botaoAdicionar = getByText(/adicionar/i);

  fireEvent.change(inputPlace, { target: { value: "qualquerCoisa" } });

  fireEvent.click(botaoAdicionar);

  expect(getByTestId("postcard")).toBeInTheDocument();

  // execução

  // verificação
});
