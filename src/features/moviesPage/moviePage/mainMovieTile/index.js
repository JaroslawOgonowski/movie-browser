import { imagesAPI600x900, imagesAPIw400 } from "../../../../core/API";
import { ButtonTag, MovieDetails, MovieTitle, Overview, Poster, PrimaryInfo, Production, ProductionCountry, Rate, Rating, ReleaseYear, Star, Tag, Tags, Votes, Wrapper } from "./styled";
import star from "../../../../common/images/star.svg"
import placeholder from "../../../../common/images/Poster.jpg"
const MainMovieTile = ({ poster, title, date, genres, productionCountry, release, rate, voteCount, overview }) => {

    return (
        <Wrapper>
            <Poster src={poster ? `${imagesAPIw400}${poster}` : placeholder} />
            <MovieDetails>
                <MovieTitle>{title}</MovieTitle>
                <ReleaseYear>{date.slice(0, 4)}</ReleaseYear>
                <PrimaryInfo>
                    <Production>Production: </Production>
                    <ProductionCountry>
                        {productionCountry.map((country) => country.name).join(", ")}
                    </ProductionCountry>
                </PrimaryInfo>
                <PrimaryInfo>
                    <Production>Release date: </Production>
                    <ProductionCountry>
                        {new Date(release).toLocaleDateString()}
                    </ProductionCountry>
                </PrimaryInfo>
                <Tags>
                    {genres.map((genre) => (
                        <ButtonTag key={genre.id}>
                            <Tag>{genre.name}</Tag>
                        </ButtonTag>
                    ))}
                </Tags>
                <Rating>
                    <Star src={star} />
                    <Rate>{rate.toFixed(1)}</Rate>
                    <Votes>/ 10</Votes>
                    <Votes>{voteCount} votes</Votes>
                </Rating>
            </MovieDetails>
            <Overview>{overview}</Overview>
        </Wrapper>
    );
};

export default MainMovieTile;