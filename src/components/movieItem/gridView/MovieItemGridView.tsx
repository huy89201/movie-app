import "./styles.scss";

interface Props {
  movie: any;
}
export default function MovieItemGridView({ movie }: Props) {
  return (
    <div className="card-grid-view">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        loading="lazy"
        alt={movie.title}
      />
      <div className="title">{movie.title}</div>
    </div>
  );
}
