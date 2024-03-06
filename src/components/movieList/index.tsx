import "./styles.scss";
import { useGetMovieNowPlayinngQuery } from "../../service/movieAPi";
import MovieItemGridView from "../movieItem/gridView/MovieItemGridView";
import { initMovieSate } from "../../store/slice/moiveSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { useEffect } from "react";

export default function MovieList() {
  const page = useAppSelector((state) => state.movies.page);
  const { data, error, isLoading } = useGetMovieNowPlayinngQuery(page);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data?.total_pages) dispatch(initMovieSate(data.total_pages));
  }, [data]);

  return (
    <div className="movie-list-wrapper">
      {data?.results
        ? data?.results.map((movie: any) => {
            return <MovieItemGridView key={movie.id} movie={movie} />;
          })
        : null}
    </div>
  );
}
