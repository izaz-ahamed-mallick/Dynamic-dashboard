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
            <label
                className="block mb-2 font-semibold"
                style={{ color: "var(--foreground)" }}
            >
                {label}
            </label>

            {/* Input Field */}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full p-3 rounded-lg transition-all duration-300 focus:outline-none"
                style={{
                    background: "var(--background)",
                    color: "var(--foreground)",
                    border: error
                        ? "1px solid red"
                        : "1px solid var(--foreground)",
                    boxShadow: error
                        ? "0 0 8px rgba(255, 0, 0, 0.5)"
                        : "0 0 8px var(--foreground)",
                }}
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
