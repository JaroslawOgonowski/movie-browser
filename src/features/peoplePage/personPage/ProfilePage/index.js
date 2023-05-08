import { imagesAPIw400 } from "../../../../core/API";
import { Biography, Birth, BirthDetails, PersonDetails, PersonName, Poster, PrimaryInfo, Wrapper } from "./styled";
import placeholder from "../../../../common/images/PhotoPlaceholder.svg"

const ProfilePage = ({ poster, name, birthday, birthplace, biography }) => (
    <Wrapper>
        <Poster src={poster ? `${imagesAPIw400}${poster}` : placeholder} />
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