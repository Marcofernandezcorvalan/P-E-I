import React from "react";
import styled from "styled-components";
import Slider from "./Slider";
import slides from "./imagenes.json";

export const HeroStyled = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	opacity: 100%;
	max-width: 1800px;
`;

// export const SwiperStyled = styled.Swiper`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	width: 90%;
// 	height: 400px;
// `;

// export const SwiperSlideStyle = styled.SwiperSlide`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// `;

function Hero() {
	return (
		<HeroStyled>
			<Slider slides={slides} />
		</HeroStyled>
	);
}

export default Hero;
