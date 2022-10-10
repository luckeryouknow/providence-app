import { useState } from "react";
import styled from "styled-components";
import { CarouselContent } from "./CarouselContent";

const StyledCarousel = styled.div`
    padding: 100px 0;
    overflow-x: hidden; 
`;

const StyledMovingPart = styled.div`
    display: flex;
    width: 300%;
    margin-left: ${(props) => props.movingPartMarginLeft || "0%"};
    margin-right: auto;
    transition: 1s;
`;

const StyledMovingPartElem = styled.div`
    width: 100%;
`;

const StyledPerson = styled.img`
	display: block;
	width: 130px;
	margin: 0 auto;
`;

const StyledHeading = styled.div`
	margin-top: 30px;
	text-align: center;
	font-size: 32px;
`;

const StyledText = styled.div`
	margin: 30px auto 0 auto;
	width: 40%;
	text-align: center;
	color: #8c8f94;

    @media(max-width: 850px) {
        & {
            width: 65%;
        }
    }

    @media(max-width: 500px) {
        & {
            width: 80%;
        }
    }
`;

const StyledStars = styled.img`
	display: block;
	margin: 30px auto 0 auto;
`;

const StyledName = styled.div`
	margin-top: 35px;
	font-size: 12px;
	font-weight: bold;
	text-align: center;
	text-transform: uppercase;
`;

const StyledButtons = styled.div`
    display: flex;
    margin-top: 100px;
`;

const StyledPrevButton = styled.button`
    margin-left: auto;
    margin-right: 20px;
    font-size: 50px;
    border: none;
    color: #d4d4d5;
    font-weight: 100;
    background: none;
    cursor: pointer;
`;

const StyledNextButton = styled.button`
    margin-right: auto;
    margin-left: 20px; 
    border: none;
    font-size: 50px;
    color: #d4d4d5;
    font-weight: 100; 
    background: none;
    cursor: pointer;
`;

export default function Carousel () {
    let [currentSlide, setCurrentSlide] = useState(0);
    const [marginLeft, setMarginLeft] = useState(`0%`);
	const [disabledPrev, setDisabledPrev] = useState(false);
	const [disabledNext, setDisabledNext] = useState(false);
    
    const nextButtonClick = () => {
        setCurrentSlide(currentSlide += 1);

        if (currentSlide === 1) {
        	setDisabledPrev(false);
        }

        if (currentSlide === 2) {
        	setDisabledNext(true);
        }
		
        setMarginLeft(`-${currentSlide * 100}%`);	
    };

    const prevButtonClick = () => {
        setCurrentSlide(currentSlide -= 1);	

		if (currentSlide === 0) {
			setDisabledPrev(true);
		}
		
		if (currentSlide === 1) {
			setDisabledNext(false);
		}
		
        setMarginLeft(`-${currentSlide * 100}%`);
    }

    return (
        <StyledCarousel>
            <StyledMovingPart movingPartMarginLeft={marginLeft}>
                {CarouselContent.map((CarouselElem) => (
                    <StyledMovingPartElem className={CarouselElem.className} key={CarouselElem.className}>
                        <StyledPerson src={CarouselElem.image} alt=""></StyledPerson>
                        <StyledHeading>{CarouselElem.heading}</StyledHeading>
                        <StyledText>{CarouselElem.text}</StyledText>
                        <StyledStars src="./CarouselImages/Stars.png" alt=""></StyledStars>
                        <StyledName>{CarouselElem.name}</StyledName>
                    </StyledMovingPartElem>
                ))}
            </StyledMovingPart>
            <StyledButtons>
                <StyledPrevButton onClick={prevButtonClick} disabled={disabledPrev}>
                    &#10094;
                </StyledPrevButton>
                <StyledNextButton onClick={nextButtonClick} disabled={disabledNext} >
                    &#10095;
                </StyledNextButton>
            </StyledButtons>
        </StyledCarousel>
    )
}
