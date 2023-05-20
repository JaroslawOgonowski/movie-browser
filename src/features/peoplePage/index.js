import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useQueryParameters } from "../search/queryParameters";
import { fetchSearchPeopleList, selectSearchStatus } from "../search/searchSlice";
import { fetchPopularPeople, selectPopularPeopleList, selectPopularPeopleStatus } from "./popularPeopleSlice";
import Loader from "../../common/Loader";
import ErrorPage from "../../common/ErrorPage";
import Pagination from "../../common/Pagination";
import { PersonTile } from "../../common/PersonTile";
import { SearchPeoplePage } from "../search/searchPeoplePage";
import { Box, List, ListItem, PopularPeoplePage } from "./styled";
import SectionTitle from "../../common/SectionTitle";
import { useLocation } from "react-router-dom";

export const PeoplePage = () => {

  const dispatch = useDispatch();
  const status = useSelector(selectPopularPeopleStatus);
  const peopleList = useSelector(selectPopularPeopleList);
  const statusSearch = useSelector(selectSearchStatus);
  const location = useLocation().pathname
  const searchQuery = useQueryParameters("search")
  const page = useQueryParameters("page");

  useEffect(() => {
    if (location.includes("movie") && location.includes("search"))
      dispatch(fetchSearchPeopleList({ query: searchQuery, page: page }));
    else dispatch(fetchPopularPeople(page))
  }, []);

  if (status === "error") { return <ErrorPage /> }
  if (statusSearch === "error") return <ErrorPage />
  if (status === "loading" && searchQuery === null) { return <Loader searchFor={"popular people"} /> }
  if (searchQuery !== null && statusSearch === "loading") return <Loader searchFor={searchQuery} />
  if (searchQuery !== null && statusSearch === "success") return <SearchPeoplePage />
  if (status === "success" && searchQuery === null) {
    return (
      <>
        <PopularPeoplePage>
          <SectionTitle title={"Popular people"} />
          <Box>
            <List>
              {peopleList.results.map(person => (
                <ListItem key={`${person.id}`}>
                  <PersonTile
                    name={person.name}
                    profile_path={person.profile_path}
                    id={person.id}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </PopularPeoplePage>
        <Pagination
          page={peopleList.page}
          totalPages={peopleList.total_pages}
        />
      </>
    );
  };
};