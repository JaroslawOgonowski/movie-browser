import { ButtonTag, Description, InfoWrapper, MovieTitle, Poster, Rate, Rating, Release, Star, Tag, Tags, TileWrapper, Votes } from "./styled";
import star from "../images/star.svg";
import { useSelector } from "react-redux";
import { selectGenres } from "../../features/moviesPage/Genres/genresSlice";

const PopularMovieTile = ({ poster, title, date, rate, voteCount, genres }) => {
    const genresArray = useSelector(selectGenres);
    const movieGenres = genresArray.filter((genre) => genres.includes(genre.id));

    return (
        <TileWrapper>
            <Poster src={poster}>
            </Poster>
            <InfoWrapper>
                <Description>
                    <MovieTitle>{title}</MovieTitle>
                    <Release>{date.slice(0, 4)}</Release>
                    <Tags>
                        {movieGenres.map((genre) => (
                            <ButtonTag key={genre.id}>
                                <Tag>{genre.name}</Tag>
                            </ButtonTag>
                        ))}
                    </Tags>
                </Description>
                <Rating>
                    <Star src={star} />
                    <Rate>{rate}</Rate>
                    <Votes>{voteCount} votes</Votes>
                </Rating>
            </InfoWrapper>
        </TileWrapper>
    
    );
}

export default PopularMovieTile;