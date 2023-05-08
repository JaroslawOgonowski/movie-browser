import { Container } from "../Container";
import SectionTitle from "../SectionTitle";
import { NoResultIcon, Wrapper } from "./styled";

const NoResultPage = ({query}) => (
    <Container>
        <SectionTitle title={`Sorry, there are no results for "${query}"`}/>
        <Wrapper>
            <NoResultIcon />
        </Wrapper>
    </Container>
);

export default NoResultPage;