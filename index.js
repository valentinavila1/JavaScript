const ProductsContainer = document.querySelector(".products__items");
const MoreBtn = document.querySelector(".btn__load");
const CategoriesContainer = document.querySelector(".products__cards");
const CategoriesBtns = document.querySelectorAll(".card");
const menuToggle = document.querySelector(".menu");
const navList = document.getElementById("nav-list");
const Total = document.querySelector(".cart__total");
const BtnBuy = document.querySelector(".cart__btn__buy");
const BtnEmptyCart = document.querySelector(".btn__cart__delete");
const ProductHandler = document.querySelector(".cart__product__handler");

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

navList.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menuToggle.checked = false; // para cerrar el menú
  }
});

// --------------------------------------- CARRITO ----------------------------------- //

const cartBtn = document.querySelector(".cart-btn");
const cart = document.querySelector(".cart");
// menuToggle = .menu
const menu = document.querySelector(".navbar-list");
const overlay = document.querySelector(".overlay");

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

// ----------------------------------------------------------------------------------- //

const TemplateProducts = (product) => {
  return `
    <div class="item">
      <img src="${product.itemImg}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <div class="item__info">
        <span>$${product.price}</span>
        <button class="btn__buy">Agregar al carrito</button>
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
};
init();
