import { useDispatch, useSelector } from "react-redux"
import Pagination from "../../../common/Pagination"
import { selectSearchPeople } from "../searchSlice"
import NoResultPage from "../../../common/NoResultPage"
import SectionTitle from "../../../common/SectionTitle"
import { Container } from "../../../common/Container"
import { List, ListItem } from "../../peoplePage/styled"
import { PersonTile } from "../../../common/PersonTile"
import { useQueryParameters } from "../queryParameters"
import { useHistory } from "react-router-dom"
import { useEffect } from "react"
import { fetchPersonById } from "../../peoplePage/personPage/personSlice"

export const SearchPeoplePage = () => {
  const { page, results, total_pages, total_results } = useSelector(selectSearchPeople);
  const searchParams = useQueryParameters("search");
  const history = useHistory();
  const id = useQueryParameters("id");
  const dispatch = useDispatch();
  
   useEffect(() => {
    const reload = () => {
      window.location.reload();
    };

    const unlisten = history.listen(() => {
      reload();
    });
    return () => {
      unlisten();
    };
  }, []);
  
  useEffect(() => {
    if (id && searchParams === null) {
      dispatch(fetchPersonById(id))
    }
  }, [searchParams, id]); 

  if (total_results === 0) return <NoResultPage query={searchParams} />
  else
    return (
      <Container>
        <SectionTitle title={`Search results for "${searchParams}" (${total_results})`} />
        <List>
          {results.map(object => (
            <ListItem key={object.id}>
              <PersonTile
                name={object.name}
                profile_path={object.profile_path}
                id={object.id}
                role={object.known_for_department}
              />
            </ListItem>
          )
          )}
        </List>
        <Pagination
          page={page}
          totalPages={total_pages}
        />
      </Container>
    )
}