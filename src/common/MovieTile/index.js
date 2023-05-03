import { ButtonTag, Description, InfoWrapper, MovieTitle, Poster, Rate, Rating, Release, Star, Tag, Tags, TileWrapper, Votes } from "./styled";
import star from "../images/star.svg";
import placeholder from "./Poster.jpg"
import { Genres } from "../../features/moviesPage/Genres/genres";
import { Link } from "react-router-dom";

const MovieTile = ({ poster, title, date, rate, voteCount, genres, id }) => {
    const movieGenres = Genres.filter((genre) => genres.includes(genre.id));

    return (
        <Link to={`/movie/?id=${id}`} key={id}>
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
                        <Rate>{rate ? rate : null}</Rate>
                        <Votes>{voteCount ? voteCount : null} votes</Votes>
                    </Rating>
                </InfoWrapper>
            </TileWrapper>
        </Link>
    );
}

export default MovieTile;