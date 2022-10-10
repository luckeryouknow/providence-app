import styled  from "styled-components";
import TextBlock from "./TextBlock";

const StyledProtectionFeature = styled.div`
    display: flex;
    margin-top: 100px;

    & > img {
        width: 55%;
    }

    @media (max-width: 1080px) {
        & {
            flex-direction: column;
        }

        & > img {
            width: 70%;
            margin: 0 auto;
        }
    }
`;

export default function ProtectionFeature () {
    return (
        <StyledProtectionFeature>
            <img src="./ProtectionFeatureImages/iPhone.png" alt=""></img>
            <TextBlock />
        </StyledProtectionFeature>
    )
}