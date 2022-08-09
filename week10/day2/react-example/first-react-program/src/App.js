import logo from "./logo.svg";
import "./App.css";
import Student from "./Student";

function App() {
  const name = "Amanda!";
  const students = ["Olivia", "Stacy", "Andrea", "Ethan", "Rahmin"];

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      {students.map((student) => (
        <>
          <Student student={student} />
        </>
      ))}
      <Student student={"Amanda"} />
    </div>
  );
}

export default App;
