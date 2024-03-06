import "./styles.scss";
import { FaRegEye, FaStar } from "react-icons/fa";

interface Props {
  movie: any;
}

export default function MovieItemListView({ movie }: Props) {
  return (
    <div className="card-list-view">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        loading="lazy"
        alt={movie.title}
      />
      <div className="title">{movie.title}</div>
      <div className="release-date">{movie.release_date}</div>
      <div className="original-language">{movie.original_language}</div>
      <div className="popularity">
        {movie.popularity} <FaRegEye />
      </div>
      <div className="release-date">
        {movie.vote_average.toFixed(1)}/10 <FaStar color="yellow"/>
      </div>
    </div>
  );
}
