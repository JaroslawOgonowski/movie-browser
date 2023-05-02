import { changeQuery, selectNavigationSelected } from "../../core/generalSlice";
import { Input } from "./styled";
import { useQueryParameters, useReplaceQueryParameters } from "./queryParameters";
import searchParamQueryName from "./searchParamQueryName";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchMoviesList, fetchSearchPeopleList } from "./searchSlice";
import { useEffect } from "react";

export const Search = () => {
  const navigationSelector = useSelector(selectNavigationSelected);
  const dispatch = useDispatch();
  const query = useQueryParameters(searchParamQueryName);
  const replaceQueryParameters = useReplaceQueryParameters();

  const onInputChange = ({ target }) => {
    dispatch(changeQuery(target.value));
    if (target.value === "") return;
    else if (navigationSelector === "movies") dispatch(fetchSearchMoviesList({ query: target.value.trim(), page: 1 }))
    else dispatch(fetchSearchPeopleList({ query: target.value.trim(), page: 1 }));

    replaceQueryParameters({
      key: searchParamQueryName,
      value: target.value.trim() !== "" ? target.value : null,
    });
  };
const page = useQueryParameters("page")
  
useEffect(() => {    
    if (query) {
      if (query === "") return;
      else if (navigationSelector === "movies") dispatch(fetchSearchMoviesList({ query: query, page: page || 1 }))
      else dispatch(fetchSearchPeopleList({ query: query, page: page || 1 }));
    }
  }, [dispatch, navigationSelector, page, query]);

  return (
    <Input
      value={query || ""}
      onChange={onInputChange}
      debounceTimeout={500}
      placeholder={
        navigationSelector === "movies" ?
          "Search for movies..." :
          "Search for people..."
      } />
  );
};