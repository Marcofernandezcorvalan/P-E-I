import React from "react";
import styled from "styled-components";

export const HeaderCont = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	background-color: #ffee07;
	height: 80px;
	padding: 5px 30px;
	/* border-bottom: 0.5px solid gray; */
`;
export const Navbar = styled.ul`
	display: flex;
	width: 350px;
	align-items: center;
	justify-content: space-around;
	font-size: 16px;
	color: black;
	margin-right: 40px;
`;
export const Items = styled.a`
	cursor: pointer;
	font-weight: 600;
	color: black;
`;
export const Logo = styled.img`
	height: 40px;
	margin-left: 40px;
`;

const Header = () => {
	return (
		<HeaderCont>
			<Logo src="../../../public/vite.svg" alt="logo"></Logo>
			<Navbar>
				<Items href="#">Home</Items>
				<Items href="#products">Productos</Items>
				<Items href="">Contactanos</Items>
			</Navbar>
		</HeaderCont>
	);
};

export default Header;
