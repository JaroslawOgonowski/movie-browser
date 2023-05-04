import { useDispatch, useSelector } from "react-redux";
import { useQueryParameters } from "../../search/queryParameters";
import { fetchMovieById, selectMovieInfo, selectMovieStatus } from "./movieSlice";
import { useEffect } from "react";
import ErrorPage from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import { imagesAPI600x900 } from "../../../core/API";
import { PersonTile } from "../../../common/PersonTile";
import { List } from "../../peoplePage/styled";

export const MoviePage = () => {
  const id = useQueryParameters("id")
  const movieInfo = useSelector(selectMovieInfo)
  const dispatch = useDispatch()

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieById(id))
    }
  }, [dispatch, id]);
  
  const status = useSelector(selectMovieStatus)
  if (status === "error") return <ErrorPage />
  if (status === "loading") return <Loader searchFor={"movie"} />
  if (status === "success")
    return (
      <>
        <div>{movieInfo.movieDescription.original_title}</div>
        <img src={`${imagesAPI600x900}${movieInfo.movieDescription.poster_path}`} alt={`${movieInfo.original_title}"orginal poster"`} />

        <h2>Cast</h2>
        <List>
        {movieInfo.movieCrew.cast.slice(0,20).map(actor=>
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
        {movieInfo.movieCrew.crew.slice(0,10).map(person=>
         <PersonTile 
         key={person.id} 
         name={person.name}
         profile_path={person.profile_path}
         role={person.job}
         id={person.id}
         />
        )}</List>
      </>
    );
};