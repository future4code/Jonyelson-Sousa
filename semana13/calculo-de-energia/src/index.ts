import { Client } from "./Client";
import { Place } from "./Place";

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

// Exercício 2

//const newPlace: Place = new Place();

// A) Não é possível criar uma instância de uma classe abstrata. error TS2511

// B) Poderiamos remover o abstract da classe Place.
