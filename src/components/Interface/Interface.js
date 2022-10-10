import styled from "styled-components";
import Screens from "./Screens";
import Logo from "./Logo";
import Input from "./Input";

const StyledInterface = styled.div`
    padding: 100px 0;
    background-color: #f5f5f8;
    overflow-x: hidden;
`;

const StyledHeader = styled.h4`
    font-size: 42px;
    text-align: center;
`

const StyledDecorateBlock = styled.div`
    width: 40px;
    height: 2px;
    margin: -10px auto 0 auto;
    background-color: #267df4;
`;

const StyledGreyText = styled.div`
    margin-top: 40px;
    font-size: 12px;
    font-weight: ${props => props.fontWeight || "bold"};
    text-transform: uppercase;
    text-align: center;
    color: #8c8f94;
`;

const StyledImage = styled.img`
    display: block;
    margin: 20px auto 0 auto;
    cursor: pointer;
`;

export default function Interface () {
    return (
        <StyledInterface>
            <StyledHeader>Beautiful Interface</StyledHeader>
            <StyledDecorateBlock></StyledDecorateBlock>
            <StyledGreyText>landing screen</StyledGreyText>
            <Screens />
            <Logo />
            <StyledHeader>Get it to your smartphone</StyledHeader>
            <Input />
            <StyledGreyText fontWeight="normal">or download from</StyledGreyText>
            <StyledImage src="./InterfaceImages/AppStore.png" alt=""></StyledImage>
        </StyledInterface>
    )
}