import styled from "styled-components";
import Buttons from "./Buttons";

const StyledTextBlock = styled.div`
    margin: 75px auto 0 100px;

    & > h4 {
        width: 225px;
        font-size: 42px;
    }

    & > div {
        width: 95%;
        font-size: 20px;
        color: #8c8f94;
    }

    @media (max-width: 1400px) {
        & {
            margin-top: 50px;
        }
    }

    @media (max-width: 1300px) {
        & {
            margin-top: 25px;
        }
    }

    @media (max-width: 1200px){
        & {
            margin-top: 0px;
        }
    }

    @media (max-width: 1080px) {
        & {
            margin: 0 10px;
            text-align: center;
        }

        & > h4 {
            width: 100%;
        }
    
        & > div {
            width: 100%;
        }
    }
`

export default function TextBlock () {
    return (
        <StyledTextBlock>
            <h4>Your day is protected</h4>
            <div>
                 There have not been any since we have lived here, said my mother. 
                 We thought - Mr. Copperfield thought - it was quite a large rookery; 
                 but the nests were very old ones, and the birds have deserted them a long while.
            </div>
            <Buttons />
        </StyledTextBlock>
    )
}