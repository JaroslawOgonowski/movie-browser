import { useDispatch, useSelector } from "react-redux";
import { fetchPopularPeople, selectPopularPeopleList, selectPopularPeopleStatus } from "./popularPeopleSlice";
import { useEffect, useState } from "react";
import Pagination from "../../common/Pagination";
import { PersonTile } from "../../common/PersonTile";
import { Box, List, ListItem, PopularPeoplePage, Title } from "./styled";
import { useQueryParameters } from "../search/queryParameters";
import { selectQuery } from "../../core/generalSlice";
import Loader from "../../common/Loader";
import ErrorPage from "../../common/ErrorPage";
import { selectSearchPeopleStatus } from "../search/searchSlice";
import { SearchPeoplePage } from "../search/searchPeoplePage";
import { fetchPersonById } from "./personPage/personSlice";
import { Link } from "react-router-dom";


export const PeoplePage = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectPopularPeopleStatus);
  const fetchResult = useSelector(selectPopularPeopleList);
  const page = useQueryParameters("page");
  const query = useSelector(selectQuery);
  const statusSearchPeople = useSelector(selectSearchPeopleStatus);
  const [selectedPerson, setSelectedPerson] = useState(null);
  
  useEffect(() => {
    dispatch(fetchPopularPeople(page))
  }, [dispatch, page])

  const handleMovieClick = (personId) => {
    dispatch(fetchPersonById(personId));
    setSelectedPerson(personId);
  }

  if (status === "error") { return <ErrorPage /> }
  if (status === "loading" && query === "") { return <Loader searchFor={"popular people"} /> }
  if (status === "success" && query === "") {
    return (
      <>
        <PopularPeoplePage>
          <Title>Popular people</Title>
          <Box>
            <List>
              {fetchResult.results.map(person => (
                <Link onClick={() => handleMovieClick(person.id)} to={`/person/?id=${person.id}`} key={person.id}>
                <ListItem key={person.id}>
                  <PersonTile
                    name={person.name}
                    profile_path={person.profile_path}
                  />
                </ListItem>
                </Link>
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
  if (statusSearchPeople === "error") return <ErrorPage />
  if ( statusSearchPeople === "loading") return <Loader searchFor={query} />
  if ( statusSearchPeople === "success") return <SearchPeoplePage query={query} />
};
