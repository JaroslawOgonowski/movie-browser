import { imagesAPI600x900 } from "../../../../core/API";
import { Biography, Birth, BirthDetails, PersonDetails, PersonName, Poster, PrimaryInfo, Wrapper } from "./styled";
import placeholder from "../../../../common/images/PhotoPlaceholder.svg"

const ProfilePage = ({ poster, name, birthday, birthplace, biography }) => {
    console.log(poster)
    return (
        <Wrapper>
            <Poster src={poster ? `${imagesAPI600x900}${poster}` : placeholder} />
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
                <Biography>{biography}</Biography>
            </PersonDetails>
        </Wrapper>
    );
};

export default ProfilePage;