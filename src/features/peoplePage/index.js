import { useDispatch, useSelector } from "react-redux";
import { fetchPopularPeople, selectPopularPeopleList, selectPopularPeopleStatus } from "./popularPeopleSlice";
import { useEffect } from "react";
import Pagination from "../../common/Pagination";
import { PersonTile } from "../../common/PersonTile";
import { Box, List, ListItem, PopularPeoplePage, Title } from "./styled";
import { useQueryParameters } from "../search/queryParameters";
import { selectQuery } from "../../core/generalSlice";
import Loader from "../../common/Loader";
import ErrorPage from "../../common/ErrorPage";
import { selectSearchPeopleStatus } from "../search/searchSlice";
import { SearchPeoplePage } from "../search/searchPeoplePage";



export const PeoplePage = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectPopularPeopleStatus);
  const fetchResult = useSelector(selectPopularPeopleList);
  const page = useQueryParameters("page");
  const query = useSelector(selectQuery);
  const statusSearchPeople = useSelector(selectSearchPeopleStatus);


  useEffect(() => {
    dispatch(fetchPopularPeople(page))
  }, [dispatch, page])



  if (status === "error") { return <ErrorPage /> }
  if (status === "loading" && query === "") { return <Loader searchFor={"popular people"} /> }
  if (statusSearchPeople === "error") return <ErrorPage />
  if (statusSearchPeople === "loading") return <Loader searchFor={query} />
  if (statusSearchPeople === "success") return <SearchPeoplePage query={query} />
  if (status === "success" && query === "") {
    
    return (
      <>
        <PopularPeoplePage>
          <Title>Popular people</Title>
          <Box>
            <List>
              {fetchResult.results.map(person => (
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
          page={fetchResult.page}
          totalPages={fetchResult.total_pages}
        />
      </>
    );
  }

};
