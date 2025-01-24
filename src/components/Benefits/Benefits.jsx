import React from "react";
import styled from "styled-components";
import { ProdTitle } from "../Products/Products";

export const BenefitsCont = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 20px;
	flex-direction: column;
`;

export const BenfetisCardsCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 30px;
`;
export const BenefitsCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 300px;
	width: 300px;
	border-radius: 7px;
	background-color: #c7c7c78f;
	padding: 20px;
	gap: 20px;
`;
export const BenfeitsCardTitle = styled.h6`
	font-weight: 600;
	font-size: 20px;
`;
export const BenefitsText = styled.p`
	font-size: 15px;
`;

const Benefits = () => {
	return (
		<BenefitsCont id="benefits">
			<ProdTitle style={{ marginTop: "70px" }}>Beneficios de trabajar con Nosotros</ProdTitle>
			<BenfetisCardsCont>
				<BenefitsCard>
					<BenfeitsCardTitle>Atencion Al cliente</BenfeitsCardTitle>
					<BenefitsText>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloribus animi officia cumque ex aliquid
						architecto voluptatum, magnam quae deserunt, minima tempore nam temporibus ipsa autem minus voluptatibus non
						perspiciatis?
					</BenefitsText>
				</BenefitsCard>
				<BenefitsCard>
					<BenfeitsCardTitle>Precios Accesibles</BenfeitsCardTitle>
					<BenefitsText>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloribus animi officia cumque ex aliquid
						architecto voluptatum, magnam quae deserunt, minima tempore nam temporibus ipsa autem minus voluptatibus non
						perspiciatis?
					</BenefitsText>
				</BenefitsCard>
				<BenefitsCard>
					<BenfeitsCardTitle>Calidad</BenfeitsCardTitle>
					<BenefitsText>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloribus animi officia cumque ex aliquid
						architecto voluptatum, magnam quae deserunt, minima tempore nam temporibus ipsa autem minus voluptatibus non
						perspiciatis?
					</BenefitsText>
				</BenefitsCard>
			</BenfetisCardsCont>
		</BenefitsCont>
	);
};

export default Benefits;
