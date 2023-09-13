// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

/* function ParImpar(numero) {
  if (numero % 2 === 0) {
    console.log(`${numero} es Par`);
  } else {
    console.log(`${numero} es Impar`);
  }
}
ParImpar(13); */

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
/* function PrintingNumbers(Numero) {
  for (i = 0; i <= Numero; i++) {
    console.log(i);
  }
}
PrintingNumbers(20); */

//5 ----(Falta éste) Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

/* arr = [1, 2, 3, 4, 5];
function imprimirArray(array) {
  for (i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
imprimirArray(arr); */

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
function MultiplicarNumero(num, array) {
  for (i = 0; i < array.length; i++) {
    console.log(`${num} x ${array[i]} = ${num * array[i]}`);
  }
}
MultiplicarNumero(2, [1, 2, 3, 4, 5, 6, 7]); */

// ======================================================================================================================================================= //
// Uso del ForEach (No retorna nada, ejecuta acciones nada mas)
// const Numbers = [1, 2, 3, 4, 5];
// Numbers.forEach((numero) => console.log(numero));
// -----------------------------------

// Uso edl map (Retorna un nuevo Array)
/* const Numbers = [1, 2, 3, 4, 5];
const duplicados = Numbers.map((Numero) => Numero * 2);
console.log(Numbers);
console.log(duplicados); */
// ----------------------------------

/* REDUCE (0 + NUMERO ACTUALIZADO. ACUMULADOR = 0 Y VA ITERANDO)
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const sumaArray = numeros.reduce((acumulador, valoractualizado) => {
  return acumulador + valoractualizado;
});
console.log(sumaArray); */

// const Helados = ["ddl", "vainilla", "chocolate", "americana", "tramontana"];
/* function CambiarHelado(gusto) {
  Helados.push(Helados.shift());
  console.log(Helados);
}
CambiarHelado(); */

/* function InvertirHelados(gusto) {
  console.log(Helados.reverse().join("-"));
}
InvertirHelados(); */

/* const Helados2 = ["Banana Split", "Naranja", "Menta"];
const UnirGustos = () => {
  let gustos = Helados.slice(3, 5).concat(Helados2.slice(0, 2));
  return gustos;
};
console.log(UnirGustos()); */

// ----------
/*
let text =
  "         .levin us ed sojel yum atse isseM y odnum led rodaguj rojem le se odlanoR          ";

const ModificatedText = () => {
  text = text
    .trim()
    .split("")
    .reverse("")
    .join("")
    .replace("Ronaldo", "Messi".replace("Messi", "Ronaldo"));

  console.log(text);
};

ModificatedText(); */
