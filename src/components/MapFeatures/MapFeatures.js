import styled from "styled-components";
import TextBlock from "./TextBlock";

const StyledMapFeatures = styled.div`
    display: flex;
    margin-top: 150px;
    padding-bottom: 100px;
    overflow-x: hidden;

    & > img {
        width: 60%;
        margin-top: 40px;
        margin-right: -150px;
    }

    @media (max-width: 1400px) {
        & {
            flex-direction: column;
        }

        & > img {
            width: 100%;
            margin-top: 40px;   
        }
    }
`

export default function MapFeatures () {
    return (
        <StyledMapFeatures>
            <TextBlock />
            <img src="./MapFeaturesImages/Map.png" alt=""></img>
        </StyledMapFeatures>
    )
}