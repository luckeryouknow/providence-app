import styled from "styled-components";
import { useState } from "react";
import LeftNavigation from "./LeftNavigation";
import Logo from "./Logo";
import RightNavigation from "./RightNavigation";
import AdaptiveNavigationButton from "./AdaptiveNavigationButton";
import AdaptiveCloseButton from "./AdaptiveCloseButton";
import HeaderButton from "./HeaderButton";

const StyledHeader = styled.header`
    display: flex;
    width: 90%;
    margin: 55px auto 0 auto;
`;

const StyledAdaptiveNavigation = styled.div`
    display: none;
    width: 300px;  
    margin-left: ${props => props.marginLeft || "-300px"};  
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    box-shadow: 0 0 5px rgba(0,0,0,0.4);
    transtion: 0.5s;
    -webkit-transition: all 0.5s;

    & > button {
        display: block;
        margin: 30px 20px 0 auto;
    }

    & > ul {
        width: 100px;
        text-align: right;
        margin: 20px 20px 0 auto;
    }

    & > ul > li {
        margin-top: 15px;
        list-style-type: none;
    }

    @media (max-width: 1080px) {
        & {
            display: block;
        }
    } 
`;

export default function Header () {
    const [marginLeft, setMarginLeft] = useState("-300px");

    const adaptiveOpen = () => {
        setMarginLeft("0px");
    }

    const adaptiveClose = () => {
        setMarginLeft("-300px");
    }

    return(
        <StyledHeader>  
            <StyledAdaptiveNavigation marginLeft={marginLeft}>
                <AdaptiveCloseButton onCloseClick={adaptiveClose} />
                <ul>
                    <li>Tours</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Help</li>
                    <li>Contacts</li>
                </ul>
                <HeaderButton />
            </StyledAdaptiveNavigation>
            <AdaptiveNavigationButton adaptiveClick={adaptiveOpen} />
            <LeftNavigation />
            <Logo />
            <RightNavigation />
        </StyledHeader>
    )
}
