import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestInput = { username, password };

        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestInput),
            });

            const input = await response.json();

            if (response.ok) {
                setMessage("Login Successful!");
                sessionStorage.setItem("authenticated" , "true");
                navigate("/admin");
            } else {
                setMessage("Invalid Username or Password");
            }
        } catch (error) {
            setMessage(input.message || "An error has occurred. Please try again.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center bg-transparent px-6">
            <header>
                <h1 className="text-white font-bold font-serif text-4xl sm:text-5xl mb-4">LOGIN</h1>
            </header>
            <main className="flex flex-col w-full max-w-md">
                <form onSubmit={handleSubmit} className="space-y-6 text-center">
                    <div className="flex flex-col">
                        <label className=" bg-red-600 pl-2 pr-2 text-white font-bold rounded-md sm:text-sm md:text-md lg:text-lg m-auto">Username:</label>
                        <input 
                            type="text"
                            placeholder="Username"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="rounded-md text-red-600 sm:text-sm md:text-md lg:text-lg text-center mt-4 ml-2 placeholder-red-600"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="bg-yellow-600 pl-2 pr-2 text-white font-bold rounded-md sm:text-sm md:text-md lg:text-lg m-auto">Password:</label>
                        <input
                            type="password"
                            placeholder="Password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="rounded-md text-yellow-600 text-center mt-4 ml-2 sm:text-sm md:text-md lg:text-lg placeholder-yellow-600"
                        />
                    </div>
                    <button type="submit" className="w-auto bg-red-600 text-white hover:bg-white hover:text-red-600 font-bold font-serif rounded-xl sm:text-md md:text-lg lg:text-xl p-2">
                        Login
                    </button>
                </form>
                {message && <p className="text-white text-center mt-4 sm:text-md md:text-lg lg:text-xl font-bold">{message}</p>}
            </main>
        </div>
    );
}
