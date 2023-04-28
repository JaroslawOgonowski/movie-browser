import { ButtonTag, Description, InfoWrapper, MovieTitle, Poster, Rate, Rating, Release, Star, Tag, Tags, TileWrapper, Votes } from "./styled";
import star from "../images/star.svg";
import { useSelector } from "react-redux";
import { selectGenres } from "../../features/moviesPage/Genres/genresSlice";
import placeholder from "./Poster.jpg"

const PopularMovieTile = ({ poster, title, date, rate, voteCount, genres }) => {
    const genresArray = useSelector(selectGenres);
    const movieGenres = genresArray.filter((genre) => genres.includes(genre.id));

    return (
        <TileWrapper>
            <Poster src={poster === "https://image.tmdb.org/t/p/w600_and_h900_bestv2/null" ? placeholder : poster}>
            </Poster>
            <InfoWrapper>
                <Description>
                    <MovieTitle>{title}</MovieTitle>
                    <Release>{date ? date.slice(0, 4) : null}</Release>
                    <Tags>
                        {genres ? movieGenres.map((genre) => (
                            <ButtonTag key={genre.id}>
                                <Tag>{genre.name}</Tag>
                            </ButtonTag>
                        )) : null}
                    </Tags>
                </Description>
                <Rating>
                    <Star src={star} />
                    <Rate>{rate? rate : null}</Rate>
                    <Votes>{voteCount? voteCount : null} votes</Votes>
                </Rating>
            </InfoWrapper>
        </TileWrapper>

    );
}

export default PopularMovieTile;