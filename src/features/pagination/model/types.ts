export interface IPaginationProps {
    totalPage: number;
    handlePreviousPage: () => void;
    handleNextPage: () => void;
    handlePageClick: (page: number) => void;
    currentPage: number;
}



