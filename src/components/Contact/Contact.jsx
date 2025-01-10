import React from "react";
import styled from "styled-components";

export const ContactCont = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #0d0d0d;
	width: 100%;
	color: whitesmoke;
`;
export const ContactParraf = styled.span`
	font-weight: 600;
`;

const Contact = () => {
	return <ContactCont id="contact">contact</ContactCont>;
};

export default Contact;
