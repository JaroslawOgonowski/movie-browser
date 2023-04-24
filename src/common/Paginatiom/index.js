import { BackwardArrow, ForwardArrow } from "./buttonArrows";
import { Button, ButtonText, PageNumber, StyledButtons, StyledPages, StyledPagination, Wrapper } from "./styled";

const Pagination = () => (
    <StyledPagination>
        <StyledButtons>
            <Button disabled>
                <BackwardArrow />
                <ButtonText>First</ButtonText>
            </Button>
            <Button disabled>
                <BackwardArrow />
                <ButtonText>Previous</ButtonText>
                <Wrapper>
                    <BackwardArrow />
                </Wrapper>
            </Button>
        </StyledButtons>
        <StyledPages>
            Page
            <PageNumber>1</PageNumber>
            of
            <PageNumber>500</PageNumber>
        </StyledPages>
        <StyledButtons>
            <Button>
                <ButtonText>Next</ButtonText>
                <ForwardArrow />
            </Button>
            <Button>
                <ButtonText>Last</ButtonText>
                <ForwardArrow />
                <Wrapper>
                    <ForwardArrow />
                </Wrapper>
            </Button>
        </StyledButtons>
    </StyledPagination>

);

export default Pagination;