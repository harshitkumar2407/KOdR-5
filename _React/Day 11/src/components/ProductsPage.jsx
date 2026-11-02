import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard.jsx";
import { MyStore } from "../context/ProductContext.jsx";
const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const {cart,setCart} =useContext(MyStore)

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
    <main className="mx-auto w-[min(1200px,calc(100%-48px))] pt-16 pb-20 max-[520px]:w-[min(100%-32px,420px)] max-[520px]:pt-[42px]">
      <header className="mb-9 text-center">
        <p className="mb-[10px] text-[0.75rem] font-bold tracking-[0.16em] text-[var(--text-pri)] transition-colors duration-500">
          FAKE STORE COLLECTION
        </p>
        <h1 className="m-0 text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-[-0.04em] text-[var(--text-sec)] transition-colors duration-500">
          Everyday essentials
        </h1>
        <p className="mt-3 mb-0 text-[var(--text-pri)] transition-colors duration-500">
          Find something you’ll love, at a price you’ll love.
        </p>
      </header>
      <section
        className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-6"
        aria-label="Products"
      >
        {isLoading && (
          <p className="col-span-full my-8 text-center text-[var(--text-pri)] transition-colors duration-500">
            Loading products…
          </p>
        )}
        {hasError && (
          <p className="col-span-full my-8 text-center text-[#a33c32]">
            Could not load products. Please try again later.
          </p>
        )}

        {!isLoading &&
          !hasError &&
          products?.map((product) => {
              let inCart = cart.find(elem => elem.id === product.id ) ;

            <ProductCard key={product.id} product={product} quantity={inCart?.quantity} />
          }
            
          )}
      </section>
    </main>
  );
};

export default ProductsPage;
