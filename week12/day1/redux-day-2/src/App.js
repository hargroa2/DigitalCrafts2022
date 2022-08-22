import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  const location = useSelector((state) => state.location);

  const getWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location},&appid=ff1cadec65d9f10c3aafc2a01b14612c&units=imperial`;
    const weatherJson = await fetch(url);
    const json = await weatherJson.json();
    dispatch({ type: "SET_WEATHER", payload: json });
    console.log(json);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="cardFlex">
        <div className="inputCard">
          <input
            type="text"
            placeholder="Enter city name"
            onChange={(e) =>
              dispatch({ type: "SET_LOCATION", payload: e.target.value })
            }
          />

          <button onClick={() => getWeather()}>Set Weather</button>
        </div>
        <div className="weatherCard">
          <img
            src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
            alt="icon"
          />
          <p className="temp">{weather?.main?.temp + "°F"}</p>
          <p>{weather?.weather[0]?.description}</p>
          <p>{weather.name}</p>
          <div className="humidfeels">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M176 322.9l.0002-114.9c0-8.75-7.25-16-16-16s-15.1 7.25-15.1 16L144 322.9c-18.62 6.625-32 24.25-32 45.13c0 26.5 21.5 48 48 48s48-21.5 48-48C208 347.1 194.6 329.5 176 322.9zM272 278.5V112c0-61.87-50.12-112-111.1-112S48 50.13 48 112v166.5c-19.75 24.75-32 55.5-32 89.5c0 79.5 64.5 143.1 144 143.1S304 447.5 304 368C304 334 291.8 303.1 272 278.5zM160 448c-44.13 0-80-35.87-80-79.1c0-25.5 12.25-48.88 32-63.75v-192.3c0-26.5 21.5-48 48-48s48 21.5 48 48v192.3c19.75 14.75 32 38.25 32 63.75C240 412.1 204.1 448 160 448z" />
              </svg>
              <p className="margin">{weather?.main?.feels_like + "°F"}</p>
              <p className="tiny">Feels like</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M16 319.1C16 245.9 118.3 89.43 166.9 19.3C179.2 1.585 204.8 1.585 217.1 19.3C265.7 89.43 368 245.9 368 319.1C368 417.2 289.2 496 192 496C94.8 496 16 417.2 16 319.1zM112 319.1C112 311.2 104.8 303.1 96 303.1C87.16 303.1 80 311.2 80 319.1C80 381.9 130.1 432 192 432C200.8 432 208 424.8 208 416C208 407.2 200.8 400 192 400C147.8 400 112 364.2 112 319.1z" />
              </svg>
              <p className="margin">{weather?.main?.humidity + "%"}</p>
              <p className="tiny">Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
