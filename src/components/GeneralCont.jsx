import React from "react";
import styled from "styled-components";
import Hero from "./Hero/Hero";
import Products from "./Products/Products";
import Contact from "./Contact/Contact";

export const GenCont = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10px 5px;
	gap: 100px;
`;

const GeneralCont = () => {
	return (
		<GenCont>
			<Hero />
			<Products />
			<Contact />
		</GenCont>
	);
};

export default GeneralCont;
