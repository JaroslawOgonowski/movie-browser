import { useEffect } from "react";
import { fetchPopularMovies, selectPopularMoviesList, selectPopularMoviesStatus } from "./popularMoviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { imagesAPI600x900 } from "../../core/API";
import Pagination from "../../common/Pagination";

export const MoviesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularMovies())
  }, [])
  const status = useSelector(selectPopularMoviesStatus);
  const fetchResult = useSelector(selectPopularMoviesList);
  if (status === "success") {
    console.log(fetchResult.results)
    return (
      <>
        <div><ul>
          {fetchResult.results.map(movie => (
            <li key={movie.id}>{movie.title}<img src={`${imagesAPI600x900}${movie.poster_path}`} alt=""></img>
            </li>
          ))}</ul>
        </div>
          <Pagination></Pagination>
      </>      
    );

  }
};