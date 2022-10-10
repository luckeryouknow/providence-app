import styled from "styled-components";

const StyledPartners = styled.div`
    display: block;
`;

const StyledPartnersContainer = styled.div`
    display: flex;
    width: 350px;
    margin-top: 50px;

    & > img {
        width: 150px;
        margin-right: 25px;
    }

    @media (max-width: 1400px) {
        & {
            margin: 50px auto;
        }

        & > img {
            margin: 0 auto;
        }
    }
`;

const StyledPartnersHeading = styled.h4`
    margin-top: 50px;
    font-size: 12px;
    text-transform: uppercase;
    color: black;
`

export default function Partners () {
    return (
        <StyledPartners>
            <StyledPartnersHeading>Partners</StyledPartnersHeading>
            <StyledPartnersContainer>
                <img src="./MapFeaturesImages/Dropbox.png" alt=""></img>
                <img src="./MapFeaturesImages/Evernote.png" alt=""></img>
            </StyledPartnersContainer>
        </StyledPartners>
    )
}