import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import styled from "styled-components";

export const ImgSty = styled.img`
	width: 100%;
	height: 500px;
	border-radius: 7px;
`;
// export const SwiperStyled = styled.Swiper`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	width: 90%;
// 	height: 400px;
// `;

const Slider = ({ slides }) => {
	return (
		// <h1>hola</h1>
		<Swiper
			spaceBetween={5}
			slidesPerView={2}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
			effect={"fade"}
			navigation={true}
			modules={[Autoplay, EffectFade]}
		>
			{slides.map((slide) => (
				<SwiperSlide key={slide.image}>
					<ImgSty src={slide.image} alt={slide.title} />
				</SwiperSlide>
			))}

			{/* <SwiperSlide>Slide 2</SwiperSlide>
			<SwiperSlide>Slide 3</SwiperSlide> */}
		</Swiper>
	);
};

export default Slider;
