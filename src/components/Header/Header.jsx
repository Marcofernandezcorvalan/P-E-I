import React from "react";
import styled from "styled-components";

export const HeaderCont = styled.header`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	/* background-color: #ffee07; */
	background-color: #dbdbdbd1;
	height: 80px;
	padding: 5px 30px;
	/* border-bottom: 0.5px solid black; */
	position: fixed;
	z-index: 2;
`;
export const Navbar = styled.ul`
	display: flex;
	width: 350px;
	align-items: center;
	justify-content: space-around;
	font-size: 14px;
	color: black;
	/* margin-right: 40px; */
	/* text-decoration: underline; */
	/* text-transform: capitalize; */
`;
export const Items = styled.a`
	cursor: pointer;
	font-weight: 500;
	color: black;
	/* border-bottom: 2px solid black; */
	/* &.hover {
		border-bottom: 1px solid black;
	} */
	/* text-transform: capitalize; */
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
				<Items href="#contact">Contactanos</Items>
			</Navbar>
		</HeaderCont>
	);
};

export default Header;
