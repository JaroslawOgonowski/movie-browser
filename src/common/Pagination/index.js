import { useDispatch } from "react-redux";
import { BackwardArrow, ForwardArrow } from "./buttonArrows";
import { Button, ButtonText, PageNumber, StyledButtons, StyledPages, StyledPagination } from "./styled";
import { fetchPopularPeople } from "../../features/peoplePage/popularPeopleSlice";
import { fetchPopularMovies } from "../../features/moviesPage/popularMoviesSlice";
import { useEffect } from "react";
import { useQueryParameters, useReplaceQueryParameters } from "../../features/search/queryParameters";
import { fetchSearchMoviesList, fetchSearchPeopleList } from "../../features/search/searchSlice";
import { useLocation } from "react-router-dom";

const Pagination = ({ page, totalPages }) => {
    const replaceQueryParameters = useReplaceQueryParameters();
    const dispatch = useDispatch();
    const query = useQueryParameters("search")
    const nextPage = page + 1;
    const lastPage = totalPages > 500 ? 500 : totalPages;
    const previousPage = page - 1;
    const firstPage = 1;
    const location = useLocation().pathname;
    useEffect(() => {
        replaceQueryParameters({
            key: "page",
            value: page,
        });
    }, []);

    const pageSwitch = (targetPage) => {
        if (location.includes("people") || location.includes("person") && query === null) dispatch(fetchPopularPeople(targetPage));
        if (location.includes("people") || location.includes("person") && query != null) dispatch(fetchSearchPeopleList({ query: query, page: targetPage }));
        if (location.includes("movie") && query === null) dispatch(fetchPopularMovies(targetPage));
        if (location.includes("movie") && query != null) dispatch(fetchSearchMoviesList({ query: query, page: targetPage }));
    };

    return (
        <>
            <StyledPagination>
                <StyledButtons>
                    <Button
                        disabled={page === 1 ? true : false}
                        onClick={() => pageSwitch(firstPage)}
                    >
                        <BackwardArrow disabled={page === 1 ? true : false} />
                        <BackwardArrow disabled={page === 1 ? true : false} />
                        <ButtonText>First</ButtonText>
                    </Button>
                    <Button
                        disabled={page === 1 ? true : false}
                        onClick={() => pageSwitch(previousPage)}
                    >
                        <BackwardArrow disabled={page === 1 ? true : false} />
                        <ButtonText>Previous</ButtonText>
                    </Button>
                </StyledButtons>
                <StyledPages>
                    Page
                    <PageNumber>{page}</PageNumber>
                    of
                    <PageNumber>{totalPages > 500 ? 500 : totalPages}</PageNumber>
                </StyledPages>
                <StyledButtons>
                    <Button
                        disabled={page === totalPages ? true : false || page === 500 ? true : false}
                        onClick={() => pageSwitch(nextPage)}
                    >
                        <ButtonText>Next</ButtonText>
                        <ForwardArrow disabled={page === totalPages ? true : false || page === 500 ? true : false} />
                    </Button>
                    <Button
                        disabled={page === totalPages ? true : false || page === 500 ? true : false}
                        onClick={() => pageSwitch(lastPage)}
                    >
                        <ButtonText>Last</ButtonText>
                        <ForwardArrow disabled={page === totalPages ? true : false || page === 500 ? true : false} />
                        <ForwardArrow disabled={page === totalPages ? true : false || page === 500 ? true : false} />
                    </Button>
                </StyledButtons>
            </StyledPagination >
        </>
    );
};

export default Pagination;