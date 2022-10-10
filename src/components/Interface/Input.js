import styled from "styled-components";

const StyledInputContainer = styled.div`
    display: flex;
    width: 500px;
    height: 50px;
    margin: 0 auto;
    border: 2px solid #cbcbce;
    border-radius: 50px;

    @media (max-width: 550px) {
        & {
            width: 90%;
        }
    }
`;

const StyledInput = styled.input`
    width: 64%;
    height: 40px;
    margin: auto;
    padding-left: 20px;
    border: none;
    outline: none;
    border-radius: 50px;
    background-color: #f5f5f8;
`

const StyledButton = styled.button`
    width: 36%;
    height: 40px;
    margin: auto 5px auto auto;
    border: none;
    border-radius: 50px;
    background-color: #6fc754;
    color: white;
    cursor: pointer;
`

export default function Input () {
    return (
        <StyledInputContainer>
            <StyledInput placeholder="e-mail"></StyledInput>
            <StyledButton>Send Invite</StyledButton>
        </StyledInputContainer>
    )
}