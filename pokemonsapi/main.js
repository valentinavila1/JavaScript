const form = document.getElementById("form");
const PokemonInput = document.querySelector(".pokemon__input");
const cardContainer = document.querySelector(".pokemon__cards__container");
const PokemonMsg = document.querySelector(".pokemon__text");
// console.log(form, PokemonInput, cardContainer, PokemonMsg);

const AppState = {
  isFetching: false,
  currentURL: "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0",
};

// search pokemon
const searchPokemon = async (e) => {
  e.preventDefault();

  if (PokemonInput.value.trim() === "") {
    alert("hola ingresa numero");
    return;
  }
};
// renderizarlos
const RenderPokemons = async (renderpokemon) => {
  const pokemonData = await getPokemonData();
  renderpokemon(pokemonData);
};

//data de la api
const getPokemonData = async () => {
  const { next, results } = await Pokemons(AppState.currentURL);

  const PokemonUrls = results.map((pokemon) => pokemon.url);

  const pokemonsData = await Promise.all(
    PokemonUrls.map(async (url) => {
      const nextData = await fetch(url);

      return await nextData.json();
    })
  );
  //console.log(pokemonsData);
  return pokemonsData;
};

const PokemonDataTemplate = (pokemon) => {
  return {
    id: pokemon.id,
    name: pokemon.name.toUpperCase(),
    image: pokemon.sprites.other.dream_world.front_default,
    height: pokemon.height / 10,
    weight: pokemon.weight / 10,
    types: pokemon.types,
    experience: pokemon.base_experience,
  };
};

const PokemonTemplate = (pokemon) => {
  const { id, name, image, height, weight, types, experience } =
    PokemonDataTemplate(pokemon);
  return `<div class="pokemon__card">
  <div class="pokemon__img">
    <img src="${image}" alt="${name}" />
  </div>
  <div class="pokemon__name">
    <h2>${name}</h2>
  </div>
  <div class="pokemon__exp">
    <p>- EXP: ${experience} -</p>
  </div>
  <div class="pokemon__class">
    <h3>${types.map((tipo) => tipo.type.name.toUpperCase())}</h3>
  </div>
  <div class="pokemon__height">Altura: ${height} mts</div>
  <div class="pokemon__weight">Peso: ${weight} KG</div>
</div>

</div>
`;
};

const RenderPokemonsList = (pokemon) => {
  cardContainer.innerHTML = pokemon
    .map((pokemon) => PokemonTemplate(pokemon))
    .join("");
};
const init = () => {
  form.addEventListener("submit", searchPokemon);
  window.addEventListener(
    "submit",
    async () => await RenderPokemons(RenderPokemonsList)
  );
};
init();
