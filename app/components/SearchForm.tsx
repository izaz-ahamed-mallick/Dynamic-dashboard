"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react"; // Icons for a stylish touch

interface SearchFormProps {
    search: string;
    idFilter: string;
    onSearch: (search: string, idFilter: string) => void;
}

const SearchForm = ({ search, idFilter, onSearch }: SearchFormProps) => {
    const [query, setQuery] = useState(search);
    const [id, setId] = useState(idFilter);

    const handleSearch = () => {
        onSearch(query, id);
    };

    return (
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
            <div className="relative w-full md:w-1/2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by title"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
            </div>

            <div className="relative w-full md:w-40">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                    type="number"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Filter by ID"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
            </div>

            <button
                onClick={handleSearch}
                className="w-full md:w-auto px-6 py-2 rounded-lg font-medium shadow-md transition hover:scale-105 active:scale-95 bg-blue-500 text-white hover:bg-blue-600"
            >
                Search
            </button>
        </div>
    );
};

export default SearchForm;
