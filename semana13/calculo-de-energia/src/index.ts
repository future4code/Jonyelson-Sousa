import { Client } from "./Client";

// Exercício 1
const client: Client = {
  name: "Teco",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: (): number => {
    return 2;
  },
};

console.log(client.calculateBill());
console.log(client.name);
console.log(client.registrationNumber);
console.log(client.consumedEnergy);

// A) Todos foram impressos, pois se trata de um objeto de interface e logo todas as propriedades são publicas.
