import { useSelector } from "react-redux"
import Pagination from "../../../common/Pagination"
import { selectSearchPeople } from "../searchSlice"
import NoResultPage from "../../../common/NoResultPage"

export const SearchPeoplePage = ({ query }) => {
  const { page, results, total_pages, total_results } = useSelector(selectSearchPeople)
  if (total_results == 0) return <NoResultPage query={query} />
  else
  return (
    <>
      <h2>Search results for "{query}" ({total_results})</h2>

      <ul>
        {results.map(object => (
          <li key={object.id}>
            {object.name}  {object.known_for_department}
          </li>
        )
        )}

      </ul>
      <Pagination
        page={page}
        totalPages={total_pages}
      />
    </>
  )
}