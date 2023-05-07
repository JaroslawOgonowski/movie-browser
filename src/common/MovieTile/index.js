import star from "../images/star.svg";
import placeholder from "../images/Poster.jpg"
import { Genres } from "../../features/moviesPage/Genres/genres";
import { imagesAPI600x900 } from "../../core/API";
import {
    ButtonTag,
    Description,
    InfoWrapper,
    MovieTitle,
    Poster,
    Rate,
    Rating,
    Release,
    Star,
    StyledLink,
    Tag,
    Tags,
    TileWrapper,
    Votes
} from "./styled";
import { useDispatch } from "react-redux";


const MovieTile = ({ poster, title, date, rate, voteCount, genres, id }) => {
    const movieGenres = Genres.filter((genre) => genres.includes(genre.id));
    const dispatch = useDispatch();
    return (
        <StyledLink to={`/movie/?id=${id}`} key={id}>
            <TileWrapper>
                <Poster src={poster == null ? placeholder : `${imagesAPI600x900}${poster}`} alt={title}>
                </Poster>
                <InfoWrapper>
                    <Description>
                        <MovieTitle>{title}</MovieTitle>
                        <Release>{date ? date.slice(0, 4) : null}</Release>
                        <Tags>
                            {genres ? movieGenres.slice(0, 3).map((genre) => (
                                <ButtonTag key={genre.id}>
                                    <Tag>{genre.name}</Tag>
                                </ButtonTag>
                            )) : null}
                        </Tags>
                    </Description>
                    <Rating>
                        {rate !== 0 && voteCount !== 0 ?
                            <>
                                <Star src={star} />
                                <Rate>{rate ? rate : null}</Rate>
                                <Votes>{voteCount ? `${voteCount} votes` : null} </Votes>
                            </>
                            :
                            <Votes>No votes yet</Votes>
                        }
                    </Rating>
                </InfoWrapper>
            </TileWrapper>
        </StyledLink>
    );
}

export default MovieTile;