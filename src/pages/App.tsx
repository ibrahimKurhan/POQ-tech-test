import { useEffect, useState } from "react";
import ProductList from "../components/product-list";
import {
  REMOVE,
  SELECTED_PRODUCTS,
  NO_PRODUCTS_TO_VIEW,
  FALSE,
} from "../constants";
import { getProducts } from "../endpoints/get-products";
import { SingleProduct } from "../models/product.model";
import {
  StyledContainer,
  StyledButton,
  StyleWrapper,
  StyledNoProducts,
} from "../style-components/app.style";

function App() {
  const [products, setProducts] = useState<SingleProduct[]>([]);
  const [selectedProductsIds, setSelectedProductsIds] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const init = async () => {
      setIsLoading(true);
      const productList = await getProducts();
      setProducts(productList);
      setIsLoading(false);
    };
    init();
  }, []);

  const handleDelete = () => {
    const filteredProducts = products.filter(
      (product) => !selectedProductsIds.includes(product.productId)
    );
    setProducts(filteredProducts);
    setSelectedProductsIds([]);
  };

  const availableProducts = products.filter(
    (product) => !product.available.includes(FALSE)
  );

  return (
    <StyleWrapper>
      <StyledButton onClick={handleDelete}>
        {REMOVE} {selectedProductsIds.length} {SELECTED_PRODUCTS}
      </StyledButton>
      <StyledContainer>
        {isLoading ? (
          <div>Loading</div>
        ) : (
          <ProductList
            products={availableProducts}
            selectedProductsIds={selectedProductsIds}
            setSelectedProductsIds={setSelectedProductsIds}
          />
        )}
      </StyledContainer>
      {!isLoading && availableProducts.length === 0 && (
        <StyledNoProducts>{NO_PRODUCTS_TO_VIEW}</StyledNoProducts>
      )}
    </StyleWrapper>
  );
}

export default App;
