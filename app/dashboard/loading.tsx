import React from "react";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="ml-4 text-xl text-white">Loading...</p>
        </div>
    );
};

export default Loading;
