import React, { useState } from "react";
import { LOW_ON_STOCK, IN_STOCK, OUT_OF_STOCK, TRUE } from "../constants";
import { SingleProduct } from "../models/product.model";
import {
  StyledContainer,
  StylePriceWrapper,
  StyledContentWrapper,
  StyledInput,
  StyledImage,
  StyledPromotionBadge,
  StyledName,
  StyledPrice,
  StyledPriceWas,
  StyledOutOfStock,
  StyledQuantity,
  StyledLowOnStock,
} from "../style-components/product.style";

interface ProductProps {
  product: SingleProduct;
  selectedProductsIds: number[];
  setSelectedProductsIds: React.Dispatch<React.SetStateAction<number[]>>;
}

const Product: React.FC<ProductProps> = ({
  product,
  selectedProductsIds,
  setSelectedProductsIds,
}) => {
  const [checked, setChecked] = useState<boolean>(false);
  const {
    name,
    description,
    price,
    priceWas,
    quantity,
    lowOnStock,
    promotionBadge,
    productId,
    imageUrl,
  } = product;

  const handleChange = (id: number) => {
    const checkIfProductExist = selectedProductsIds.includes(id);
    if (checkIfProductExist) {
      const filterExistingProduct = selectedProductsIds.filter(
        (product) => product !== id
      );
      setSelectedProductsIds(filterExistingProduct);
      setChecked(false);
    } else {
      setSelectedProductsIds([...selectedProductsIds, id]);
      setChecked(true);
    }
  };

  const lowOnStocks = lowOnStock.includes(TRUE);

  return (
    <StyledContainer>
      <StyledInput
        checked={checked}
        type="checkbox"
        onChange={() => handleChange(productId)}
      />
      <StyledImage src={imageUrl} alt={description} />
      {quantity !== 0 && (
        <StyledPromotionBadge>{promotionBadge}</StyledPromotionBadge>
      )}
      <StyledContentWrapper>
        <StyledName>{name}</StyledName>
        <StylePriceWrapper>
          <StyledPrice>£{price}</StyledPrice>
          <StyledPriceWas>£{priceWas}</StyledPriceWas>
        </StylePriceWrapper>
        {quantity === 0 ? (
          <StyledOutOfStock>{OUT_OF_STOCK}</StyledOutOfStock>
        ) : (
          <StyledQuantity>
            {quantity} {IN_STOCK}
          </StyledQuantity>
        )}
        {quantity !== 0 && lowOnStocks && (
          <StyledLowOnStock>{LOW_ON_STOCK}</StyledLowOnStock>
        )}
      </StyledContentWrapper>
    </StyledContainer>
  );
};

export default Product;
