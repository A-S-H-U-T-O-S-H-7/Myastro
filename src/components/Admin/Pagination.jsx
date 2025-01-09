import React from "react";

function Pagination({ page, setPage, totalPages }) {
  // Helper to generate pagination range
  const getPaginationRange = () => {
    const totalVisible = 5; 
    const range = [];
    const leftRange = Math.max(1, page - 1);
    const rightRange = Math.min(totalPages, page + 1);

    for (let i = leftRange; i <= rightRange; i++) {
      range.push(i);
    }

    if (leftRange > 2) {
      range.unshift("...");
    }
    if (rightRange < totalPages - 1) {
      range.push("...");
    }

    range.unshift(1); 
    if (totalPages > 1) {
      range.push(totalPages); 
    }

    return [...new Set(range)];
  };

  const paginationRange = getPaginationRange();

  return (
    <div>
      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-[#22c7d5] border border-[#22c7d5] rounded-[8px] px-4 py-2">
          Showing page <span className="font-bold font-heading">{page}</span> of{" "}
          <span className="font-bold font-heading">{totalPages}</span>
        </span>
        <div className="flex items-center gap-2">
          <button
            className="px-3 py-1 bg-[#1e2737] text-[#22c7d5] rounded-md hover:bg-[#2d3747]"
            disabled={page === 1}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          >
            &lt;
          </button>

          {/* Dynamic Page Numbers */}
          {paginationRange.map((item, index) =>
            item === "..." ? (
              <span
                key={index}
                className="px-3 py-1 text-[#888ea8] rounded-md"
              >
                ...
              </span>
            ) : (
              <button
                key={index}
                className={`px-3 py-1 rounded-md ${
                  page === item
                    ? "bg-[#22c7d5] text-white"
                    : "bg-[#1e2737] text-[#22c7d5] hover:bg-[#2d3747]"
                }`}
                onClick={() => setPage(item)}
              >
                {item}
              </button>
            )
          )}

          <button
            className="px-3 py-1 bg-[#1e2737] text-[#888ea8] rounded-md hover:bg-[#2d3747]"
            disabled={page === totalPages}
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
