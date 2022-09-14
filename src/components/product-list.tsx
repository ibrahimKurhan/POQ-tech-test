import React from "react";
import Product from "./product";
import { SingleProduct } from "../models/product.model";
import { StyledContainer } from "../style-components/product-list.style";

interface ProductListProps {
  products: SingleProduct[];
  selectedProductsIds: number[];
  setSelectedProductsIds: React.Dispatch<React.SetStateAction<number[]>>;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  selectedProductsIds,
  setSelectedProductsIds,
}) => {
  const hasProduct = products.length === 0;

  return (
    <StyledContainer hasProduct={hasProduct}>
      {products.map((product) => (
        <Product
          key={product.productId}
          product={product}
          selectedProductsIds={selectedProductsIds}
          setSelectedProductsIds={setSelectedProductsIds}
        />
      ))}
    </StyledContainer>
  );
};

export default ProductList;
