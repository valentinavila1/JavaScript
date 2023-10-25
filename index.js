const ProductsContainer = document.querySelector(".products__items");
const MoreBtn = document.querySelector(".btn__load");
const CategoriesContainer = document.querySelector(".products__container");
const CardList = document.querySelectorAll(".card");

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

// funcion que inicializa con la página
const init = () => {
  RenderizingProducts(AppState.products[0]); // renderizamos los productos con el appstate y la primera division del array
  MoreBtn.addEventListener("click", MoreProducts);
};
init();
