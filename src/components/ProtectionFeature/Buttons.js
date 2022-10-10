import styled from "styled-components";

const StyledButtons = styled.div`
    display: flex;
    margin-top: 50px;

    @media (max-width: 1080px) {
        & {
            flex-direction: column;
            margin-top: 25px;
        }

        & > button {
            margin: 25px auto 0 auto;
        }
    }
`;

const StyledButton = styled.button`
    width: ${props => props.width};
    height: 40px;
    margin-left: ${props => props.marginLeft};
    border: ${props => props.border || "1px solid #e9e9ea"};
    background-color: ${props => props.backgroudColor || "white"};
    border-radius: 30px;
    font-size: 16px;
    color: ${props => props.color};
`

export default function Buttons () {
    return (
        <StyledButtons>
            <StyledButton 
             width={"200px"} 
             backgroudColor={"#267df4"} 
             border={"none"}
             color={"white"}>
                Try to hack us
            </StyledButton>
            <StyledButton 
             width={"140px"}
             color={"#5c5c61"}
             marginLeft={"75px"}>
                Learn more
            </StyledButton>
        </StyledButtons>
    )
}