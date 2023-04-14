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


// Ids impares de pizzas
pizzas.forEach((pizza)=>{
  if (pizza.id % 2 !== 0){
    console.log(pizza.id)
  }
})

// Imprimir pizzas menores a 600 pesos
pizzas.forEach((pizza)=>{
  if (pizza.precio < 600){
    console.log(`El precio de la ${pizza.nombre} es menor a 600`)
  }
})

// Imprimir los nombres de pizzas con sus precios
pizzas.forEach((pizza) => {
  console.log(`La ${pizza.nombre} sale ${pizza.precio}`)
})

// imprimir ingredientes de cada pizza

pizzas.forEach((pizza) => {
  console.log(`Esta es la ${pizza.nombre} y sus ingredientes son: `)
  pizza.ingredientes.forEach((ingrediente)=>{
    console.log(ingrediente)
  })
})