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
                setMessage("Invalid Username or Password")
            }
        } catch (error) {
            setMessage(input.message || "An error has occured. Please try again.");
        }
    };

    return(
        <div className="flex flex-col self-center text-center bg-transparent ml-32" >
            <header>
                <h1 className="text-white font-bold font-serif text-4xl mb-4 text-center">LOGIN</h1>
            </header>
            <main className="flex flex-col">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="bg-red-600 pl-2 pr-2 text-white font-bold rounded-md text-lg">Username: </label>
                        <input 
                        type="text"
                        placeholder="Username"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="rounded-md text-red-600 text-lg text-center mt-4 ml-2 placeholder-red-600"
                        />
                    </div>
                    <div>
                        <label className="bg-yellow-600 pl-2 pr-2 text-white font-bold rounded-md text-lg">Password: </label>
                        <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="rounded-md text-yellow-600 text-center mt-4 ml-2 text-lg placeholder-yellow-600"
                        />
                    </div>
                    <button type="submit" className="w-20 mt-6 bg-red-600 text-white hover:bg-white hover:text-red-600 font-bold font-serif rounded-xl text-xl">Login</button>
                </form>
                {message && <p className="text-white mt-4 text-xl font-bold">{message}</p>}
            </main>
        </div>
    )
}