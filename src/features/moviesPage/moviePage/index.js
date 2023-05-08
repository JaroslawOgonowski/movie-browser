import { useDispatch, useSelector } from "react-redux";
import { useQueryParameters, useReplaceQueryParameters } from "../../search/queryParameters";
import { fetchMovieById, selectMovieInfo, selectMovieStatus } from "./movieSlice";
import { useEffect } from "react";
import ErrorPage from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import { PersonTile } from "../../../common/PersonTile";
import { List } from "../../peoplePage/styled";
import MoviePageHeader from "./moviePageHeader";
import { Container } from "../../../common/Container";
import MainMovieTile from "./mainMovieTile";
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
    else return <SearchMoviePage />
  }, [dispatch, id]);

  if (status === "error" && query === null) return <ErrorPage />
  if (status === "loading" && query === null) return <Loader searchFor={"movie"} />
  if (searchStatus === "success" && query !== null) return <SearchMoviePage />
  if (status === "success" && query === null)
    return (
      <>{movieInfo.movieDescription.backdrop_path ?
        <MoviePageHeader
          poster={movieInfo.movieDescription.backdrop_path}
          rate={movieInfo.movieDescription.vote_average}
          title={movieInfo.movieDescription.title}
          voteCount={movieInfo.movieDescription.vote_count}
        /> :
        null
      }
        <Container>
          <MainMovieTile
            poster={movieInfo.movieDescription.poster_path}
            title={movieInfo.movieDescription.title}
            productionCountry={movieInfo.movieDescription.production_countries}
            date={movieInfo.movieDescription.release_date}
            release={movieInfo.movieDescription.release_date}
            genres={movieInfo.movieDescription.genres}
            voteCount={movieInfo.movieDescription.vote_count}
            rate={movieInfo.movieDescription.vote_average}
            overview={movieInfo.movieDescription.overview}
          />
          <h2>Cast</h2>
          <List>
            {movieInfo.movieCrew.cast.slice(0, 20).map(actor =>
              <PersonTile
                id={actor.id}
                key={`${actor.id}${actor.character}`}
                name={actor.name}
                profile_path={actor.profile_path}
                role={actor.character}
              />
            )}</List>
          <h2>Crew</h2>
          <List>
            {movieInfo.movieCrew.crew.slice(0, 10).map(person =>
              <PersonTile
                key={`${person.id}${person.job}`}
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