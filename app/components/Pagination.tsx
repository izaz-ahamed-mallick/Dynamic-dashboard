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
        <div className="flex cursor-pointer  flex-col sm:flex-row justify-between items-center mt-6 gap-4">
            <button
                onClick={() => handlePageChange(initialPage - 1)}
                disabled={initialPage <= 1}
                className={`w-full sm:w-auto px-4 py-2 rounded-lg transition-all duration-300
                ${
                    initialPage <= 1
                        ? "bg-gray-500 dark:bg-gray-700 text-gray-300 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600 active:scale-95 text-white"
                }`}
            >
                Previous
            </button>

            <span className="text-gray-800 dark:text-gray-300 font-medium">
                Page {initialPage}
            </span>

            <button
                onClick={() => handlePageChange(initialPage + 1)}
                disabled={!hasMore}
                className={`w-full cursor-pointer sm:w-auto px-4 py-2 rounded-lg transition-all duration-300
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
