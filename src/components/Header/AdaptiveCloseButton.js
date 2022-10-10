import styled from "styled-components";

const StyledAdaptiveCloseButton = styled.button`
    border: none;
    background: none;
    font-size: 28px;
`

export default function AdaptiveCloseButton (props) {
    return (
        <StyledAdaptiveCloseButton onClick={props.onCloseClick}>╳</StyledAdaptiveCloseButton>
    )
}