import styled from "styled-components";

const StyledLogo = styled.div`
    display: flex;
    width: 100px;
    margin: 100px auto 0 auto;
    text-transform: uppercase;
    font-size: 12px;
    color: #afb0b7;
`;

const StyledDiv = styled.div`
    font-weight: bold;
`

export default function Logo () {
    return (
        <StyledLogo>
            <StyledDiv>new</StyledDiv>
            <div>providence</div>
        </StyledLogo>
    )
}