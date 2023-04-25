import { changeQuery, selectNavigationSelected } from "../../core/generalSlice";
import { Input } from "./styled";
import { useQueryParameters, useReplaceQueryParameters } from "./queryParameters";
import searchParamQueryName from "./searchParamQueryName";
import { useDispatch, useSelector } from "react-redux";
import { getPeople } from "./getSearch";
import { fetchSearchMoviesList } from "./searchSlice";

export const Search = () => {
  const navigationSelector = useSelector(selectNavigationSelected);
  const dispatch = useDispatch();
  const query = useQueryParameters(searchParamQueryName);
  const replaceQueryParameters = useReplaceQueryParameters();

  const onInputChange = ({ target }) => {
    dispatch(changeQuery(target.value));
    if (target.value === "") return;
    else if (navigationSelector === "movies") { dispatch(fetchSearchMoviesList(target.value.trim())) }
    else getPeople(target.value.trim());

    replaceQueryParameters({
      key: searchParamQueryName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

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