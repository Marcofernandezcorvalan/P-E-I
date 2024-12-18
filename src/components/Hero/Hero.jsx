import React from "react";
import styled from "styled-components";
import Slider from "./Slider";
import slides from "./imagenes.json";

export const HeroCont = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 10px;
	gap: 10px;
`;

export const HeroStyled = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 70%;
	opacity: 100%;
	max-width: 1366px;
	padding: 35px 0px;
	margin-top: 40px;
`;

export const ParrafCont = styled.div`
	width: 30%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 30px;
	background-color: #dbdbdbd1;
	padding: 20px;
	height: 450px;
	border-radius: 7px;
`;

export const ParrafTitle = styled.h3`
	font-size: 30px;
	font-weight: 400;
`;

export const Parraf = styled.p`
	font-size: 13px;
	font-weight: 400;
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
		<HeroCont>
			<ParrafCont>
				<ParrafTitle>Sobre Nosotros</ParrafTitle>
				<Parraf>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere unde harum earum natus esse optio reiciendis
					deserunt praesentium, repellat fugiat ad sunt reprehenderit. Temporibus deleniti doloremque perspiciatis quos
					mollitia impedit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere unde harum earum natus esse
					optio reiciendis deserunt praesentium, repellat fugiat ad sunt reprehenderit. Temporibus deleniti doloremque
					perspiciatis quos mollitia impedit? itia impedit? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Facere unde harum earum natus esse optio reiciendis deserunt praesentium, repellat fugiat ad sunt
					reprehenderit. Temporibus deleniti doloremque perspiciatis quos mollitia impedit?
				</Parraf>
			</ParrafCont>
			<HeroStyled>
				<Slider slides={slides} />
			</HeroStyled>
		</HeroCont>
	);
}

export default Hero;
