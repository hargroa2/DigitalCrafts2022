//A promise is an action you take and you wait on an expected result. It will either be what you wanted or not. Either resolve or reject
//This is asynchronous, which means that even if you invoke it it will take some time to get back to you

function getCoffee(type) {
  console.log("coffee");
}

//async function, async action, promise
// const oliviasCoffee = async getTypeofCoffee()
// getCoffee(oliviasCcoffee)

//two ways to handle promises
//.then
//async await ES6
getCoffeePromise = new Promise((resolve, reject) => {
  const coffee = "blonde roast";
  if (coffee === "black") {
    resolve("I have your black coffee");
  } else {
    reject("I do not have black coffee");
  }
});

getCoffeePromise
  .then((message) => console.log(message))
  .catch((error) => console.log(error)); //will trigger if promise is rejected

async function order() {
  try {
    const coffeeTime = await getCoffeePromise; //can only use in an async function
    console.log(coffeeTime);
  } catch (error) {
    console.log(error);
  }
}
order();

//statuses: 200 is okay
//look up webfx http status codes glossary

// APIS
/*
Go to webdocs fetch() function to see structure. Fetching data from a place that is not local for our use
CRUD: Create read update destroy
 */
const functionName = async () => {
  const container = document.getElementById("container");

  //fetch from somewhere
  const url = "https://api.com";
  //you must await your fetch
  const response = await fetch(url); //node does not have fetch yet. if you run node with fetch in your project, it won't work
  //you have to convert it to json
  const json = await response.json();
  console.log(json.results); //must look at the data to know what to use

  pokemonCard.classList = "pokemon-card";
  const pokemonName = document.createElement("h1");
  pokemonName.innerText = "pokemon name";
  pokemonCard.appendChild(pokemonName);
  container.appendChild(pokemonCard);
};

functionName();
