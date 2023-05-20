import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryParameters } from "../search/queryParameters";
import { fetchPopularMovies, selectPopularMoviesList, selectPopularMoviesStatus } from "./popularMoviesSlice";
import { fetchSearchMoviesList, selectSearchStatus } from "../search/searchSlice";
import SectionTitle from "../../common/SectionTitle";
import Pagination from "../../common/Pagination";
import MovieTile from "../../common/MovieTile";
import { Container } from "../../common/Container";
import ErrorPage from "../../common/ErrorPage";
import Loader from "../../common/Loader";
import { SearchMoviePage } from "../search/searchMoviePage";
import { Layout } from "./styled";
import { useLocation } from "react-router-dom";

export const MoviesPage = () => {
  
  const dispatch = useDispatch();
  const status = useSelector(selectPopularMoviesStatus);
  const movieList = useSelector(selectPopularMoviesList);
  const statusSearch = useSelector(selectSearchStatus);
  const location = useLocation().pathname
  const searchQuery = useQueryParameters("search")
  const page = useQueryParameters("page");
  
  useEffect(() => {
    if (location.includes("movie") && location.includes("search"))
      dispatch(fetchSearchMoviesList({query: searchQuery, page: page}));
    else dispatch(fetchPopularMovies(page));
  }, []);

  if (status === "error") return <ErrorPage />
  if (statusSearch === "error") return <ErrorPage />
  if (status === "loading" && searchQuery === null) return <Loader searchFor={"popular movies"} />
  if (searchQuery !== null && statusSearch === "loading") return <Loader searchFor={searchQuery} />
  if (searchQuery !== null && statusSearch === "success") return <SearchMoviePage />
  if (status === "success" && searchQuery === null)
    return (
      <>
        <Container>
          <SectionTitle title={"Popular movies"} />
          <Layout>
            {movieList.results.map(movie => (
              <MovieTile
                id={movie.id}
                key={`${movie.id}${movie.index}`}
                poster={movie.poster_path}
                title={movie.title}
                date={movie.release_date}
                rate={movie.vote_average.toFixed(1)}
                voteCount={movie.vote_count}
                genres={movie.genre_ids}
              />
            ))}
          </Layout>
          <Pagination
            page={movieList.page}
            totalPages={movieList.total_pages}
          />
        </Container>
      </>
    );
};