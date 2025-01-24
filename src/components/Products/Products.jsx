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
	width: 100%;
`;

export const ProdTitle = styled.h2`
	font-weight: 400;
	margin-bottom: 35px;
	color: black;
	font-size: 28px;
`;

export const ProdsCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 35px;
	flex-wrap: wrap;
`;

const Products = () => {
	return (
		<ProductsContGen id="products">
			<ProdTitle style={{ marginTop: "70px" }}>Nuestros Productos</ProdTitle>
			<ProdsCont>
				{products?.map((products) => {
					return <ProductCardComp {...products} key={products.id} />;
				})}
			</ProdsCont>
		</ProductsContGen>
	);
};

export default Products;
