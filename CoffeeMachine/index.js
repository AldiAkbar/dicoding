import { coffeeStock, isCoffeeMachineReady } from "./state.js";

// const makeCoffee = (type, miligrams) => {
//     if (coffeeStock[type] >= miligrams) {
//         console.log("kopi berhasil di buat!");
//     } else {
//         console.log("biji kopay habis!");
//     }
// }
// makeCoffee("robusta", 80);

const displayStock = stock => {
    for (const type in stock) {
      console.log(type);
    }
  }
console.log(coffeeStock);
console.log(isCoffeeMachineReady)


  displayStock(coffeeStock);