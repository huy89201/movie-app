import "./styles.scss";
import { useGetMovieNowPlayinngQuery } from "../../service/movieAPi";
import MovieItemGridView from "../movieItem/gridView/MovieItemGridView";
import MovieItemListView from "../movieItem/listView/MovieItemListView";
import { initMovieSate } from "../../store/slice/moiveSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { useCallback, useEffect } from "react";

export default function MovieList() {
  const { page, isListView, movieListType } = useAppSelector(
    (state) => state.movies
  );
  const { data, error, isLoading } = useGetMovieNowPlayinngQuery({
    page,
    movieListType,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data?.total_pages) dispatch(initMovieSate(data.total_pages));
  }, [data]);

  return (
    <div className={isListView ? "" : "movie-grid-view"}>
      {data?.results
        ? data?.results.map((movie: any) => {
            if (isListView)
              return <MovieItemListView key={movie.id} movie={movie} />;
            return <MovieItemGridView key={movie.id} movie={movie} />;
          })
        : null}

      {isLoading ? <div>loading...</div> : null}
    </div>
  );
}
