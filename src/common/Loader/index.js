import { Container } from "../Container";
import PageHeader from "../PageHeader";
import { Spinner, Wrapper } from "./styled";

const Loader = () => (
    <Container>
        <PageHeader title={"Search results for “Mulan”"} />
        <Wrapper>
            <Spinner />
        </Wrapper>
    </Container>
);

export default Loader;