import React from "react";
import styled from "styled-components";
import LogoImg from "../../assets/LogoImg.png";

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
	gap: 30px;
	/* margin-right: 40px; */
	/* text-decoration: underline; */
	/* text-transform: capitalize; */
`;
export const Items = styled.a`
	cursor: pointer;
	font-weight: 500;
	color: black;
	font-size: 15px;
	/* border-bottom: 2px solid black; */
	/* &.hover {
		border-bottom: 1px solid black;
	} */
	/* text-transform: capitalize; */
	&:hover {
		text-decoration: underline;
		font-weight: 600;
		transform: scale(1.1);
		transition: all 0.2s ease;
	}
	@media screen and (max-width: 1100px) {
		font-size: 14px;
	}
`;
export const Logo = styled.img`
	height: 90px;
	/* width: 150px; */
	/* margin-left: 40px; */
	/* padding: 5px; */
`;

const Header = () => {
	return (
		<HeaderCont>
			<Logo src={LogoImg} alt="logo"></Logo>
			<Navbar>
				<Items href="#">Home</Items>
				<Items href="#benefits">Beneficios</Items>
				<Items href="#products">Productos</Items>
				<Items href="#contact">Contactanos</Items>
			</Navbar>
		</HeaderCont>
	);
};

export default Header;
