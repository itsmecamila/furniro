import { ReactNode } from "react";

interface PaginationProps {
  currentPage: number;
  perPage: number;
  totalCount: number;
  siblingCount?: number;

  // onNext: () => void;
  // onPrev: () => void;
  onPageChange: (page: number) => void;
}

export default function Pagination(props: PaginationProps) {
  const siblingCount = props.siblingCount ?? 1;
  const totalPages = Math.ceil(props.totalCount / props.perPage);

  const buttons = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visibleButtons = buttons.slice(
    Math.max(0, (props.currentPage - 1) - siblingCount),
    Math.min(totalPages, (props.currentPage - 1) + siblingCount + 1)
  );

  return (
    <div className="flex items-center gap-4">
      <PageButton onClick={() => props.onPageChange(Math.max(1, props.currentPage - 1))}>
        Prev
      </PageButton>
      {visibleButtons.map((i) => (
        <PageButton
          key={`pb-${i}`}
          active={props.currentPage === i}
          onClick={() => props.onPageChange(i)}
        >
          {i}
        </PageButton>
      ))}
      <PageButton onClick={() => props.onPageChange(Math.min(totalPages, props.currentPage + 1))}>
        Next
      </PageButton>
    </div>
  )
}

interface PageButtonProps {
  children: ReactNode;
  active?: boolean;

  onClick: () => void;
}

function PageButton(props: PageButtonProps) {
  return (
    <button
      onClick={props.onClick}
      data-active={props.active}
      className="px-5 py-3 rounded-md font-semibold bg-[#F9F1E7] data-[active=true]:bg-[#B88E2F] data-[active=true]:text-white"
    >
      {props.children}
    </button>
  )
}