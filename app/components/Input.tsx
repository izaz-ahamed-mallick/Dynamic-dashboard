"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface InputProps {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const Input: React.FC<InputProps> = ({
    label,
    type,
    placeholder,
    value,
    onChange,
    error,
}) => {
    return (
        <div className="mb-6">
            {/* Label */}
            <label className="block mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                {label}
            </label>

            {/* Input Field */}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full p-4 rounded-lg transition-all duration-300 focus:outline-none 
                    border-2 
                    ${
                        error
                            ? "border-red-600 focus:border-red-600"
                            : "border-gray-300 dark:border-gray-700"
                    }
                    ${
                        error
                            ? "shadow-[0_0_8px_rgba(255,0,0,0.5)]"
                            : "shadow-lg"
                    }
                    focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                    text-gray-800 dark:text-gray-200
                    placeholder-gray-500 dark:placeholder-gray-400`}
                required
            />

            {/* Animated Error Message */}
            <AnimatePresence>
                {error && (
                    <motion.p
                        className="mt-2 text-sm p-2 rounded-lg"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            background: "rgba(255, 0, 0, 0.1)",
                            color: "red",
                        }}
                    >
                        {error}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Input;
