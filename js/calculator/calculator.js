const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}

//! Esta función si funciona profe y corre bien el test en la tarea número 1, solo que lo comente para que no tuviera conflicto con el otro código
// const divide = function(a, b){
//   return a / b;
// }

const divide = function(a, b) {
    if (b === 0) {
      return null; // Retornar null cuando el divisor es 0
    }
    return a / b;
  };
  

const multiply = function (a, b){
  return a * b;
}

// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {divide: divide, multiply: multiply, add: add, subtract: subtract};