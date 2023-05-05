import { changeQuery, selectNavigationSelected } from "../../core/generalSlice";
import { Input } from "./styled";
import { useQueryParameters, useReplaceQueryParameters } from "./queryParameters";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchMoviesList, fetchSearchPeopleList } from "./searchSlice";
import { useEffect } from "react";

export const Search = () => {
  const navigationSelector = useSelector(selectNavigationSelected);
  const dispatch = useDispatch();
  const replaceQueryParameters = useReplaceQueryParameters();
  const page = useQueryParameters("page")
  const query = useQueryParameters("search");

  const onInputChange = ({ target }) => {
    dispatch(changeQuery(target.value));
    replaceQueryParameters({
      key: "search",
      value: query !== "" ? target.value : null,
    });

    if (target.value === "") {
      replaceQueryParameters({
        key: "search",
        value: "",
      });
    }
    else if (navigationSelector === "movies") {
      dispatch(fetchSearchMoviesList({ query: target.value.trim(), page: 1 }))
    }
    else dispatch(fetchSearchPeopleList({ query: target.value.trim(), page: 1 }));
  }

  useEffect(() => {
    if (navigationSelector === "movies") {
      dispatch(fetchSearchMoviesList({ query: query, page: page }))
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
        navigationSelector === "movies" ?
          "Search for movies..." :
          "Search for people..."
      } />
  );
};