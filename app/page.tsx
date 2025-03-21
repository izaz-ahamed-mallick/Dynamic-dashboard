import Image from "next/image";
import LoginForm from "./components/LoginForm";

export default function Home() {
    return (
        <div className="min-h-screen">
            <LoginForm />
        </div>
    );
}
