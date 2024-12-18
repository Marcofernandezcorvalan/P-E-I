import React from "react";
import styled from "styled-components";

export const ProductCard = styled.div`
	display: flex;
	border-radius: 5px;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 10px 5px;
	height: 230px;
	width: 280px;
	/* background: var(--secondbg); */
	background: #c7c7c78f;
	color: black;
`;
export const ProductCardTitle = styled.h4`
	font-size: 13px;
	font-weight: 500;
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
	height: 150px;
	width: 100%;
	border-radius: 7px;
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
