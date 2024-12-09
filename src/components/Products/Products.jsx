import React from "react";
import styled from "styled-components";
import ProductCardComp from "./ProductCardComp";
import products from "../Products/products.json";

export const ProductsContGen = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: whitesmoke;
	/* background: var(--secondbg); */
	padding: 20px;
	width: 90%;
`;

export const ProdTitle = styled.h2`
	font-weight: 600;
	margin-bottom: 80px;
	color: black;
`;

export const ProdsCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	flex-wrap: wrap;
`;

const Products = () => {
	return (
		<ProductsContGen id="products">
			<ProdTitle>Productos</ProdTitle>
			<ProdsCont>
				{products?.map((products) => {
					return <ProductCardComp {...products} key={products.id} />;
				})}
			</ProdsCont>
		</ProductsContGen>
	);
};

export default Products;
