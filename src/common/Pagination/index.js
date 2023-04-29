import { useDispatch, useSelector } from "react-redux";
import { BackwardArrow, ForwardArrow } from "./buttonArrows";
import { Button, ButtonText, PageNumber, StyledButtons, StyledPages, StyledPagination } from "./styled";
import { fetchPopularPeople } from "../../features/peoplePage/popularPeopleSlice";
import { fetchPopularMovies, selectMoviesPage } from "../../features/moviesPage/popularMoviesSlice";
import { selectNavigationSelected } from "../../core/generalSlice";
import { useEffect } from "react";
import { useReplaceQueryParameters } from "../../features/search/queryParameters";

const Pagination = ({ totalPages }) => {
    const replaceQueryParameters = useReplaceQueryParameters();
    const page = useSelector(selectMoviesPage)

    useEffect(() => {
        replaceQueryParameters({
            key: "page",
            value: page,
        });
    }, []);

    const dispatch = useDispatch();
    const nextPage = page + 1
    const lastPage = totalPages > 500 ? 500 : totalPages
    const previousPage = page - 1
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