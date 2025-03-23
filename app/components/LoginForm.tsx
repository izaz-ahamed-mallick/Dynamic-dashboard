"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiLogIn } from "react-icons/fi";
import { nanoid } from "nanoid";
import Input from "./Input";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Invalid email format.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        const randomToken = nanoid(32);
        localStorage.setItem("mockjwtToken", randomToken);
        localStorage.setItem("userEmail", email);
        document.cookie = `mockjwtToken=${randomToken}; path=/; max-age=${
            60 * 60 * 24 * 7
        };`;

        router.replace("/dashboard");
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div
                className="relative w-[95%] max-w-md p-8 rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
                style={{
                    background: "var(--gradient-background), var(--noise)",
                    color: "var(--foreground)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid var(--foreground)",
                    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                }}
            >
                <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
                    <FiLogIn style={{ color: "var(--foreground)" }} />
                    <span>Login</span>
                </h2>

                {error && (
                    <p
                        className="text-center mb-4 p-2 rounded-lg"
                        style={{
                            background: "rgba(255, 0, 0, 0.2)",
                            color: "red",
                        }}
                    >
                        {error}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={
                            error && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                                ? error
                                : ""
                        }
                    />

                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={error && password.length < 6 ? error : ""}
                    />

                    <button
                        type="submit"
                        className="w-full cursor-pointer font-semibold p-3 rounded-lg transition duration-300 shadow-lg transform hover:-translate-y-1"
                        style={{
                            background: "var(--foreground)",
                            color: "var(--background)",
                            boxShadow: "0 4px 14px 0 rgba(0, 118, 255, 0.39)",
                        }}
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
