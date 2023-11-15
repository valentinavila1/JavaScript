const Pokemons = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

Pokemons("https://pokeapi.co/api/v2/pokemon/");
