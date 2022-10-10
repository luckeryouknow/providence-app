import styled from "styled-components";

const StyledNewsLetter = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 100px 0;
    border-bottom: 2px solid #f4f4f4;

    @media(max-width: 550px) {
        & {
            width: 90%;
        }
    }
`;

const StyledNewsHeading = styled.div`
    font-size: 42px;
    font-weight: 500;
    text-align: center;
`;

const StyledInputContainer = styled.div`
    display: flex;
    width: 600px;
    height: 50px;
    margin: 50px auto;
    border: 2px solid #cbcbce;
    border-radius: 50px;

    @media (max-width: 800px) {
        & {
            width: 100%;
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
`;

const StyledButton = styled.button`
    width: 36%;
    height: 40px;
    margin: auto 5px auto auto;
    border: none;
    border-radius: 50px;
    background-color: #6fc754;
    color: white;
    cursor: pointer;
`;

const  StyledPromise = styled.div`
    text-align: center;
    color: #8c8f94; 
`;

export default function NewsLetters () {
    return (
        <StyledNewsLetter>
            <StyledNewsHeading>Subscribe to our newsletters</StyledNewsHeading>
            <StyledInputContainer>
                <StyledInput placeholder="Your e-mail"></StyledInput>
                <StyledButton>Subscribe</StyledButton>
            </StyledInputContainer>
            <StyledPromise>We promise to never spam you</StyledPromise>
        </StyledNewsLetter>
    )
}