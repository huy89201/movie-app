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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MovieList() {
  const dispatch = useAppDispatch();

  const { page, isListView, movieListType, query } = useAppSelector(
    (state) => state.movies
  );

  const {
    data: movieByMovieType,
    isLoading: movieByMovieTypeLoading,
    isError: movieByMovieTypeError,
  } = useGetMovieNowPlayinngQuery({
    page,
    movieListType,
  });

  const {
    data: movieByQuery,
    isError: movieByQueryError,
    isLoading: movieByQueryLoading,
  } = useGetMovieBySearchQuery({ page, query });

  const movieList = useMemo(() => {
    if (movieByQuery?.results?.length) return movieByQuery?.results;
    if (movieByMovieType?.results?.length) return movieByMovieType?.results;
  }, [movieByQuery, movieByMovieType]);

  const showToast = () => {
    toast("Something went wrong!!!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  useEffect(() => {
    if (movieByMovieTypeError || movieByQueryError) showToast();
  }, [movieByMovieTypeError, movieByQueryError]);

  // Get init total page
  useEffect(() => {
    if (movieByQuery?.total_results)
      dispatch(initMovieSate(movieByQuery.total_pages));
    if (movieByMovieType?.total_results)
      dispatch(initMovieSate(movieByMovieType.total_pages));
  }, [movieList]);

  return (
    <>
      {movieByMovieTypeLoading || movieByQueryLoading ? (
        <div className="loading-text">loading...</div>
      ) : null}
      <br />
      <div className={isListView ? "" : "movie-grid-view"}>
        {movieList
          ? movieList.map((movie: any) => {
              if (isListView)
                return <MovieItemListView key={movie.id} movie={movie} />;
              return <MovieItemGridView key={movie.id} movie={movie} />;
            })
          : null}
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
