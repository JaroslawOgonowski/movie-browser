import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryParameters } from "../search/queryParameters";
import { imagesAPI600x900 } from "../../core/API";
import { selectQuery } from "../../core/generalSlice";
import { fetchPopularMovies, selectPopularMoviesList, selectPopularMoviesStatus } from "./popularMoviesSlice";
import { selectSearchMoviesStatus } from "../search/searchSlice";
import PageHeader from "../../common/PageHeader";
import Pagination from "../../common/Pagination";
import MovieTile from "../../common/MovieTile";
import { Container } from "../../common/Container";
import ErrorPage from "../../common/ErrorPage";
import Loader from "../../common/Loader";
import { SearchMoviePage } from "../search/searchMoviePage";
import { Layout } from "./styled";

export const MoviesPage = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectPopularMoviesStatus);
  const movieList = useSelector(selectPopularMoviesList);
  const page = useQueryParameters("page");
  const query = useSelector(selectQuery);
  const statusSearchMovie = useSelector(selectSearchMoviesStatus);

  useEffect(() => {
    dispatch(fetchPopularMovies(page))
  }, [dispatch, page]);


  if (status === "error") return <ErrorPage />
  if (statusSearchMovie === "error") return <ErrorPage />
  if (status === "loading" && query === "") return <Loader searchFor={"popular movies"} />
  if (query !== "" && statusSearchMovie === "loading") return <Loader searchFor={query} />
  if (query !== "" && statusSearchMovie === "success") return <SearchMoviePage query={query} />
  if (status === "success" && query === "")
    return (
      <>
        <Container>
          <PageHeader title={"Popular movies"} />
          <Layout>
            {movieList.results.map(movie => (
              <MovieTile
                id={movie.id}
                key={movie.id}
                poster={`${imagesAPI600x900}${movie.poster_path}`}
                title={movie.title}
                date={movie.release_date}
                rate={movie.vote_average}
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