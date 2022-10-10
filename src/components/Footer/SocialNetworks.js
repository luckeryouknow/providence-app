import styled from "styled-components";
import { FooterImagesContent } from "./FooterImagesContent";

const StyledSocialNetworkBlock = styled.div`
    max-width: 300px;
    margin: 0 auto;
`;

const StyledLogo = styled.div`
    text-transform: uppercase;

    & > span {
        font-weight: 700;
    }

    @media(max-width: 1080px) {
        text-align: center;
    }
`;

const StyledText = styled.div`
    width: 250px;
    margin-top: 30px;
    color: #8c8f94;

    @media(max-width: 1080px) {
        & {
            margin: 30px auto 0 auto;
            text-align: center;
        }
    }
`;

const StyledAppStore = styled.img`
    display: block;
    width: 200px;
    margin-top: 30px;
    cursor: pointer;

    @media(max-width: 1080px) {
        & {
            margin: 30px auto 0 auto;
        }
    }
`;

const StyledSocialNetworks = styled.div`
    display: flex;
    margin-top: 50px;

    & > img {
        height: 20px;
        margin: 0 auto;
        cursor: pointer;   
    }
`;

export default function SocialNetworks () {
    return (
        <StyledSocialNetworkBlock>
            <StyledLogo><span>new</span>providence</StyledLogo>
            <StyledText>
                It was some time before he obtained any answer, 
                and the reply, when made, was unpropitious.
            </StyledText>
            <StyledAppStore src="./FooterImages/AppStore.png" alt=""></StyledAppStore>
            <StyledSocialNetworks>
                {FooterImagesContent.map((FooterImagesElem) => (
                    <img 
                    src={FooterImagesElem.imagePath} 
                    id={FooterImagesElem.id} 
                    alt="" 
                    key={FooterImagesElem.id}></img>
                ))}
            </StyledSocialNetworks>
        </StyledSocialNetworkBlock>
    );
}