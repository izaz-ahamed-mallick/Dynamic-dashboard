"use client";

import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import SearchForm from "../components/SearchForm";
import Pagination from "../components/Pagination";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const pageSize = 5;

interface Props {
    initialPosts: Post[];
}

const DashboardContent: React.FC<Props> = ({ initialPosts }) => {
    const [posts] = useState<Post[]>(initialPosts);
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
    const [page, setPage] = useState<number>(1);
    const [search, setSearch] = useState<string>("");
    const [idFilter, setIdFilter] = useState<string>("");
    const [hasMore, setHasMore] = useState<boolean>(true);

    useEffect(() => {
        let filtered = [...posts];

        if (idFilter) {
            filtered = filtered.filter((post) => post.id === Number(idFilter));
        }
        if (search) {
            filtered = filtered.filter((post) =>
                post.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        const start = (page - 1) * pageSize;
        const paginated = filtered.slice(start, start + pageSize);

        setFilteredPosts(paginated);
        setHasMore(paginated.length >= pageSize);
    }, [posts, search, idFilter, page]);

    const handleSearch = (newSearch: string, newIdFilter: string) => {
        setSearch(newSearch);
        setIdFilter(newIdFilter);
        setPage(1);
    };

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-6">
                <SearchForm
                    search={search}
                    idFilter={idFilter}
                    onSearch={handleSearch}
                />
            </div>

            <div className="overflow-x-auto sm:overflow-x-hidden">
                <Table columns={["ID", "Title", "Body"]} data={filteredPosts} />
            </div>

            <div className="flex justify-center items-center mt-6">
                <Pagination
                    initialPage={page}
                    hasMore={hasMore}
                    handlePageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default DashboardContent;
