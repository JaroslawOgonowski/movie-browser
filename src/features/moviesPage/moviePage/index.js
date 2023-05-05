import { useDispatch, useSelector } from "react-redux";
import { useQueryParameters } from "../../search/queryParameters";
import { fetchMovieById, selectMovieInfo, selectMovieStatus } from "./movieSlice";
import { useEffect } from "react";
import ErrorPage from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import { PersonTile } from "../../../common/PersonTile";
import { List } from "../../peoplePage/styled";
import MoviePageHeader from "./moviePageHeader";
import { Container } from "../../../common/Container";
import { selectSearchMoviesStatus } from "../../search/searchSlice";
import { SearchMoviePage } from "../../search/searchMoviePage";

export const MoviePage = () => {
  const id = useQueryParameters("id");
  const query = useQueryParameters("search");
  const movieInfo = useSelector(selectMovieInfo);
  const dispatch = useDispatch();
  const searchStatus = useSelector(selectSearchMoviesStatus);
  const status = useSelector(selectMovieStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieById(id))
    }
  }, [dispatch, id]);

  if (status === "error" && query === null) return <ErrorPage />
  if (status === "loading" && query === null) return <Loader searchFor={"movie"} />
  if (searchStatus === "success" && query !== null) return <SearchMoviePage />
  if (status === "success" && query === null)
    return (
      <>
        <MoviePageHeader
          poster={movieInfo.movieDescription.backdrop_path}
          rate={movieInfo.movieDescription.vote_average}
          title={movieInfo.movieDescription.title}
          voteCount={movieInfo.movieDescription.vote_count}
        />
        <Container>
          <h2>Cast</h2>
          <List>
            {movieInfo.movieCrew.cast.slice(0, 20).map(actor =>
              <PersonTile
                id={actor.id}
                key={actor.id}
                name={actor.name}
                profile_path={actor.profile_path}
                role={actor.character}
              />
            )}</List>
          <h2>Crew</h2>
          <List>
            {movieInfo.movieCrew.crew.slice(0, 10).map(person =>
              <PersonTile
                key={person.id}
                name={person.name}
                profile_path={person.profile_path}
                role={person.job}
                id={person.id}
              />
            )}</List>
        </Container>
      </>
    );
};