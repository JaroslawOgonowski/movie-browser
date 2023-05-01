import { useEffect, useState } from "react";
import { fetchPopularMovies, selectPopularMoviesList, selectPopularMoviesStatus } from "./popularMoviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { imagesAPI600x900 } from "../../core/API";
import Pagination from "../../common/Pagination";
import PopularMovieTile from "../../common/PopularMovieTile";
import { Container } from "../../common/Container";
import { Layout, Title } from "./styled";
import { useQueryParameters } from "../search/queryParameters";
import { selectQuery } from "../../core/generalSlice";
import ErrorPage from "../../common/ErrorPage";
import Loader from "../../common/Loader";
import { selectSearchMoviesStatus } from "../search/searchSlice";
import { SearchMoviePage } from "../search/searchMoviePage";
import { Link } from "react-router-dom";
import { fetchMovieById } from "./moviePage/movieSlice";

export const MoviesPage = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectPopularMoviesStatus);
  const fetchResult = useSelector(selectPopularMoviesList);
  const page = useQueryParameters("page");
  const query = useSelector(selectQuery);
  const statusSearchMovie = useSelector(selectSearchMoviesStatus);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    dispatch(fetchPopularMovies(page))
  }, [dispatch, page]);

  const handleMovieClick = (movieId) => {
    dispatch(fetchMovieById(movieId));
    setSelectedMovie(movieId);
  }

  if (status === "error") return <ErrorPage />
  if (status === "loading" && query === "") return <Loader searchFor={"popular movies"} />
  if (status === "success" && query === "") {

    return (
      <>
        <Container>
          <Title>Popular movies </Title>
          <Layout>
            {fetchResult.results.map(movie => (
              <Link key={movie.id} onClick={() => handleMovieClick(movie.id)} to={`/movie/?id=${movie.id}`}>
                <PopularMovieTile
                  key={movie.id}
                  poster={`${imagesAPI600x900}${movie.poster_path}`}
                  title={movie.title}
                  date={movie.release_date}
                  rate={movie.vote_average}
                  voteCount={movie.vote_count}
                  genres={movie.genre_ids}
                />
              </Link>
            ))}
          </Layout>
          <Pagination
            page={fetchResult.page}
            totalPages={fetchResult.total_pages}
          />
        </Container>
      </>
    );
  }
  if (statusSearchMovie === "error") return <ErrorPage />
  if (query !== "" && statusSearchMovie === "loading") return <Loader searchFor={query} />
  if (query !== "" && statusSearchMovie === "success") return <SearchMoviePage query={query} />
};