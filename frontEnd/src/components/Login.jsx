import { useEffect, useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSumbit = async (e) => {
        e.preventDeault();

        const requestInput = { username, password };

        try {
            const response = await fetch("/admin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestInput),
            });

            const input = await response.json();

            if (response.ok) {
                setMessage("Login Successful!");
            } else {
                setMessage("Invalid Username or Password")
            }
        } catch (error) {
            setMessage("An error has occured. Please try again.")
        }
    };

    return(
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-400 text-center" >
            <header>
                <h1 className="text-white font-bold text-4xl">Login</h1>
            </header>
            <main>
                <form onSubmit={handleSumbit}>
                    <div>
                        <label className="bg-red-600 text-white font-bold rounded-md">Username: </label>
                        <input 
                        type="text"
                        placeholder="Username"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="rounded-md text-red-600 text-center"
                        />
                    </div>
                    <div>
                        <label className="bg-yellow-600 text-white font-bold rounded-md">Password: </label>
                        <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="rounded-md text-yellow-600 text-center"
                        />
                    </div>
                    <button type="submit" className="w-20 bg-red-600 text-yellow-600 hover:bg-white hover:text-red-600 font-bold rounded-xl">Login</button>
                </form>
            </main>
        </div>
    )
}