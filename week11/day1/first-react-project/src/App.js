import "./App.css";
import { useState } from "react";
import { students, tas } from "./dummydata";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Menu from "./Menu";
import Ad from "./Ad";

//this is a react hook. We use them to change state in functional components
function App() {
  //This is the syntax to create a useState hook. The function is the only thing that can change the state variable
  // const [stateVariable, functionToChangeTheStateVariable] = useState(defaultValueForStateVariable)
  const [counter, setCounter] = useState(0);
  const [mood, setMood] = useState(false);
  return (
    <div className="App">
      <Header />
      <div className="mainContainer">
        <Menu />
        <Content />
        <Ad />
      </div>
      <Footer />
      {/* <h1>Counter {counter}</h1>
      <button onClick={() => setCounter(() => counter + 1)}>+</button>
      <button onClick={() => setCounter(() => counter - 1)}>-</button>

      <h1>How are you feeling today?</h1>
      <h1>{mood ? "happy" : "sad"}</h1>
      <button onClick={() => setMood(!mood)}>Change Mood</button> */}
      {/* If i'm happy, I want a happy face. If sad, then sad face */}
    </div>
  );
}

export default App;
