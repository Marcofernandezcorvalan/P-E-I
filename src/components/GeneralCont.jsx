import React from "react";
import styled from "styled-components";
import Hero from "./Hero/Hero";

export const GenCont = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10px 10px;
`;

const GeneralCont = () => {
	return (
		<GenCont>
			<Hero />
		</GenCont>
	);
};

export default GeneralCont;
