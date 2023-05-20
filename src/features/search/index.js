import { Input } from "./styled";
import { useQueryParameters, useReplaceQueryParameters } from "./queryParameters";
import { useDispatch } from "react-redux";
import { fetchSearchMoviesList, fetchSearchPeopleList } from "./searchSlice";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

export const Search = () => {
  const dispatch = useDispatch();
  const replaceQueryParameters = useReplaceQueryParameters();
  const page = useQueryParameters("page");
  const query = useQueryParameters("search");
  const { pathname } = useLocation();
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
      dispatch(fetchSearchMoviesList({ query: target.value.trim(), page: page }));
    }
    else dispatch(fetchSearchPeopleList({ query: target.value.trim(), page: page }));
  }

  useEffect(() => {
    if (pathname.includes("/movie")) {
      dispatch(fetchSearchMoviesList({ query: query, page: 1 }));
    }
    else dispatch(fetchSearchPeopleList({ query: query, page: 1 }));
  }, [query]);

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