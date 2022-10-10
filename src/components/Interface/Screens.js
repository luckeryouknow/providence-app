import styled from "styled-components";
import { InterfaceContent } from "./InterfaceContent";

const StyledScreens = styled.div`
    display: flex;
    width: 120%;
    margin-left: -10%;
    margin-top: 100px;

    & > .Screen {
        height: 568px;
        margin: 66px auto;
    }

    & > .IPhone {
        height: 700px;
        margin: 0 auto;
    }

    @media (max-width: 1440px) {
        & {
            width: 160%;
            margin-left: -30%;
        }
    }

    @media (max-width: 1140px) {
        & {
            width: 200%;
            margin-left: -50%;
        }
    }

    @media (max-width: 880px) {
        & {
            width: 240%;
            margin-left: -70%;
        }
    }

    @media (max-width: 720px) {
        & {
            width: 280%;
            margin-left: -90%;
        }
    }

    @media (max-width: 600px) {
        & {
            width: 340%;
            margin-left: -120%;
        }
    }

    @media (max-width: 500px) {
        & > .Screen {
            display: none;
        }
    }
`

export default function Screens () {
    return (
        <StyledScreens>
            {InterfaceContent.map((InterfaceElem) => (
                <img
                    className={InterfaceElem.className} 
                    src={InterfaceElem.image}
                    alt="" 
                    key={InterfaceElem.id}></img>
            ))}
        </StyledScreens>
    )
}