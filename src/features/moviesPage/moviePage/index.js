import { useDispatch, useSelector } from "react-redux";
import { useQueryParameters } from "../../search/queryParameters";
import { fetchMovieById, selectMovieInfo, selectMovieStatus } from "./movieSlice";
import { useEffect } from "react";
import ErrorPage from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import { imagesAPI600x900 } from "../../../core/API";


export const MoviePage = () => {
  const id = useQueryParameters("id")
  const dispatch = useDispatch()
  useEffect(() => {
    if (id) {
      dispatch(fetchMovieById(id))
    }
  }, []);
  const movieInfo = useSelector(selectMovieInfo)
  console.log(movieInfo)
  const status = useSelector(selectMovieStatus)
  if (status === "error") return <ErrorPage />
  if (status === "loading") return <Loader searchFor={"movie"} />
  if (status === "success")
    return (
      <>
        <div>{movieInfo.original_title}</div>
        <img src={`${imagesAPI600x900}${movieInfo.poster_path}`} alt={`${movieInfo.original_title}"orginal poster"`} />
      </>
    );
};