import { imagesAPI600x900 } from "../../core/API";
import { Name, Photo, Role, StyledContainer } from "./styled";

export const PersonTile = ({ name, profile_path, role }) => {
  return (
    <StyledContainer>
      <Photo src={profile_path ? `${imagesAPI600x900}${profile_path}`: ".PhotoPlaceholder.svg"} alt={name}/>
      <Name>{name}</Name>
      <Role>{role? role : null}</Role>
    </StyledContainer>
  )
};