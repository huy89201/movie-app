import "./App.scss";
import SearchBar from "./components/searchBar";
import Container from "./components/container";
import ControlBar from "./components/controlBar";
import MovieList from "./components/movieList";
import Pagination from "./components/pagination";

function App() {
  return (
    <div className="App">
      <Container>
        <SearchBar />
        <br />
        <ControlBar />
        <br />
        <MovieList />
        <br />
        <Pagination />
      </Container>
    </div>
  );
}

export default App;
