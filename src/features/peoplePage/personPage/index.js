import { useDispatch, useSelector } from "react-redux";
import { fetchPersonById, selectPersonInfo, selectPersontatus } from "./personSlice";
import ErrorPage from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import { useEffect } from "react";
import { useQueryParameters } from "../../search/queryParameters";

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
  return(
    <div>{personInfo.name}</div>
  )
}