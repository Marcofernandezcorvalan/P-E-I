import React from "react";
import styled from "styled-components";

export const ContactCont = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const ContactTitle = styled.h3`
	font-size: 24px;
	font-weight: 500;
	text-decoration: underline;
`;

export const ContactParraf = styled.span`
	font-weight: 400;
`;

const Contact = () => {
	return (
		<ContactCont id="contact">
			<ContactTitle>Contactanos</ContactTitle>
			<ContactParraf>atencion al cliente:</ContactParraf>
			<ContactParraf>3410912727</ContactParraf>
		</ContactCont>
	);
};

export default Contact;
