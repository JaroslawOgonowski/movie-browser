import { imagesAPI600x900 } from "../../core/API";
import { Name, Photo, Role, StyledContainer } from "./styled";
import photoPlaceholder from "./PhotoPlaceholder.svg"
import { Link } from "react-router-dom";

export const PersonTile = ({ name, profile_path, role, id }) => {
  
  return (
    <Link  to={`/person/?id=${id}`} key={id}>
    <StyledContainer>
      <Photo src={profile_path ? `${imagesAPI600x900}${profile_path}` : photoPlaceholder} alt={name} />
      <Name>{name ? name : null}</Name>
      <Role>{role ? role : null}</Role>
    </StyledContainer>
    </Link>
  )
};