import { Title } from "./styled";

function PageHeader({ title, moviePageSection }) {
    return <Title moviePageSection={moviePageSection}>{title}</Title>;
}

export default PageHeader;