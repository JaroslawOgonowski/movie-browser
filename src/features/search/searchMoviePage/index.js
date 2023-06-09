import { useDispatch, useSelector } from "react-redux"
import Pagination from "../../../common/Pagination"
import { selectSearchMovies } from "../searchSlice"
import NoResultPage from "../../../common/NoResultPage"
import { Container } from "../../../common/Container"
import SectionTitle from "../../../common/SectionTitle"
import MovieTile from "../../../common/MovieTile"
import { Layout } from "../../moviesPage/styled"
import { useQueryParameters } from "../queryParameters"
import { useEffect } from "react"
import { fetchMovieById } from "../../moviesPage/moviePage/movieSlice"
import { useHistory } from "react-router-dom"

export const SearchMoviePage = () => {

  const searchParams = useQueryParameters("search");
  const id = useQueryParameters("id");
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const reload = () => {
      window.location.reload();
    };

    const unlisten = history.listen(() => {
      reload();
    });
    return () => {
      unlisten();
    };
  }, []);

  const { page, results, total_pages, total_results } = useSelector(selectSearchMovies);
  useEffect(() => {
    if (id && searchParams === null
    ) {
      dispatch(fetchMovieById(id))
    }
  }, [searchParams, id]);

  if (total_results === 0) return <NoResultPage query={searchParams} />
  else
    return (
      <Container>
        <SectionTitle title={`Search results for "${searchParams}" (${total_results})`} />
        <Layout>
          {results.map(movie => (
            <MovieTile
              id={movie.id}
              key={movie.id}
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
          page={page}
          totalPages={total_pages}
        />
      </Container>
    );
};