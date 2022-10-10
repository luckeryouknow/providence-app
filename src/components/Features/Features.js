import styled from "styled-components";
import { FeaturesContent } from "./FeaturesContent";

const StyledFeatures = styled.div`
    display: flex;
    width: 90%;
    margin: 200px auto 0 auto;
    padding-bottom: 100px;
    border-bottom: 2px solid #f4f4f4;

    @media (max-width: 925px) {
        & {
            flex-direction: column;
            margin-top: 150px;
            text-align: center;
        }
    }
`;

const StyledFeaturesElem = styled.div`
    width: 40%;
    margin: 0 auto;

    @media (max-width: 925px) {
        & {
            width: 100%;
            margin-top: 50px;
        }

        & > img {
            display: block;
            margin: 0 auto;
        }
    }
`;

const StyledHeading = styled.div`
    margin-top: 30px;
    font-size: 26px;
`;

const StyledText = styled.div`
    margin-top: 30px;
    font-size: 18px;
    color: #8c8f94;
`;

export default function Features () {
    return (
        <StyledFeatures>
            {FeaturesContent.map((featuresElem) => (
                <StyledFeaturesElem key={featuresElem.id}>
                    <img src={featuresElem.image} alt=""></img>
                    <StyledHeading>{featuresElem.heading}</StyledHeading>
                    <StyledText>{featuresElem.text}</StyledText>
                </StyledFeaturesElem>
            ))}
        </StyledFeatures>
    );
}
