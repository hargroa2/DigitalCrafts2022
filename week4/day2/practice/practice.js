// Select the h1 tag and set "Toppings" as the text of the heading
const head = document.getElementById("heading");
head.innerText = "Toppings";
// Select the list item "burger" and add a class of "list-item"
const burger = document.getElementById("burger");
burger.classList = "list-item";
// Create a new li element and append it to the list
const newLi = document.createElement("li");
newLi.innerHTML = "Hotdogs";
document.getElementById("list").appendChild(newLi);

// ==================================
