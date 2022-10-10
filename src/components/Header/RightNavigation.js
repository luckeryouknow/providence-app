import styled from "styled-components";
import HeaderButton from "./HeaderButton";

const StyledRightNavigation = styled.div`
    display: flex;
    min-width: 400px;

    & > div {
        margin: 0 40px;
        cursor: pointer;
        -webkit-transition: all 0.5s;
    }

    & > button {
        margin: -5px auto 0 auto;
        -webkit-transition: all 0.5s;
    }

    & > div: hover {
        color: #b5b5b5;
        transition: 0.5s;
    }

    & > button: hover {
        width: 150px;
        transition: 0.5s;
    }

    @media (max-width: 1080px) {
        & {
            display: none;
        }
    }
`

export default function RightNavigation () {
    return(
        <StyledRightNavigation>
            <div>Help</div>
            <div>Contacts</div>
            <HeaderButton />
        </StyledRightNavigation>
    )
}