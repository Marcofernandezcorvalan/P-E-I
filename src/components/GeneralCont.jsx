import React from "react";
import styled from "styled-components";

export const GenCont = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 60px;
`;
export const Hero = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const GeneralCont = () => {
	return (
		<GenCont>
			<Hero>hero</Hero>
		</GenCont>
	);
};

export default GeneralCont;
