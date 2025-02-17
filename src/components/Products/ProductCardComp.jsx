import React from "react";
import styled from "styled-components";

export const ProductCard = styled.div`
	display: flex;
	border-radius: 5px;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 10px 10px;
	height: 240px;
	width: 280px;
	/* background: var(--secondbg); */
	background: #c7c7c78f;
	color: black;
	&:hover {
		transform: scale(1.2);
		transition: all 0.2s ease;
	}
`;
export const ProductCardTitle = styled.h4`
	font-size: 13px;
	font-weight: 500;
	padding-bottom: 10px;
`;
export const ProductCardSecondCont = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 90%;
`;
export const ProductCardSpan = styled.span`
	font-weight: 600;
	font-size: 14px;
`;
export const ProductCardImg = styled.img`
	height: 190px;
	opacity: 94%;
`;

const ProductCardComp = ({ img, title, price, id }) => {
	return (
		<>
			<ProductCard key={id}>
				<ProductCardImg src={img} alt={title} />
				<ProductCardTitle>{title}</ProductCardTitle>
				{/* <ProductCardSecondCont>
					<ProductCardSpan>{price}</ProductCardSpan>
				</ProductCardSecondCont> */}
			</ProductCard>
		</>
	);
};

export default ProductCardComp;

// <ProductCard>
// 	<ProductCardImg src="../../../public/vite.svg" alt="asdasd" />
// 	<ProductCardTitle>titulo</ProductCardTitle>
// 	<ProductCardSecondCont>
// 		<ProductCardSpan>$ 100</ProductCardSpan>
// 	</ProductCardSecondCont>
// </ProductCard>
