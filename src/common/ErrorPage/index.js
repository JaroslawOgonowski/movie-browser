import { ButtonLink, ErrorIcon, ErrorText, Information, Wrapper } from "./styled";

const ErrorPage = () => (
    <Wrapper>
        <ErrorIcon />
        <ErrorText>Ooops! Something went wrong... </ErrorText>
        <Information>Please check your network connection and try again</Information>
        <ButtonLink to="/">Back to Home page</ButtonLink>
    </Wrapper>
);

export default ErrorPage;