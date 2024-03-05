import './App.scss';
import { useGetMovieNowPlayinngQuery } from './service/movieAPi';

function App() {
  const { data, error, isLoading } = useGetMovieNowPlayinngQuery(null)
  console.log(data)

  return (
    <div className="App">
      <h1> hello world</h1>
    </div>
  );
}

export default App;
