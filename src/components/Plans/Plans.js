import { useState } from "react";
import styled from "styled-components";
import PlansOptions from "./PlansOptions";
import { PlansContent } from "./PlansContent";

const StyledPlans = styled.div`
    display: flex;
    padding: 150px 0;
    background-color: #f4f4f5;

    @media(max-width: 1200px) {
        & {
            display: block;
        }
    }
`;

const StyledTextBlock = styled.div`
    margin-left: auto;
    width: 300px;

    @media(max-width: 1200px) {
        & {
            margin: 0 auto;
            text-align: center;
        }
    }

`;

const StyledHeading = styled.div`
    font-size: 42px;
    font-weight: 500;
`;

const StyledYouAre = styled.div`
    margin-top: 40px;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
`;

const StyledButtons = styled.div`
    display: flex;
    width: 300px;
    height: 50px;
    margin-top: 20px;
    border: solid 2px #d5d6d7;
    border-radius: 50px;

    & > button {
        font-size: 16px;
        font-weight: 500;
    }
`;

const StyledIndividual = styled.button`
    width: 145px;
    height: 46px;
    margin: 2px auto 2px 2px;
    border: none;
    border-radius: 50px;
    color: ${(props) => props.individualColor};
    background-color: ${(props) => props.individualBackground};
    box-shadow: ${(props) => props.individualShadow};
    transition: 1s;
    cursor: pointer;
`;

const StyledCompany = styled.button`
    width: 145px;
    height: 46px;
    margin: 2px 2px 2px auto;
    border: none;
    border-radius: 50px;
    color: ${(props) => props.companyColor};
    background-color: ${(props) => props.companyBackground};
    box-shadow: ${(props) => props.companyShadow};
    transition: 1s;
    cursor: pointer;
`;

const StyledText = styled.div`
    margin-top: 40px;
    font-size: 18px;
    color: #a2a3a5;
`;

const StyledTalk = styled.div`
    margin-top: 30px;
    font-size: 14px;
    color: #a2a3a5;

    & > span {
        color: #267df4;
        text-decoration: underline;
    }
`;

export default function Plans () {
    const [individualBackground, setIndividualBackground] =  useState("white");
    const [individualColor, setIndividualColor] = useState("black");
    const [individualShadow, setIndividualShadow] = useState("0 0 10px rgba(0,0,0,0.15)");

    const [companyBackground, setCompanyBackground] = useState("#f4f4f5");
    const [companyColor, setCompanyColor] = useState("#a2a3a5");
    const [companyShadow, setCompanyShadow] = useState("none");    

    const individualClick = () => {
        setIndividualBackground("white");
        setIndividualColor("black");
        setIndividualShadow("0 0 10px rgba(0,0,0,0.15)");

        setCompanyBackground("#f4f4f5");
        setCompanyColor("#a2a3a5");
        setCompanyShadow("none");

        PlansContent[0].prise = "free";
        PlansContent[1].prise = "4.99$";
    };

    const companyClick = () => {
        setCompanyBackground("white");
        setCompanyColor("black");
        setCompanyShadow("0 0 10px rgba(0,0,0,0.15)");

        setIndividualBackground("#f4f4f5");
        setIndividualColor("#a2a3a5");
        setIndividualShadow("none");

        PlansContent[0].prise = "9.99$";
        PlansContent[1].prise = "49.99$";
    };

    return (
        <StyledPlans>
            <StyledTextBlock>
                <StyledHeading>Choose your perfect plan</StyledHeading>
                <StyledYouAre>you are</StyledYouAre>
                <StyledButtons>
                    <StyledIndividual
                     onClick={individualClick}
                     individualBackground={individualBackground}
                     individualColor={individualColor}
                     individualShadow={individualShadow}>
                        Individual
                    </StyledIndividual>
                    <StyledCompany 
                     onClick={companyClick}
                     companyBackground={companyBackground}
                     companyColor={companyColor}
                     companyShadow={companyShadow}
                     >
                        Company
                     </StyledCompany>
                </StyledButtons>
                <StyledText>
                    Thus much I thought proper to tell you in relation to yourself, 
                    and to the trust I reposed in you.
                </StyledText>
                <StyledTalk>Have a bigger team? <span>Let's talk</span></StyledTalk>
            </StyledTextBlock>
            <PlansOptions />
        </StyledPlans>
    )
}