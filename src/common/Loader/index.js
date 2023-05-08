import { Container } from "../Container";
import SectionTitle from "../SectionTitle";
import { Spinner, Wrapper } from "./styled";

const Loader = ({ searchFor }) => (
    <Container>
        <SectionTitle title={`Search results for ${searchFor}`} />
        <Wrapper>
            <Spinner />
        </Wrapper>
    </Container>
);

export default Loader;