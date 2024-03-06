import "./styles.scss";
import {
  useGetMovieNowPlayinngQuery,
  useGetMovieBySearchQuery,
} from "../../service/movieAPi";
import MovieItemGridView from "../movieItem/gridView/MovieItemGridView";
import MovieItemListView from "../movieItem/listView/MovieItemListView";
import { initMovieSate } from "../../store/slice/moiveSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { useEffect, useMemo } from "react";

export default function MovieList() {
  const dispatch = useAppDispatch();

  const { page, isListView, movieListType, query, totalpage } = useAppSelector(
    (state) => state.movies
  );

  const { data: movieByMovieType, isLoading } = useGetMovieNowPlayinngQuery({
    page,
    movieListType,
  });

  const { data: movieByQuery } = useGetMovieBySearchQuery({ page, query });

  const movieList = useMemo(() => {
    if (movieByQuery?.results?.length) return movieByQuery?.results;
    if (movieByMovieType?.results?.length) return movieByMovieType?.results;
  }, [movieByQuery, movieByMovieType]);

  // Get init total page
  useEffect(() => {
    if (movieByQuery?.total_results)
      dispatch(initMovieSate(movieByQuery.total_pages));
    if (movieByMovieType?.total_results)
      dispatch(initMovieSate(movieByMovieType.total_pages));
  }, [movieList]);

  return (
    <div className={isListView ? "" : "movie-grid-view"}>
      {movieList
        ? movieList.map((movie: any) => {
            if (isListView)
              return <MovieItemListView key={movie.id} movie={movie} />;
            return <MovieItemGridView key={movie.id} movie={movie} />;
          })
        : null}

      {isLoading ? <div>loading...</div> : null}
    </div>
  );
}
