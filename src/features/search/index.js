import { useSelector } from "react-redux";
import { selectNavigationSelected } from "../../core/generalSlice";
import { Input } from "./styled";
import { useQueryParameters, useReplaceQueryParameters } from "./queryParameters";
import searchParamQueryName from "./searchParamQueryName";

export const Search = () => {
  const navigationSelector = useSelector(selectNavigationSelected);
  
  const query = useQueryParameters(searchParamQueryName);
  const replaceQueryParameters = useReplaceQueryParameters();

  const onInputChange = ({ target }) => {
    replaceQueryParameters({
      key: searchParamQueryName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <Input
      value={query || ""}
      onChange={onInputChange}
      placeholder={
        navigationSelector === "movies" ?
          "Search for movies..." :
          "Search for people..."
      } />
  );
};