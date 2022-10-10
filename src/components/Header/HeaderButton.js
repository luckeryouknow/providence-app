import styled from "styled-components";

const StyledHeaderButton = styled.button`
    width: 135px;
    height: 40px;
    border: none;
    border-radius: 50px;
    background-color: #267df4;
    color: white;
    cursor: pointer;
`

export default function HeaderButton () {
    return(
        <StyledHeaderButton>
            <div>Get App</div>
        </StyledHeaderButton>
    )
}