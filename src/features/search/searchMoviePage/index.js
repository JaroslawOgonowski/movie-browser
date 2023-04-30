import { useSelector } from "react-redux"
import Pagination from "../../../common/Pagination"
import { selectMovies } from "../searchSlice"
import NoResultPage from "../../../common/NoResultPage"

export const SearchMoviePage = ({ query }) => {
  const { page, results, total_pages, total_results } = useSelector(selectMovies)
  if (total_results == 0) return <NoResultPage query={query} />
  else
  return (
    <>
      <h2>Search results for "{query}" ({total_results})</h2>

      <ul>
        {results.map(object => (
          <li key={object.id}>
            {object.title}
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