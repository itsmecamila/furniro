import type { Product } from "../redux/cart/reducer";
import ProductCard from "./ProductCard";

interface ProductsListProps {
  products: Product[];
}

export default function ProductsList(props: ProductsListProps) {
  return (
    <ul className="grid grid-cols-4 gap-8 mb-16">
      { props.products.map((product) => (
        <li  key={`product-${product.id}`}>
          <ProductCard product={product} />
        </li>
      )) }
    </ul>
  )
}