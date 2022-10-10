import styled from "styled-components";
import SocialNetworks from "./SocialNetworks";
import About from "./About";

const StyledFooter = styled.footer`
    display: flex;
    padding: 100px 0;

    @media(max-width: 1080px) {
        & {
            display: block;
        }
    }
`;

export default function Footer () {
    return (
        <StyledFooter>
            <SocialNetworks />
            <About />
        </StyledFooter>
    )
}