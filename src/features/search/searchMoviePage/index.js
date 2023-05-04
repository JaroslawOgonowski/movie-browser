import { useSelector } from "react-redux"
import Pagination from "../../../common/Pagination"
import { selectMovies } from "../searchSlice"
import NoResultPage from "../../../common/NoResultPage"
import { Container } from "../../../common/Container"
import PageHeader from "../../../common/PageHeader"
import MovieTile from "../../../common/MovieTile"
import { imagesAPI600x900 } from "../../../core/API"
import { Layout } from "../../moviesPage/styled"

export const SearchMoviePage = ({ query }) => {
  const { page, results, total_pages, total_results } = useSelector(selectMovies)
  if (total_results === 0) return <NoResultPage query={query} />
  else
    return (
      <Container>
        <PageHeader title={`Search results for "${query}" (${total_results})`} />
        <Layout>
          {results.map(movie => (
            <MovieTile
              id={movie.id}
              key={movie.id}
              poster={`${imagesAPI600x900}${movie.poster_path}`}
              title={movie.title}
              date={movie.release_date}
              rate={movie.vote_average}
              voteCount={movie.vote_count}
              genres={movie.genre_ids}
            />
          ))}
        </Layout>
        <Pagination
          page={page}
          totalPages={total_pages}
        />
      </Container>
    )
}