const ProductsData = [
  {
    id: 1,
    name: "RTX 3070 Suprim",
    price: 599999,
    category: "networkcard",
    itemImg: "./imgs/rtx 3070 suprim.png",
  },
  {
    id: 2,
    name: "RTX 3070 Ventus x 3",
    price: 399999,
    category: "networkcard",
    itemImg: "./imgs/rtx 3070 ventus x 3.png",
  },
  {
    id: 3,
    name: "RTX 3090 Gaming X Trio",
    price: 489999,
    category: "networkcard",
    itemImg: "./imgs/rtx 3090 gaming x trio.png",
  },
  {
    id: 4,
    name: "RTX 3060 Ti Gaming X",
    price: 289999,
    category: "networkcard",
    itemImg: "./imgs/rtx 3060 ti gaming x.png",
  },
  {
    id: 5,
    name: "RTX 3080 XC3",
    price: 399999,
    category: "networkcard",
    itemImg: "./imgs/rtx 3080 xc3.png",
  },
  {
    id: 6,
    name: "4090 Gaming X Trio",
    price: 789999,
    category: "networkcard",
    itemImg: "./imgs/4090 gaming trio.png",
  },
  {
    id: 7,
    name: "4080 Gaming X Trio",
    price: 649999,
    category: "networkcard",
    itemImg: "./imgs/4080 gaming x trio.png",
  },
  {
    id: 8,
    name: "Gigabyte 450W 80+ Bronze",
    price: 19999,
    category: "powersupplies",
    itemImg: "./imgs/fuente 450w 80 bronze gigabyte.png",
  },
  {
    id: 9,
    name: "Aureox 550W 80+ Bronze",
    price: 17599,
    category: "powersupplies",
    itemImg: "./imgs/fuente aureox 550w 80 bronze.png",
  },
  {
    id: 10,
    name: "Corsair 650W 80+ Bronze",
    price: 24999,
    category: "powersupplies",
    itemImg: "./imgs/fuente 650w 80 bronze corsair.png",
  },
  {
    id: 11,
    name: "Corsair 750W 80+ Bronze Full Modular",
    price: 32999,
    category: "powersupplies",
    itemImg: "./imgs/fuente corsair 750w 80 bronze.jpg",
  },
  {
    id: 12,
    name: "EVGA 500W 80+ Silver",
    price: 21999,
    category: "powersupplies",
    itemImg: "./imgs/fuente evga 500w 80 plus plata.png",
  },
  {
    id: 13,
    name: "AORUS 1200W 80+ Platinum",
    price: 89999,
    category: "powersupplies",
    itemImg: "./imgs/fuente 1200w 80 platino aorus.png",
  },
  {
    id: 14,
    name: "Cooler MasterAir CoolerMaster",
    price: 33999,
    category: "coolers",
    itemImg: "./imgs/cooler masterair coolermaster.png",
  },
  {
    id: 15,
    name: "Cooler Hyper 212 RGB Black Edition CoolerMaster",
    price: 18999,
    category: "coolers",
    itemImg: "./imgs/hyper 212 rgb black edition cooler master.png",
  },
  {
    id: 16,
    name: "AORUS Cooler ATC800",
    price: 22999,
    category: "coolers",
    itemImg: "./imgs/cooler atc800 aorus.png",
  },
  {
    id: 17,
    name: "Rog Strix LC360 Liquid Cooler ",
    price: 49999,
    category: "coolers",
    itemImg: "./imgs/rog strix lc 360 liquid cooler.png",
  },
  {
    id: 18,
    name: "AORUS B450M Motherboard",
    price: 39999,
    category: "motherboards",
    itemImg: "./imgs/b450 motherboard aorus.png",
  },
  {
    id: 19,
    name: "AORUS B760 Motherboard",
    price: 44999,
    category: "motherboards",
    itemImg: "./imgs/b760 motherboard aorus.png",
  },
  {
    id: 20,
    name: "AORUS B660M Motherboard",
    price: 51999,
    category: "motherboards",
    itemImg: "./imgs/b660m motherboard aorus.png",
  },
  {
    id: 21,
    name: "Rog Strix B550E Gaming Motherboard",
    price: 69999,
    category: "motherboards",
    itemImg: "./imgs/b550e gaming rog strix motherboard.png",
  },
  {
    id: 22,
    name: "Mouse Logitech G502 LightSpeed",
    price: 22999,
    category: "peripherals",
    itemImg: "./imgs/mouse logitech g502 lightspeed.png",
  },
  {
    id: 23,
    name: "Mouse Logitech G305 Hero Wireless",
    price: 18999,
    category: "peripherals",
    itemImg: "./imgs/mouse logitech g305 hero wireless.png",
  },
  {
    id: 24,
    name: "Mouse Logitech G Pro X Superlight",
    price: 69999,
    category: "peripherals",
    itemImg: "./imgs/mouse logitech g pro x superlight black.png",
  },
  {
    id: 25,
    name: "Mouse HyperX Pulsefire Core",
    price: 15999,
    category: "peripherals",
    itemImg: "./imgs/mouse pulsefire core hyperX.avif",
  },
  {
    id: 26,
    name: "Mouse Zowie EC2-A Black ",
    price: 39999,
    category: "peripherals",
    itemImg: "./imgs/mouse zowie ec2-a black.png",
  },
  {
    id: 27,
    name: "Teclado Redragon Kumara ",
    price: 22999,
    category: "peripherals",
    itemImg: "./imgs/teclado kumara redragon.png",
  },
  {
    id: 28,
    name: "Teclado AORUS K1",
    price: 31999,
    category: "peripherals",
    itemImg: "./imgs/teclado aorus k1.png",
  },
  {
    id: 29,
    name: "Teclado HyperX Alloy Origins",
    price: 39999,
    category: "peripherals",
    itemImg: "./imgs/teclado hyperx alloy origins.avif",
  },
  {
    id: 30,
    name: "Teclado HyperX Alloy Core RGB",
    price: 43999,
    category: "peripherals",
    itemImg: "./imgs/teclado hyperx alloy core rgb.avif",
  },
  {
    id: 31,
    name: "Teclado Logitech G213 Prodigy",
    price: 39999,
    category: "peripherals",
    itemImg: "./imgs/teclado logitech g213 prodigy.png",
  },
  {
    id: 32,
    name: "Teclado Logitech G815 RGB",
    price: 45999,
    category: "peripherals",
    itemImg: "./imgs/teclado logitech g815 rgb.png",
  },
];

// funcion para dividir arrays en la cantidad que necesite
const DividingProducts = (size) => {
  let productDivided = [];
  for (let i = 0; i < ProductsData.length; i += size) {
    productDivided.push(ProductsData.slice(i, i + size));
  }
  return productDivided;
};

/* appstate para agregar la funcion de dividir y ponerla en init, también ingresar el array en el que se encuentran
 los productos y el límite que pueden llegar (el comienzo es 0 por el array y el limite es el length de arrays, en este caso 4) */
const AppState = {
  products: DividingProducts(8),
  currentArray: 0,
  ArrayLimit: DividingProducts(8).length,
  activeFilter: null,
};

// en data, terminado. Solo funcion para dividir los productos, y appstate para dividirlos, contarlos y poner un límite
