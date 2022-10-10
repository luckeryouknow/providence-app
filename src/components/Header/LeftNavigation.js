import styled from "styled-components";

const StyledLeftNavigation = styled.div`
    display: flex;
    min-width: 400px;

    & > div {
        margin: 0 40px;
        cursor: pointer;
        -webkit-transition: all 0.5s;
    }

    & > div: hover {
        color: #b5b5b5;
        transition: 0.5s;
    }

    @media (max-width: 1080px) {
        & {
            display: none;
        }
    }


`   

export default function LeftNavigation () {
    return(
        <StyledLeftNavigation>
            <div>Tour</div>
            <div>Features</div>
            <div>Pricing</div>
        </StyledLeftNavigation>
    )
}