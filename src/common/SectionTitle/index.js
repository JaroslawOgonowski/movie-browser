import { Title } from "./styled";

function SectionTitle({ title, pageSection }) {
    return <Title pageSection={pageSection}>{title}</Title>;
}

export default SectionTitle;