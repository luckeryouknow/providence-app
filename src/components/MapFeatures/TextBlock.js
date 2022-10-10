import styled from "styled-components";
import Partners from "./Partners";

const StyledTextBlock = styled.div`
    margin: 0 125px;

    & > h4 {
        font-size: 42px;
    }

    & > div {
        font-size: 20px;
        color: #9a9da1;
    }

    @media (max-width: 1400px) {
        & {
            margin: 0 10px;
            text-align: center;
        }
    }
`

export default function TextBlock () {
    return (
        <StyledTextBlock>
            <h4>We are almost everywhere</h4>
            <div>
                Now the races of these two have been for some ages utterly extinct, 
                and besides to discourse any further of them would not be at all to my purpose. 
                Thus much I thought proper to tell you in relation to yourself, 
                and to the trust I reposed in you.
            </div>
            <Partners />
        </StyledTextBlock>
    )
}