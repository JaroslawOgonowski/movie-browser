import { Container } from "../Container";
import PageHeader from "../PageHeader";
import { NoResultIcon, Wrapper } from "./styled";

const NoResultPage = () => (
    <Container>
        <PageHeader title={"Sorry, there are no results for “Muan”"}/>
        <Wrapper>
            <NoResultIcon />
        </Wrapper>
    </Container>
);

export default NoResultPage;