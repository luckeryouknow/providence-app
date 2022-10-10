import styled from "styled-components";
import HeaderTextBlockButton from "./HeaderTextBlockButton";

const StyledHeaderTextBlock = styled.div`
    display: block;
    margin-top: 150px;

    & > h1 {
        text-align: center;
        font-size: 60px;
        font-weight: 600;
    }

    & > div {
        display: block;
        width: 50%;
        margin: 0 auto;
        text-align: center;
        font-size: 20px;
        color: #b5b5b5;
    }
`;

export default function HeaderTextBlock () {
    return(
        <StyledHeaderTextBlock>
            <h1>What happens tomorrow?</h1>
            <div>
                The sight of the tumblers restored Bob Sawyer to a degree of equanimity which he had
                not possessed since hiw interview with his landlady. His face brighhtened up, and began
                to feel quite convivial.
            </div>

            <HeaderTextBlockButton />
        </StyledHeaderTextBlock>
    );
}
