import { useDispatch, useSelector } from "react-redux";
import { BackwardArrow, ForwardArrow } from "./buttonArrows";
import { Button, ButtonText, PageNumber, StyledButtons, StyledPages, StyledPagination } from "./styled";
import { fetchPopularPeople } from "../../features/peoplePage/popularPeopleSlice";
import { fetchPopularMovies } from "../../features/moviesPage/popularMoviesSlice";
import { selectNavigationSelected } from "../../core/generalSlice";
import { fetchSearchMoviesList, fetchSearchPeopleList } from "../../features/search/searchSlice";

const Pagination = ({ currentPage, totalPages }) => {
    const dispatch = useDispatch();
    const nextPage = currentPage + 1
    const lastPage = totalPages > 500 ? 500 : totalPages
    const previousPage = currentPage - 1
    const firstPage = 1
    const section = useSelector(selectNavigationSelected)

    const pageSwitch = (page) => {
        switch (section) {
            case "people":
                dispatch(fetchPopularPeople(page))
                break
            default: dispatch(fetchPopularMovies(page))
        };
    };

    return (
        <>
            <StyledPagination>
                <StyledButtons>
                    <Button
                        disabled={currentPage === 1 ? true : false}
                        onClick={() => pageSwitch(firstPage)}
                    >
                        <BackwardArrow />
                        <BackwardArrow />
                        <ButtonText>First</ButtonText>
                    </Button>
                    <Button
                        disabled={currentPage === 1 ? true : false}
                        onClick={() => pageSwitch(previousPage)}
                    >
                        <BackwardArrow />
                        <ButtonText>Previous</ButtonText>
                    </Button>
                </StyledButtons>
                <StyledPages>
                    Page
                    <PageNumber>{currentPage}</PageNumber>
                    of
                    <PageNumber>{totalPages > 500 ? 500 : totalPages }</PageNumber>
                </StyledPages>
                <StyledButtons>
                    <Button
                        disabled={currentPage === totalPages ? true : false || currentPage === 500 ? true : false}
                        onClick={() => pageSwitch(nextPage)}
                    >
                        <ButtonText>Next</ButtonText>
                        <ForwardArrow />
                    </Button>
                    <Button
                        disabled={currentPage === totalPages ? true : false || currentPage === 500 ? true : false}
                        onClick={() => pageSwitch(lastPage)}
                    >
                        <ButtonText>Last</ButtonText>
                        <ForwardArrow />
                        <ForwardArrow />
                    </Button>
                </StyledButtons>
            </StyledPagination >
        </>
    );
};

export default Pagination;