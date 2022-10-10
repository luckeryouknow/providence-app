import styled from "styled-components";
import { FooterContent } from "./FooterContent";

const StyledAboutBlock = styled.div`
    display: flex;
    margin-right: auto;
    margin-left: 200px;

    @media(max-width: 1080px) {
        & {
            margin: 0 auto;
        }
    }

    @media(max-width: 740px) {
        & {
            display: block;
        }
    }
`;

const StyledAboutElem = styled.div`
    display: block;
    width: 150px;
    margin: 20px;

    @media(max-width: 1080px) {
        & {
            margin: 100px auto 0 auto;
            text-align: center;
        }
    }
`;

const StyledHeading = styled.div`
    margin-bottom: 10px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
`;

const StyledText = styled.div`
    margin-top: 5px;
    font-size: 16px;
    color: #8c8f94;
    cursor: pointer;
`;

export default function About () {
    return (
        <StyledAboutBlock>
            {FooterContent.map((FooterContentElem) => (
                <StyledAboutElem key={FooterContentElem.key}>
                    <StyledHeading>{FooterContentElem.heading}</StyledHeading>
                    {FooterContentElem.text.map((TextElem) => (
                        <StyledText key={TextElem}>{TextElem}</StyledText>
                    ))}
                </StyledAboutElem>
            ))}
        </StyledAboutBlock>
    )
}