import { useEffect, useState } from "react";
import { Product } from "../redux/cart/reducer";
import ProductCard from "./ProductCard";

export default function OurProductsList() {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products?_start=1&_limit=8`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  if (!products) {
    return null;
  }

  return (
    <ul className="grid grid-cols-4 gap-8">
      {products.map(product => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  )
}