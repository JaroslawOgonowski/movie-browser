import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPersonById, selectPersonInfo, selectPersontatus } from "./personSlice";
import ErrorPage from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import MovieTile from "../../../common/MovieTile";
import { useQueryParameters } from "../../search/queryParameters";
import { Layout } from "../../moviesPage/styled";

export const PersonPage = () => {
  const id = useQueryParameters("id")
  const personInfo = useSelector(selectPersonInfo)
  const dispatch = useDispatch()
  const status = useSelector(selectPersontatus)
  
  useEffect(() => {
    if (id) {
      dispatch(fetchPersonById(id))
    }
  }, [dispatch, id]);

  if (status === "error") return <ErrorPage />
  if (status === "loading") return <Loader searchFor={"person"} />
  if (status === "success")
    return (
      <>
        <div>{personInfo.personDescription.name}</div>
        <div>{personInfo.personDescription.biography}</div>
        {personInfo.personMovies.cast.length === 0 ?
          null :
          <>
            <h2>Movies- cast ({personInfo.personMovies.cast.length})</h2>
            <Layout>{personInfo.personMovies.cast.map(movie =>
              <MovieTile
                key={movie.id}
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
                key={movie.id}
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
      </>
    )
}