import { useState, useEffect } from "react";
import ProductItem from "../ui/ProductItem";
import productData from "../api/product.json";
import Title from "../ui/Title";

function Favourites() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    return setProducts(productData);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <Title>Favoriler</Title>
      <div className="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-2 rounded-lg overflow-hidden gap-1">
        {products.length &&
          products.map((product, index) => (
            <ProductItem product={product} key={index} />
          ))}
      </div>
    </div>
  );
}

export default Favourites;
