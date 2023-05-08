import { imagesAPIw200 } from "../../core/API";
import { Name, Photo, Role, StyledContainer, StyledLink } from "./styled";
import photoPlaceholder from "../images/PhotoPlaceholder.svg"

export const PersonTile = ({ name, profile_path, role, id }) => {

  return (
    <StyledLink to={`/person/?id=${id}`} key={`${id}${role}`}>
      <StyledContainer>
        <Photo src={profile_path ? `${imagesAPIw200}${profile_path}` : photoPlaceholder} alt={name} />
        <Name>{name ? name : null}</Name>
        <Role>{role ? role : null}</Role>
      </StyledContainer>
    </StyledLink>
  )
};