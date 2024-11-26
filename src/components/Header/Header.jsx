import React from "react";
import styled from "styled-components";

export const HeaderCont = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	background-color: #c2e4dbab;
	height: 100px;
	padding: 5px 30px;
	border-bottom: 0.5px solid gray;
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
				<Items>Home</Items>
				<Items>Productos</Items>
				<Items>Contactanos</Items>
			</Navbar>
		</HeaderCont>
	);
};

export default Header;
