import styled from "styled-components";
import { PlansContent } from "./PlansContent";

const StyledPlansOptions = styled.div`
    display: flex;
    margin-right: auto;
    margin-left: 100px;

    @media(max-width: 1200px) {
        & {
            margin: 0;
        }
    }

    @media(max-width: 800px) {
        display: block;
    }
`;

const StyledPlansOptionsElem = styled.div`
    width: 340px;
    height: 500px;
    border-radius: 20px;
    background-color: "white";
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    transition: 1s;

    &#first > button {
        margin-top: 110px;
    }

    &#second {
        margin-left: 50px;
    }

    @media(max-width: 1200px) {
       & {
           margin: 100px auto 0 auto;
       }

       &#first {
           margin-right: 25px;
       }

       &#second {
           margin-left: 25px;
       }
    }

    @media(max-width: 800px) {
        &#first {
            margin-right: auto;
        }

        &#second {
            margin-left: auto;
        }
    }
`;

const StyledElemHeading = styled.div`
    margin-top: 40px;
    font-size: 32px;
    text-align: center;

    @media(max-width: 800px) {
        & {
            margin: 0;
            padding-top: 40px;
        }
    }
`;

const StyledElemPrice = styled.div`
    width: 60px;
    height: 18px;
    margin: 10px auto 0 auto;
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    border: solid 2px #d4d4d5;
    border-radius: 50px; 
`;

const StyledElemSlogan = styled.div`
    width: 80%;
    margin: 40px auto;
    font-size: 20px;
    text-align: center;
    color: #8c8f94;
`;

const StyledCapabilities = styled.ul`
    width: 250px;
    margin: 0 auto;
    list-style-type: none;
`;

const StyledCapabilitiesElem = styled.li`
    position: relative;
    margin: 10px auto;
    font-size: 16px;
    font-weight: 500;
    text-align: center;

    &::before {
        content: url("PlansImages/CheckMark.png");
        position: absolute;
        top: 15%;
        height: 5px;
        width: 5px;
        transform: translate(-375%, -50%);
    }

`;

const StyledPlansButton = styled.button`
    display: block;
    width: 215px;
    height: 40px;
    margin: 75px auto;
    background: #267df4;
    color: white;
    border: 2px solid #267df4;
    border-radius: 50px;
    transition: 1s;
    cursor: pointer;

    &:hover {
        width: 250px;
    }
`;

export default function PlansOptions () {
    return (
        <StyledPlansOptions>
            {PlansContent.map((PlansOptionsElem) => (
                <StyledPlansOptionsElem key={PlansOptionsElem.id} id={PlansOptionsElem.id}>
                    <StyledElemHeading>{PlansOptionsElem.heading}</StyledElemHeading>
                    <StyledElemPrice>{PlansOptionsElem.prise}</StyledElemPrice>
                    <StyledElemSlogan>{PlansOptionsElem.slogan}</StyledElemSlogan>
                    <StyledCapabilities>
                        {PlansOptionsElem.capabilities.map((capabilitiesElem) => (
                            <StyledCapabilitiesElem key={capabilitiesElem}>{capabilitiesElem}</StyledCapabilitiesElem>

                        ))}
                    </StyledCapabilities>
                    <StyledPlansButton>{PlansOptionsElem.buttonText}</StyledPlansButton>
                </StyledPlansOptionsElem>
            ))}
        </StyledPlansOptions>
    )
}