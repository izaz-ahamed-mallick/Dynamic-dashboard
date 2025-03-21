"use client";

import React from "react";

interface PaginationProps {
    initialPage: number;
    hasMore: boolean;
    handlePageChange: (page: number) => void;
}

const Pagination = ({
    initialPage,
    handlePageChange,
    hasMore,
}: PaginationProps) => {
    return (
        <div className="flex justify-between items-center mt-6">
            {/* Previous Button */}
            <button
                onClick={() => handlePageChange(initialPage - 1)}
                disabled={initialPage <= 1}
                className={`px-4 py-2 rounded-lg transition-all duration-300 
                ${
                    initialPage <= 1
                        ? "bg-gray-500 dark:bg-gray-700 text-gray-300 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600 active:scale-95 text-white"
                }`}
            >
                Previous
            </button>

            {/* Page Number */}
            <span className="text-gray-800 dark:text-gray-300 font-medium">
                Page {initialPage}
            </span>

            {/* Next Button */}
            <button
                onClick={() => handlePageChange(initialPage + 1)}
                disabled={!hasMore}
                className={`px-4 py-2 rounded-lg transition-all duration-300 
                ${
                    !hasMore
                        ? "bg-gray-500 dark:bg-gray-700 text-gray-300 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600 active:scale-95 text-white"
                }`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
