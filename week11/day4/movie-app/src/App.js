import "./App.css";
import MovieContainer from "./components/MovieContainer";
import { useEffect, useState } from "react";

function App() {
  const [movie, setMovie] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  //useEffect --> {}, [] type. Or data only loads after you click search
  //Async await fetch ^^
  // useEffect(() => {
  //   const fetchMovieData = async () => {
  //     const response = await fetch(
  //       `http://www.omdbapi.com/?s=batman&apikey=31738fd0`
  //     );
  //     const json = await response.json();
  //     setMovie(json);
  //     console.log(json);
  //   };
  //   fetchMovieData();
  // }, []);

  findMovie = async (e) => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${searchTerm}&apikey=31738fd0`
    );
    const json = await response.json();
    setMovies(json.Search);
    console.log(json);
  };

  return (
    <div className="App">
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search for movies here"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={findMovie}>Search</button>
        <MovieContainer
          movies={movies}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
          setMovies={setMovies}
        />
      </div>
    </div>
  );
}

export default App;
