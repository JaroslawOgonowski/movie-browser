import { changeQuery, selectNavigationSelected } from "../../core/generalSlice";
import { Input } from "./styled";
import { useQueryParameters, useReplaceQueryParameters } from "./queryParameters";

import { useDispatch, useSelector } from "react-redux";
import { fetchSearchMoviesList, fetchSearchPeopleList } from "./searchSlice";
import { SearchMoviePage } from "./searchMoviePage";

export const Search = () => {
  const navigationSelector = useSelector(selectNavigationSelected);
  const dispatch = useDispatch();
  const query = useQueryParameters("search");
  const replaceQueryParameters = useReplaceQueryParameters();

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
      return (<SearchMoviePage />)
    }
    else dispatch(fetchSearchPeopleList({ query: target.value.trim(), page: 1 }));
  }

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