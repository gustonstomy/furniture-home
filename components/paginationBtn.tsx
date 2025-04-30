import { useState } from "react";

const PaginationBtn = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const Pagination = () => {
    return (
      <div className="flex items-center justify-center space-x-8">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-12 h-12 flex items-center justify-center rounded-md ${
              currentPage === page
                ? "bg-[#B88E2F] text-white"
                : "bg-[#F9F1E7] text-gray-800 hover:bg-amber-100"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
          className="w-16 h-12 flex items-center justify-center rounded-md bg-[#F9F1E7] text-gray-800 hover:bg-amber-100"
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <div className="mb-8 p-4 bg-white rounded-lg ">
        <Pagination />
      </div>
    </div>
  );
};

export default PaginationBtn;
