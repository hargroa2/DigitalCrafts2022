console.log("Restaurant page is working");
const submit = document.getElementById("submitMe");

const sendData = async () => {
  const input = document.getElementById("inputText").value;
  const data = {
    name: input,
  };
  const dataWeAreSending = await fetch("https://localhost:3000/restaurants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(dataWeAreSending);
  const json = await dataWeAreSending.json();
  console.log(json);
};

submit.onlick = () => sendData();
