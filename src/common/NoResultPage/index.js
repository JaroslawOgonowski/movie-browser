import { Container } from "../Container";
import PageHeader from "../PageHeader";
import { NoResultIcon, Wrapper } from "./styled";

const NoResultPage = ({query}) => (
    <Container>
        <PageHeader title={`Sorry, there are no results for "${query}"`}/>
        <Wrapper>
            <NoResultIcon />
        </Wrapper>
    </Container>
);

export default NoResultPage;