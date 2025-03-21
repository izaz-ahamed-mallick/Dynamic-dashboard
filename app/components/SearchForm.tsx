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
        <div className="flex items-center gap-4 mb-6">
            {/* Search Input */}
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by title"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
            </div>

            {/* ID Filter Input */}
            <div className="relative w-40">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                    type="number"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Filter by ID"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
            </div>

            {/* Search Button */}
            <button
                onClick={handleSearch}
                className="px-6 py-2 rounded-lg font-medium shadow-md transition hover:scale-105 active:scale-95"
            >
                Search
            </button>
        </div>
    );
};

export default SearchForm;
