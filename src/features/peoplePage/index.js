import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useQueryParameters } from "../search/queryParameters";
import { selectQuery } from "../../core/generalSlice";
import { selectSearchPeopleStatus } from "../search/searchSlice";
import { fetchPopularPeople, selectPopularPeopleList, selectPopularPeopleStatus } from "./popularPeopleSlice";
import Loader from "../../common/Loader";
import ErrorPage from "../../common/ErrorPage";
import Pagination from "../../common/Pagination";
import { PersonTile } from "../../common/PersonTile";
import { SearchPeoplePage } from "../search/searchPeoplePage";
import { Box, List, ListItem, PopularPeoplePage } from "./styled";
import PageHeader from "../../common/PageHeader";

export const PeoplePage = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectPopularPeopleStatus);
  const peopleList = useSelector(selectPopularPeopleList);
  const page = useQueryParameters("page");
  const query = useSelector(selectQuery);
  const statusSearchPeople = useSelector(selectSearchPeopleStatus);

  useEffect(() => {
    dispatch(fetchPopularPeople(page))
  }, [dispatch, page]);

  if (status === "error") { return <ErrorPage /> }
  if (statusSearchPeople === "error") return <ErrorPage />
  if (status === "loading" && query === "") { return <Loader searchFor={"popular people"} /> }
  if (query !== "" && statusSearchPeople === "loading") return <Loader searchFor={query} />
  if (query !== "" && statusSearchPeople === "success") return <SearchPeoplePage query={query} />
  if (status === "success" && query === "") {
    return (
      <>
        <PopularPeoplePage>
          <PageHeader title={"Popular people"} />
          <Box>
            <List>
              {peopleList.results.map(person => (
                <ListItem key={person.id}>
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
  }

};
