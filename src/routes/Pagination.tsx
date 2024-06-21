import { useState } from "react";
import Pagination from "../components/Pagination";

const items = Array.from({ length: 100 }, (_, i) => i);

export default function PaginationExample() {
  const [page, setPage] = useState(1);
  const perPage = 10;

  const pageItems = items.slice(
    (page - 1) * perPage, (page - 1) * perPage + perPage
  );

  return (
    <div>
      <ul>
        {pageItems.map((n, i) => <li key={i}><p>Item {n}</p></li>)}
      </ul>

      <p>Página: {page}</p>
      <Pagination
        currentPage={page}
        perPage={perPage}
        totalCount={items.length}
        siblingCount={2}

        onPageChange={(page) => setPage(page)}
      />
    </div>
  )
}