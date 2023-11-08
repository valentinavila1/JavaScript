const ProductsContainer = document.querySelector(".products__items");
const MoreBtn = document.querySelector(".btn__load");
const CategoriesContainer = document.querySelector(".products__cards");
const CategoriesBtns = document.querySelectorAll(".card");
const menuToggle = document.querySelector(".menu");
const navList = document.getElementById("nav-list");
const CartContainer = document.querySelector(".cart__container");
const SpanEmptyCart = document.querySelector(".span__emptycart");
const Total = document.querySelector(".cart__total");
const BtnBuy = document.querySelector(".cart__btn__buy");
const BtnEmptyCart = document.querySelector(".cart__btn__delete");
const ProductHandler = document.querySelector(".cart__product__handler");
const CartModal = document.querySelector(".add-modal");
const TopScrollBtn = document.getElementById("btn-toTop");

// console.log(CartModal, ProductHandler);

// -------------------------------- menu hamburguesa -------------------------------- //

// console.log(menuToggle, navList)
const toggleMenu = () => {
  navList.classList.toggle("show");

  if (cart.classList.contains("open__cart")) {
    cart.classList.remove("open__cart");

    return;
  }
  overlay.classList.toggle("show");
};

// --------------------------------------- CARRITO ----------------------------------- //

const cartBtn = document.querySelector(".cart-btn");
const cart = document.querySelector(".cart");
// menuToggle = .menu
const menu = document.querySelector(".navbar-list");
const overlay = document.querySelector(".overlay");

let cartArray = [];

const toggleCart = () => {
  cart.classList.toggle("open__cart");

  if (navList.classList.contains("show")) {
    navList.classList.remove("show");

    return;
  }
  overlay.classList.toggle("show");
};

const CloseWindowClick = () => {
  cart.classList.remove("open__cart");
  navList.classList.remove("show");
  overlay.classList.remove("show");
};

// La img tiene que ser igual al data, sino no corrobora la img del template y da 404
const TemplateCartProduct = (cardProduct) => {
  return ` <div class="cart__product">
  <div class="cart__img">
  <img src="${cardProduct.img}" alt="${cardProduct.name}" /> 
  </div>
  <div class="cart__product__info">
  <h3>${cardProduct.name}</h3>
    <span class="cart__product__price">$${cardProduct.price}</span>
  </div>
  <div class="cart__product__handler">
    <span class="quantity-down down" data-id="${cardProduct.id}">-</span>
    <span class="quantity">${cardProduct.quantity}</span>
    <span class="quantity-up up" data-id="${cardProduct.id}">+</span>
  </div>
</div>`;
};

const CartState = () => {
  RenderizingCartProducts();
  GetCartTotalPrice();
  CartBtns(BtnBuy);
  CartBtns(BtnEmptyCart);
  //console.log(cartArray);
};

const addProductToCart = (e) => {
  if (!e.target.classList.contains("btn__buy")) return;
  const product = e.target.dataset;
  if (ExistingCartProduct(product)) {
    UnitCartProduct(product);
  } else {
    CartProduct(product);

    ShowCartModal("Se agregó un producto!");
  }
  CartState();
};

const CartProduct = (product) => {
  cartArray = [...cartArray, { ...product, quantity: 1 }];
};

const ExistingCartProduct = (product) => {
  return cartArray.find((element) => element.id === product.id);
};

const UnitCartProduct = (product) => {
  cartArray = cartArray.map((cartProduct) =>
    cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct
  );
};

// render productos del carro
const RenderizingCartProducts = () => {
  if (!cartArray.length) {
    CartContainer.innerHTML = `<p class="emptycartword">Tu carrito está vacío</p>`;
    return;
  }

  CartContainer.innerHTML = cartArray.map(TemplateCartProduct).join("");
};

const CartTotalPrice = () => {
  return cartArray.reduce(
    (acc, cur) => acc + Number(cur.price) * cur.quantity,
    0
  );
};

const GetCartTotalPrice = () => {
  Total.innerHTML = `<p class="totalword">Total:</p>
  <span class="totalprice">$${CartTotalPrice()}</span>`;
};

const CartBtns = (btn) => {
  if (!cartArray.length) {
    btn.classList.add("disabled");
  } else {
    btn.classList.remove("disabled");
  }
};
const HandleBtnMas = (id) => {
  // console.log("ID:", id);
  const existingProduct = cartArray.find((item) => item.id === id); // Comparar item.id con id

  UnitCartProduct(existingProduct);
};

const HandleBtnMenos = (id) => {
  //console.log("ID:", id);
  const existingProduct = cartArray.find((item) => item.id === id); // console.log(existingProduct); // Comparar item.id con id

  if (existingProduct.quantity === 1) {
    if (window.confirm("Querés eliminar el producto de tu carrito?")) {
      cartArray = cartArray.filter(
        (product) => product.id !== existingProduct.id // id !== existing id
      );
      CartState();
    }
    return;
  }

  cartArray = cartArray.map((product) => {
    return product.id === existingProduct.id
      ? { ...product, quantity: product.quantity - 1 }
      : product;
  });
};

const QuantityCartProducts = (e) => {
  if (e.target.classList.contains("up")) {
    HandleBtnMas(e.target.dataset.id);
  } else if (e.target.classList.contains("down")) {
    HandleBtnMenos(e.target.dataset.id);
  }
  CartState();
};

//console.log(cartArray);

const BuyCart = () => {
  if (window.confirm("Deseas completar la compra?")) {
    window.confirm("¡Gracias por tu compra! Que lo disfrutes");
    cartArray = [];
    CartState();
  }
};

const DeleteCart = () => {
  if (!cartArray.length) return;
  if (window.confirm("Estás seguro que querés eliminar todo de tu carro?")) {
    cartArray = [];
    CartState();
  }
};

const ShowCartModal = (element) => {
  CartModal.classList.add("active-modal");

  CartModal.textContent = element;

  setTimeout(() => {
    CartModal.classList.remove("active-modal");
  }, 1400);
};

const buttonVisibility = () => {
  if (window.scrollY > 100) {
    // scrollY para mandarlo cuando scrollee hacia abajo
    TopScrollBtn.classList.remove("hidden");
  } else {
    TopScrollBtn.classList.add("hidden");
  }
};
const scrollToTop = () => {
  // al apretar botón
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// ----------------------------------------------------------------------------------- //

const TemplateProducts = (product) => {
  return `
    <div class="item">
      <img src="${product.itemImg}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <div class="item__info">
        <span>$${product.price}</span>
        <button class="btn__buy" data-id="${product.id}" data-img="${product.itemImg}" data-name="${product.name}" data-price="${product.price}">Agregar al carrito</button>
        
      </div>
    </div>
  `;
};

const RenderizingProducts = (products) => {
  ProductsContainer.innerHTML += products.map(TemplateProducts).join("");
};

// Para ver más productos, al array actual se le agrega 1 más, y se renderiza los productos del appstate con el array actual
const MoreProducts = () => {
  AppState.currentArray += 1;
  RenderizingProducts(AppState.products[AppState.currentArray]);

  if (AppState.currentArray === AppState.ArrayLimit - 1) {
    MoreBtn.classList.add("hidden");
  }
};

// sacar el boton ver mas cuando se ingresa en una categoria
const MoreBtnDelete = () => {
  if (!AppState.activeFilter) {
    MoreBtn.classList.remove("hidden");
    return;
  }
  MoreBtn.classList.add("hidden");
};
// funcion para aplicar el filtro, si los botones no estan activos que no hagan nada // también para filtrar los PRODUCTOS del botón "VER TODO"
const ApplyFilter = ({ target }) => {
  if (!InactiveBtns(target)) return;
  FilterState(target);
  ProductsContainer.innerHTML = "";
  if (AppState.activeFilter) {
    RenderizingSelectedProduct(); // () !!!!!!!!111
    return;
  }
  RenderizingProducts(AppState.products[0]); // si no tiene active filter, que renderize el primer array de nuevo
};

// funcion para renderizar productos según el boton elegido
const RenderizingSelectedProduct = () => {
  const SelectedProduct = ProductsData.filter(
    (product) => product.category === AppState.activeFilter
  );
  RenderizingProducts(SelectedProduct); // renderizar los productos filtrados
};

// botones que contengan la clase card y no esten activos
const InactiveBtns = (e) => {
  return e.classList.contains("card") && !e.classList.contains("active");
};

// funcion para cambiar la card activa
const FilterState = (card) => {
  AppState.activeFilter = card.dataset.category;
  changeActiveState(AppState.activeFilter);
  MoreBtnDelete(AppState.activeFilter);
};

// cambiar el boton activo si el boton no es igual, funciona adentro del filtro para cambiar la card activa
const changeActiveState = (category) => {
  const categories = [...CategoriesBtns];
  //console.log(category);

  categories.forEach((btn) => {
    if (btn.dataset.category !== category) {
      btn.classList.remove("active");
      return;
    }
    btn.classList.add("active");
  });
};

// funcion que inicializa con la página
const init = () => {
  RenderizingProducts(AppState.products[0]); // renderizamos los productos con el appstate y la primera division del array
  MoreBtn.addEventListener("click", MoreProducts);
  CategoriesContainer.addEventListener("click", ApplyFilter);
  cartBtn.addEventListener("click", toggleCart);
  menuToggle.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", CloseWindowClick);
  ProductsContainer.addEventListener("click", addProductToCart);
  document.addEventListener("DOMContentLoaded", RenderizingCartProducts);
  CartBtns(BtnBuy);
  CartBtns(BtnEmptyCart);
  CartContainer.addEventListener("click", QuantityCartProducts);
  BtnBuy.addEventListener("click", BuyCart);
  BtnEmptyCart.addEventListener("click", function () {
    DeleteCart();
  });
  window.addEventListener("scroll", buttonVisibility);
  TopScrollBtn.addEventListener("click", scrollToTop);
};
init();
