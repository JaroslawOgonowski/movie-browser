import { Container } from "../Container";
import PageHeader from "../PageHeader";
import { Spinner, Wrapper } from "./styled";

const Loader = ({ searchFor }) => (
    <Container>
        <PageHeader title={`Search results for ${searchFor}`} />
        <Wrapper>
            <Spinner />
        </Wrapper>
    </Container>
);

export default Loader;