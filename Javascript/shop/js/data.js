var products = [
    {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake",
    price: 5,
    type: "grocery",
  },
  {
    id: 4,
    name: "Pizza",
    price: 3,
    type: "grocery",
  },
  {
    id: 5,
    name: "T-shirt",
    price: 30,
    type: "clothes",
  },
  {
    id: 6,
    name: "Pantalons",
    price: 20.5,
    type: "clothes",
  },
  {
    id: 7,
    name: "Ring",
    price: 60,
    type: "joies",
  },
  {
    id: 8,
    name: "Collaret",
    price: 90.4,
    type: "joies",
  },
  {
    id: 9,
    name: "Bufanda",
    price: 15,
    type: "clothes",
  },
  {
    id: 10,
    name: "Arracades",
    price: 30,
    type: "joies",
  },
];

var cartList = [];

var subtotal = {
    grocery: {
        value: 0,
        discount: 0
    },
    clothes: {
        value: 0,
        discount: 0
    },
    joies: {
        value: 0,
        discount: 0
    },
    };
