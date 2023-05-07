import { imagesAPI600x900 } from "../../../../core/API";
import { Biography, Birth, BirthDetails, PersonDetails, PersonName, Poster, PrimaryInfo, Wrapper } from "./styled";

const ProfilePage = ({ poster, name, birthday, birthplace, biography }) => (
    <Wrapper>
        <Poster src={`${imagesAPI600x900}${poster}`} />
        <PersonDetails>
            <PersonName>{name}</PersonName>
            <PrimaryInfo>
                <Birth>Date of birth: </Birth>
                <BirthDetails>{new Date(birthday).toLocaleDateString()}</BirthDetails>
            </PrimaryInfo>
            <PrimaryInfo>
                <Birth>Place of birth: </Birth>
                <BirthDetails>{birthplace}</BirthDetails>
            </PrimaryInfo>
        </PersonDetails>
        <Biography>{biography}</Biography>
    </Wrapper>
);

export default ProfilePage;