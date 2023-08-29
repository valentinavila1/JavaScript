// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

/* const number = 10;
for (let i = 1; i <= number; i++) {
  if (i % 2 === 0) {
    console.log(`${i} es Par`);
  } else {
    console.log(`${i} es Impar`);
  }
} */

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
/* function Comparativa(num1, num2) {
  if (num1 < num2) {
    console.log(`${num1} es menor a ${num2}`);
  } else if (num1 > num2) {
    console.log(`${num1} es mayor a ${num2}`);
  } else {
    console.log(`${num1} es igual a ${num2}`);
  }
}
Comparativa(2, 10); */

//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

/* function multiplode5(num) {
  if (num % 5 === 0) {
    console.log(`${num} es claramente múltiplo de 5`);
  } else console.log(`${num} claramente NO es múltiplo de 5`);
}
multiplode5(20); */

//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

/* const Numero = 10;
for (i = 0; i <= Numero; i++) {
  console.log(i);
} */

//5 ----(Falta éste) Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

/* let Array = [1, 2, 3, 4, 5, 6, 7];
for (i = 0; i < Array.length; i++) {
  console.log(Array[i]);
} */

//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

/* const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function continuar5() {
  for (let i = 1; i < Numbers.length; i++) {
    if (i === 5) {
      continue;
    }
    console.log(i);
  }
}
continuar5(Numbers); */

//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
/* const Numbers = [1, 2, 3, 4, 5];
function MultiplicarNumero(num) {
  for (i = 0; i < Numbers.length; i++) {
    console.log(`${num} x ${Numbers[i]} = ${num * Numbers[i]}`);
  }
}
MultiplicarNumero(22); */
