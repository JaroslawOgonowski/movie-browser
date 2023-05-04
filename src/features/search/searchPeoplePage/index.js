import { useSelector } from "react-redux"
import Pagination from "../../../common/Pagination"
import { selectSearchPeople } from "../searchSlice"
import NoResultPage from "../../../common/NoResultPage"
import PageHeader from "../../../common/PageHeader"
import { Container } from "../../../common/Container"
import { List, ListItem } from "../../peoplePage/styled"
import { PersonTile } from "../../../common/PersonTile"

export const SearchPeoplePage = ({ query }) => {
  const { page, results, total_pages, total_results } = useSelector(selectSearchPeople)
  if (total_results === 0) return <NoResultPage query={query} />
  else
    return (
      <Container>
        <PageHeader title={`Search results for "${query}" (${total_results})`} />
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