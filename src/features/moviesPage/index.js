import { useEffect } from "react";
import { fetchPopularMovies, selectPopularMoviesList, selectPopularMoviesStatus } from "./popularMoviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { imagesAPI600x900 } from "../../core/API";
import Pagination from "../../common/Pagination";
import PopularMovieTile from "../../common/PopularMovieTile";
import { Container } from "../../common/Container";
import { Layout, Title } from "./styled";
import { useQueryParameters } from "../search/queryParameters";

export const MoviesPage = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectPopularMoviesStatus);
  const fetchResult = useSelector(selectPopularMoviesList);
  const page = useQueryParameters("page");

  useEffect(() => {
    dispatch(fetchPopularMovies(page))
  }, [dispatch, page]);

  if (status === "success") {

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
};