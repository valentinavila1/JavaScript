const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// a)  Las pizzas que tengan un id impar.

/* const pizzaId = (ArrayPizza) => {
  const pizzasImpares = ArrayPizza.filter((pizza) => pizza.id % 2 === 1);
  pizzasImpares.forEach((pizza) => {
    if (pizza.id % 2 === 1) {
      return console.log(`La ${id.nombre} tiene el ID ${id.id} y es Impar`);
    }
  });
};
pizzaId(pizzas); */

//b) Responder: ¿Hay alguna pizza que valga menos de $600?

/* const MenorA600 = pizzas.find((elemento) => elemento.precio < 600);
console.log(MenorA600.nombre); */

// c) El nombre de cada pizza con su respectivo precio.
/* const NombreyPrecio = (pizzasArray) => {
  pizzasArray.forEach((element) => {
    console.log(`La ${element.nombre} vale $${element.precio}`);
  });
};
NombreyPrecio(pizzas); */

// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.
/* const Ingredientes = (pizzasArray) => {
  pizzasArray.forEach((element) => {
    console.log(
      `La ${
        element.nombre
      } tiene éstos ingredientes: ${element.ingredientes.join(", ")}`
    );
  });
};
Ingredientes(pizzas); */
