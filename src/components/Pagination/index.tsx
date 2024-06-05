import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

/**
 * Props for the PaginationPage component.
 */
type PaginationPageProps = {
  /** The current page number. */
  currentPage: number;
  /** Function to be called when the page number changes. */
  onPageChange: (page: number) => void;
  /** The total number of pages. */
  totalPages: number;
};

/**
 * Component that renders a pagination component.
 */
const PaginationPage: React.FC<PaginationPageProps> = ({
  currentPage,
  onPageChange,
  totalPages,
}) => {
  /**
   * Handles the page change event.
   *
   * @param page - The page number to change to.
   */
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  /**
   * Returns an array of pagination items to be rendered.
   *
   * @returns Array of pagination items.
   */
  const getPaginationItems = () => {
    const pages = [];
    const maxPagesToShow = 2; // Number of pagination items to show
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push("...");
      }
    }

    for (let page = startPage; page <= endPage; page++) {
      pages.push(page);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <Pagination className="w-full mb">
      <PaginationContent className="justify-center">
        {/* Render previous button if current page is not the first page */}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
              className={currentPage === 1 ? "disabled" : ""}
            />
          </PaginationItem>
        )}
        {/* Render pagination items */}
        {getPaginationItems().map((page, index) =>
          typeof page === "number" ? (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                isActive={page === currentPage}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ) : (
            <PaginationItem key={index}>
              <span className="px-3 py-1">...</span>
            </PaginationItem>
          )
        )}
        {/* Render next button if current page is not the last page */}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageChange(currentPage + 1)}
              className={currentPage >= totalPages ? "disabled" : ""}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationPage;

