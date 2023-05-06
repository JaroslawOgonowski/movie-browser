import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPersonById, selectPersonInfo, selectPersontatus } from "./personSlice";
import ErrorPage from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import MovieTile from "../../../common/MovieTile";
import { useQueryParameters } from "../../search/queryParameters";
import { Layout } from "../../moviesPage/styled";
import { selectSearchPeopleStatus } from "../../search/searchSlice";
import { SearchPeoplePage } from "../../search/searchPeoplePage";
import { Container } from "../../../common/Container";
import ProfilePage from "./ProfilePage";

export const PersonPage = () => {
  const id = useQueryParameters("id");
  const query = useQueryParameters("search");
  const personInfo = useSelector(selectPersonInfo);
  const dispatch = useDispatch();
  const status = useSelector(selectPersontatus);
  const searchStatus = useSelector(selectSearchPeopleStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchPersonById(id))
    }
  }, [dispatch, id]);

  if (status === "error" && query === null) return <ErrorPage />
  if (status === "loading" && query === null) return <Loader searchFor={"person"} />
  if (searchStatus === "success" && query !== null) return <SearchPeoplePage />
  if (status === "success" && query === null)
    return (
      <>
        <Container>
          <ProfilePage
            poster={personInfo.personDescription.profile_path}
            name={personInfo.personDescription.name}
            birthday={personInfo.personDescription.birthday}
            birthplace={personInfo.personDescription.place_of_birth}
            biography={personInfo.personDescription.biography}
          />
        {personInfo.personMovies.cast.length === 0 ?
          null :
          <>
            <h2>Movies- cast ({personInfo.personMovies.cast.length})</h2>
            <Layout>{personInfo.personMovies.cast.map(movie =>
              <MovieTile
                key={`${movie.id}${movie.character}`}
                id={movie.id}
                poster={movie.poster_path}
                title={movie.original_title}
                date={movie.release_date}
                rate={movie.vote_average}
                voteCount={movie.vote_count}
                genres={movie.genre_ids}

              />
            )}</Layout></>
        }
        {personInfo.personMovies.crew.length === 0 ?
          null :
          <>
            <h2>Movies- crew ({personInfo.personMovies.crew.length})</h2>
            <Layout>{personInfo.personMovies.crew.map(movie =>
              <MovieTile
                key={`${movie.id}${movie.job}`}
                id={movie.id}
                poster={movie.poster_path}
                title={movie.original_title}
                date={movie.release_date}
                rate={movie.vote_average}
                voteCount={movie.vote_count}
                genres={movie.genre_ids}

              />
            )}</Layout></>
        }
        </Container>
      </>
    )
}