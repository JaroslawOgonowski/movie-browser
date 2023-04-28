import { useDispatch, useSelector } from "react-redux";
import { fetchPopularPeople, selectPopularPeopleList, selectPopularPeopleStatus } from "./popularPeopleSlice";
import { useEffect } from "react";
import Pagination from "../../common/Pagination";
import { PersonTile } from "../../common/PersonTile";
import { Box, List, ListItem, PopularPeoplePage, Title } from "./styled";

export const PeoplePage = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
  dispatch(fetchPopularPeople())
  }, [])

  const status = useSelector(selectPopularPeopleStatus);
  const fetchResult = useSelector(selectPopularPeopleList);
  if (status === "success") {
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
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </PopularPeoplePage>
        <Pagination
        currentPage={fetchResult.page}
        totalPages={fetchResult.total_pages}
        />
      </>
    );
  }
};