import { Input } from "./styled";
import { useQueryParameters, useReplaceQueryParameters } from "./queryParameters";
import { useDispatch } from "react-redux";
import { fetchSearchMoviesList, fetchSearchPeopleList } from "./searchSlice";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { fetchMovieById } from "../moviesPage/moviePage/movieSlice";
import { fetchPersonById } from "../peoplePage/personPage/personSlice";

export const Search = () => {
  const dispatch = useDispatch();
  const replaceQueryParameters = useReplaceQueryParameters();
  const page = useQueryParameters("page");
  const query = useQueryParameters("search");
  const { pathname } = useLocation();
  const id = useQueryParameters("id");
  const onInputChange = ({ target }) => {
    if (target.value === "") {
      replaceQueryParameters({
        key: "search",
        value: "",
      });
    }
    replaceQueryParameters({
      key: "search",
      value: query !== "" ? target.value : null,
    });

    if (pathname.includes("/movie")) {
      dispatch(fetchSearchMoviesList({ query: target.value.trim(), page: 1 }));
    }
    else if (pathname.includes("id") && pathname.includes("/movie") && pathname.includes("search") === false) {
      dispatch(fetchMovieById(id));
    }
    else if (pathname.includes("id") && pathname.includes("search") === false) {
      dispatch(fetchPersonById(id));
    }
    else dispatch(fetchSearchPeopleList({ query: target.value.trim(), page: 1 }));
  }

  useEffect(() => {
    if (pathname.includes("/movie")) {
      dispatch(fetchSearchMoviesList({ query: query, page: page }));
    }
    else dispatch(fetchSearchPeopleList({ query: query, page: page }));
  }, []);

  return (

    <Input
      value={query || ""}
      onChange={onInputChange}
      debounceTimeout={500}
      minLength={2}
      placeholder={
        pathname.includes("/movie") ?
          "Search for movies..." :
          "Search for people..."
      } />
  );
};