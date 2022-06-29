const dropdown = document.getElementById("pokemon");
const pokemonContainer = document.querySelector(".pokemon-card");

const pokemonChoice = (card) => {
  pokemonContainer.innerHTML = null; //removes last thing printed
  const pokemonCard = document.createElement("div");
  const pokeImage = document.createElement("img");
  pokeImage.classList = "poke-pic";

  const bulbasaur = () => {
    // const cardbox = document.createElement("div");
    pokemonCard.classList.add("bulbCard");
    const bulbName = document.createElement("h1");
    const title = document.createTextNode("Bulby");
    pokeImage.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png";

    const health = document.createTextNode("Vine Whip --- 10");
    const brk = document.createElement("br");
    const attack = document.createTextNode("Razor Leaf --- 20");

    pokemonCard.appendChild(title);
    pokemonCard.appendChild(pokeImage);
    pokemonCard.appendChild(health);
    pokemonCard.appendChild(brk);
    pokemonCard.appendChild(attack);
    pokemonCard.appendChild(brk);
    pokemonContainer.appendChild(pokemonCard);
  };

  if (card === "Bulbasaur") {
    // pokemonCard.innerText = "Bulbasaur noise";
    bulbasaur();
  } else if (card === "Charizard") {
    pokemonCard.innerText = "Charizard noise";
  } else if (card === "Pikachu") {
    pokemonCard.innerText = "Pika Pika";
  } else if (card === "Blastoise") {
    pokemonCard.innerText = "Blastoise noise";
  } else {
    pokemonCard.innerText = "Garchomp noise";
  }
  pokemonContainer.append(pokemonCard);
};
dropdown.onchange = (card) => pokemonChoice(card.target.value);
