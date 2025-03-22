"use client";

import React from "react";

interface TableProps {
    columns: string[];
    data: { [key: string]: any }[];
}

const Table = ({ columns, data }: TableProps) => {
    return (
        <div className="overflow-hidden rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                            {columns.map((col) => (
                                <th
                                    key={col}
                                    className="px-6 py-4 text-left font-semibold whitespace-nowrap"
                                >
                                    {col}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((item, index) => (
                                <tr
                                    key={index}
                                    className="transition hover:bg-gray-50 dark:hover:bg-gray-700"
                                >
                                    {columns.map((col) => (
                                        <td
                                            key={col}
                                            className="px-6 py-4 border-b text-gray-600 max-w-[300px]"
                                        >
                                            <div
                                                className=" cursor-pointer hover:underline"
                                                title={
                                                    item[col.toLowerCase()] ||
                                                    "-"
                                                }
                                            >
                                                {item[col.toLowerCase()] || "-"}
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="p-6 text-center text-gray-500"
                                >
                                    No items found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="md:hidden grid gap-6 p-4">
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <div
                            key={index}
                            className="border rounded-lg p-4 shadow-lg transition hover:scale-105 hover:shadow-xl"
                        >
                            {columns.map((col) => (
                                <div
                                    key={col}
                                    className="flex flex-col py-2 border-b last:border-none"
                                >
                                    <span className="font-semibold">
                                        {col}:
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-400 break-words">
                                        {item[col.toLowerCase()] || "-"}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))
                ) : (
                    <div className="p-6 text-center rounded-lg shadow-md bg-gray-50 dark:bg-gray-800">
                        No items found
                    </div>
                )}
            </div>
        </div>
    );
};

export default Table;
