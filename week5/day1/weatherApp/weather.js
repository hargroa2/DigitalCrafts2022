const API_KEY = "ff1cadec65d9f10c3aafc2a01b14612c";

//button
const searchButton = document.getElementById("temp");
const contain = document.getElementById("container");
const dataContain = document.getElementById("dataContainer");

const tempNumber = document.getElementById("tempNum");
const feelsNumber = document.getElementById("feelsNum");
const windNumber = document.getElementById("windNum");
const humidNumber = document.getElementById("humidNum");

const searchWeather = async () => {
  const searchInput = document.getElementById("location").value;

  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput},us&appid=${API_KEY}&units=imperial`;

  const weatherData = await fetch(forecastUrl);
  const json = await weatherData.json();

  //temperature append
  const showTemp = document.createElement("p");
  showTemp.style.fontSize = "35px";
  showTemp.innerText = json.list[20].main.temp + "\u00B0F";
  tempNumber.append(showTemp);

  //feelslike append
  const showFeel = document.createElement("p");
  showFeel.style.fontSize = "35px";
  showFeel.innerText = json.list[20].main.feels_like + "\u00B0F";
  feelsNumber.append(showFeel);

  //wind append
  const showWind = document.createElement("p");
  showWind.style.fontSize = "35px";
  showWind.innerText = json.list[0].wind.speed + "mph";
  windNumber.append(showWind);

  //humid append
  const showHumid = document.createElement("p");
  showHumid.style.fontSize = "35px";
  showHumid.innerText = json.list[0].main.humidity + "%";
  humidNumber.append(showHumid);

  const monNumber = document.getElementById("monNum");
  const tuesNumber = document.getElementById("tuesNum");
  const wedNumber = document.getElementById("wedNum");
  const thursNumber = document.getElementById("thursNum");
  const friNumber = document.getElementById("friNum");

  //Monday
  const showMon = document.createElement("p");
  showMon.style.fontSize = "35px";
  showMon.innerText = json.list[4].main.temp + "\u00B0F";
  monNumber.append(showMon);

  //Tuesday
  const showTues = document.createElement("p");
  showTues.style.fontSize = "35px";
  showTues.innerText = json.list[12].main.temp + "\u00B0F";
  tuesNumber.append(showTues);

  //Wednesday
  const showWed = document.createElement("p");
  showWed.style.fontSize = "35px";
  showWed.innerText = json.list[20].main.temp + "\u00B0F";
  wedNumber.append(showWed);

  //Thursday
  const showThurs = document.createElement("p");
  showThurs.style.fontSize = "35px";
  showThurs.innerText = json.list[28].main.temp + "\u00B0F";
  thursNumber.append(showThurs);

  //Friday
  const showFri = document.createElement("p");
  showFri.style.fontSize = "35px";
  showFri.innerText = json.list[36].main.temp + "\u00B0F";
  friNumber.append(showFri);
};
searchButton.onclick = () => searchWeather();
