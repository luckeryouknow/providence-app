import styled from "styled-components";

const StyledLogo = styled.div`
    display: flex;
    text-transform: uppercase;
    margin: 0 auto;

    @media (max-width: 1080px) {
        margin: 0 20px 0 auto;
    }
`;

const StyledDiv = styled.div`
    font-weight: bold;
`

export default function Logo () {
    return(
        <StyledLogo>
            <StyledDiv>new</StyledDiv>
            <div>providence</div>
        </StyledLogo>
    )
}