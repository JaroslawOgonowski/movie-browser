import { Link } from "react-router-dom";
import { imagesAPI600x900 } from "../../core/API";
import { Name, Photo, Role, StyledContainer, StyledLink } from "./styled";
import photoPlaceholder from "../images/PhotoPlaceholder.svg"
import { useDispatch } from "react-redux";
import { selectingNavigationPeople } from "../../core/generalSlice";

export const PersonTile = ({ name, profile_path, role, id }) => {
  const dispatch = useDispatch();

  return (
    <StyledLink to={`/person/?id=${id}`} key={id} onClick={() => dispatch(selectingNavigationPeople())}>
      <StyledContainer>
        <Photo src={profile_path ? `${imagesAPI600x900}${profile_path}` : photoPlaceholder} alt={name} />
        <Name>{name ? name : null}</Name>
        <Role>{role ? role : null}</Role>
      </StyledContainer>
    </StyledLink>
  )
};