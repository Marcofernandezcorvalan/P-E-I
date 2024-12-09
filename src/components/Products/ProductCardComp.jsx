import React from "react";
import styled from "styled-components";

export const ProductCard = styled.div`
	display: flex;
	border-radius: 10px;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 20px 10px;
	height: 250px;
	width: 250px;
	background: var(--secondbg);
`;
export const ProductCardTitle = styled.h4`
	font-size: 13px;
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
	height: 110px;
	width: 100%;
`;

const ProductCardComp = ({ img, title, price, id }) => {
	return (
		<>
			<ProductCard key={id}>
				<ProductCardImg src={img} alt={title} />
				<ProductCardTitle>{title}</ProductCardTitle>
				<ProductCardSecondCont>
					<ProductCardSpan>{price}</ProductCardSpan>
				</ProductCardSecondCont>
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
