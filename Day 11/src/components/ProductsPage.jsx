import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard.jsx";
const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get("https://fakestoreapi.com/products", { signal: controller.signal })
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (!axios.isCancel(error)) {
          setHasError(true);
          setIsLoading(false);
        }
      });

    return () => controller.abort();
  }, []);
  return (
    <main className="products-page">
      <header className="products-page__header">
        <p className="products-page__eyebrow">FAKE STORE COLLECTION</p>
        <h1>Everyday essentials</h1>
        <p className="products-page__subtitle">
          Find something you’ll love, at a price you’ll love.
        </p>
      </header>
      <section className="products-grid" aria-label="Products">
        {isLoading && <p className="products-message">Loading products…</p>}
        {hasError && (
          <p className="products-message products-message--error">
            Could not load products. Please try again later.
          </p>
        )}

        {!isLoading &&
          !hasError &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </section>
    </main>
  );
};

export default ProductsPage;
