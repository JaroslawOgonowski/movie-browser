import { useEffect } from "react";
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

export const MoviesPage = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectPopularMoviesStatus);
  const fetchResult = useSelector(selectPopularMoviesList);
  const page = useQueryParameters("page");
  const query = useSelector(selectQuery);
  const statusSearchMovie = useSelector(selectSearchMoviesStatus)
  useEffect(() => {
    dispatch(fetchPopularMovies(page))
  }, [dispatch, page]);

  if (status === "error") return <ErrorPage/>
  if (status === "loading" && query === "") return <Loader searchFor={"popular movies"}/>
  if (status === "success" && query === "") {
    
    return (
      <>
        <Container>
          <Title>Popular movies </Title>
          <Layout>
            {fetchResult.results.map(movie => (
              <PopularMovieTile
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
            page={fetchResult.page}
            totalPages={fetchResult.total_pages}
          />
        </Container>
      </>
    );
  }
  if (statusSearchMovie === "error") return <ErrorPage/>
  if (query !== "" && statusSearchMovie ==="loading") return <Loader searchFor={query}/> 
  if (query !=="" && statusSearchMovie === "success") return <SearchMoviePage query={query}/>
  };