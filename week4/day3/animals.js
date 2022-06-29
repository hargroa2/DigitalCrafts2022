const dropdown = document.getElementById("animal-farm");
const animalNoiseContainer = document.querySelector(".animal-noise");
const animalChoice = (emoji) => {
  // figure out how to create elements
  animalNoiseContainer.innerHTML = null; //removes last thing printed
  const animalNoise = document.createElement("h1");
  const animalImage = document.createElement("img");
  animalImage.classList = "animal-pic";
  // figure out how to attach those elements to the web pages
  if (emoji === "🐷") {
    animalNoise.innerText = "oink oink";
    animalImage.src = "https://bit.ly/3a54ofh";
  } else if (emoji === "😼") {
    animalNoise.innerText = "meooow";
  } else if (emoji === "🐶") {
    animalNoise.innerText = "woof";
  } else {
    animalNoise.innerText = "cluck cluck";
  }
  animalNoiseContainer.append(animalImage, animalNoise);
};
dropdown.onchange = (event) => animalChoice(event.target.value);
