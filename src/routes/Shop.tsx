import { useEffect, useState } from "react";
import type { Product } from "../redux/cart/reducer";

import ProductsList from "../components/ProductsList";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Pagination from "../components/Pagination";

interface ProductsResponse {
  items: number;
  data: Product[];
}

export default function Products() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<ProductsResponse | null>(null);
  const perPage = 16

  useEffect(() => {
    fetch(`http://localhost:3000/products?_page=${page}&_per_page=${perPage}`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [page]);

  // Showing from-to of total results
  const showingFrom = (page - 1) * perPage + 1;
  const showingTo = Math.min(page * perPage, products?.items ?? 0);

  return (
    <>
      <Nav />

      <header className="relative h-80 bg-banner">
        <div className="absolute inset-0 flex flex-col items-center justify-center  bg-white/50">
          <h1 className="text-5xl">Shop</h1>
          <ol className="flex items-center mt-2">
            <li>
              <a href="/" className="font-semibold">
                Home
              </a>
            </li>
            <li>
              <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/arrow-down.svg" alt="" />
            </li>
            <li>
              <a href="/">
                Shop
              </a>
            </li>
          </ol>
        </div>
      </header>

      <div className="flex items-center py-9 px-24 justify-between bg-[#F9F1E7]">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-3">
            <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/filtering.svg" alt="Filter" />
            <span>Filter</span>
          </button>
          <button>
            <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/grid-big-round.svg" alt="Grid Layout" />
          </button>
          <button>
            <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/view-list.svg" alt="View List" />
          </button>

          <p className="pl-5 border-l border-[#9F9F9F]">
            Showing {showingFrom}-{showingTo} of {products?.items} results
          </p>
        </div>

        <div className="flex items-center gap-7">
          <div>
            <label htmlFor="perPageFilter">Show</label>
            <input
              type="number"
              name="perPage"
              id="perPageFilter"
              defaultValue={perPage}
              className="px-4 py-3 ml-4 max-w-fit"
            />
          </div>

          <div>
            <label htmlFor="sortBy">Short by</label>
            <select
              name="sortBy"
              id="sortBy"
              className="px-4 py-3 ml-4"
            >
              <option value="default" selected>Default</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>
      </div>

      { products && (
        <div className="mx-24 my-16">
          <ProductsList products={products.data} />

          <div className="flex items-center justify-center">
            <Pagination
              currentPage={page}
              perPage={16}
              totalCount={products.items}
              siblingCount={2}

              onPageChange={setPage}
            />
          </div>
        </div>
      ) }

      <Footer />
    </>
  )
}