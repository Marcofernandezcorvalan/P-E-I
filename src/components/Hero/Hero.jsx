import React from "react";
import styled from "styled-components";
import Slider from "./Slider";
import slides from "./imagenes.json";

export const HeroCont = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 10px;
	gap: 10px;
	margin-top: 70px;
	@media screen and (max-width: 1100px) {
		flex-direction: column;
	}
`;

export const HeroStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 70%;
	opacity: 100%;
	max-width: 1366px;
	/* padding: 35px 0px; */
	/* margin-top: 40px; */
	@media screen and (max-width: 1100px) {
		width: 100%;
	}
`;

export const ParrafCont = styled.div`
	width: 30%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 30px;
	background-color: #dbdbdbd1;
	padding: 20px;
	height: 480px;
	border-radius: 7px;
	margin-bottom: 7px;
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

export const ParrafTitle = styled.h3`
	font-size: 30px;
	font-weight: 400;
`;

export const Parraf = styled.p`
	font-size: 13px;
	font-weight: 400;
`;

export const ParrafCont2 = styled.div`
	display: none;
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 30px;
	background-color: #dbdbdbd1;
	padding: 60px;
	height: 300px;
	border-radius: 7px;

	@media screen and (max-width: 1100px) {
		display: flex;
	}
`;
export const ParrafTitle2 = styled.h3`
	display: none;
	font-size: 35px;
	font-weight: 400;
	@media screen and (max-width: 1100px) {
		display: flex;
	}
`;

export const Parraf2 = styled.p`
	display: none;
	font-size: 13px;
	font-weight: 400;
	@media screen and (max-width: 1100px) {
		display: flex;
		font-size: 15px;
	}
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
			<ParrafCont2>
				<ParrafTitle2>Sobre Nosotros</ParrafTitle2>
				<Parraf2>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere unde harum earum natus esse optio reiciendis
					deserunt praesentium, repellat fugiat ad sunt reprehenderit. Temporibus deleniti doloremque perspiciatis quos
					mollitia impedit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere unde harum earum natus esse
					optio reiciendis deserunt praesentium, repellat fugiat ad sunt reprehenderit. Temporibus deleniti doloremque
					perspiciatis quos mollitia impedit? itia impedit? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Facere unde harum earum natus esse optio reiciendis deserunt praesentium, repellat fugiat ad sunt
					reprehenderit. Temporibus deleniti doloremque perspiciatis quos mollitia impedit?
				</Parraf2>
			</ParrafCont2>
		</HeroCont>
	);
}

export default Hero;
