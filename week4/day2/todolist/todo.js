const newListItem = () => {
  const li = document.createElement("li");
  const brk = document.createElement("br");
  const buttns = document.createElement("button");
  const buttns2 = document.createElement("button");
  const inputValue = document.getElementById("myInput").value;
  const text = document.createTextNode(inputValue);
  li.appendChild(text);
  li.appendChild(brk);
  li.appendChild(buttns).textContent = "check";
  li.appendChild(buttns2).textContent = "X";

  if (inputValue === "") {
    console.log("No task written, try again");
  } else {
    document.getElementById("myList").appendChild(li);
  }
  document.getElementById("myInput").value = "";
};

deleteItem = () => {};

// ======================
