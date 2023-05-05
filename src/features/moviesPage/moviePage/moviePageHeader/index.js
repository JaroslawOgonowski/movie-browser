import { imagesApi } from "../../../../core/API";
import { BackDropWrapper, BackGround, Backdrop, Information, Rate, Rating, Star, Title, Votes } from "./styled";
import star from "../../../../common/images/star.svg"

const MoviePageHeader = ({ poster, title, rate, voteCount }) => (
    <BackGround>
        <BackDropWrapper>
            <Information>
                <Title>{title}</Title>
                <Rating>
                    <Rate>
                        <Star src={star} />
                        {rate.toFixed(1)} <Votes>/ 10</Votes>
                    </Rate>
                    <Votes>{voteCount} votes</Votes>
                </Rating>
            </Information>
            <Backdrop src={`${imagesApi}/original${poster}`}></Backdrop>
        </BackDropWrapper>
    </BackGround>
);

export default MoviePageHeader;