import { ButtonTag, Description, InfoWrapper, MovieTitle, Poster, Rate, Rating, Release, Star, Tag, Tags, TileWrapper, Votes } from "./styled";
import image from "../images/poster.png";
import star from "../images/star.svg";

const PopularMovieTile = () => (
    <TileWrapper>
        <Poster src={image}>
        </Poster>
        <InfoWrapper>
            <Description>
                <MovieTitle>Mulan</MovieTitle>
                <Release>2020</Release>
                <Tags>
                    <ButtonTag>
                        <Tag>Action</Tag>
                    </ButtonTag>
                    <ButtonTag>
                        <Tag>Action</Tag>
                    </ButtonTag>
                    <ButtonTag>
                        <Tag>Action</Tag>
                    </ButtonTag>
                </Tags>
            </Description>
            <Rating>
                <Star src={star} />
                <Rate>7,8</Rate>
                <Votes>35 votes</Votes>
            </Rating>
        </InfoWrapper>
    </TileWrapper>
);

export default PopularMovieTile;