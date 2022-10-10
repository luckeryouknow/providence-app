import styled from "styled-components";

const  StyledHeaderTextBlockButton = styled.button`
    display: block;
    width: 180px;
    height: 45px;
    margin: 50px auto 0 auto;
    border: solid #b5b5b5 1px;
    border-radius: 50px;
    background-color: white;
    cursor: pointer;
    -webkit-transition: all 0.5s;

    &:hover { 
        width: 200px;
        transtion: 0.5s;
    }
`

export default function HeaderTextBlockButton () {
    return(
        <StyledHeaderTextBlockButton>
            Watch Video
        </StyledHeaderTextBlockButton>
    )
}