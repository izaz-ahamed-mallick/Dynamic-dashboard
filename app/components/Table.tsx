import React from "react";

interface TableProps {
    columns: string[];
    data: { [key: string]: any }[];
}

const Table = ({ columns, data }: TableProps) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse border">
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th key={col} className="p-3 border text-left">
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
                                className="hover:opacity-80 transition"
                            >
                                {columns.map((col) => (
                                    <td key={col} className="p-3 border">
                                        {item[col.toLowerCase()] || "-"}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={columns.length}
                                className="p-4 text-center"
                            >
                                No items found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
