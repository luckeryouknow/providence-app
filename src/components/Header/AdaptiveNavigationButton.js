import styled from "styled-components";

const StyledAdaptiveNavigationButton = styled.button`
    display: none;
    margin-top: -10px;
    border: none;
    background: none;
    font-size: 34px;

    @media (max-width: 1080px) {
        & {
            display: block;
        }
    }
`

export default function AdaptiveNavigationButton (props) {
    return(
        <StyledAdaptiveNavigationButton onClick={props.adaptiveClick}>
            ☰
        </StyledAdaptiveNavigationButton>
    );
}