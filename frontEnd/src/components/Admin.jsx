import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
    const navigate = useNavigate();

    useEffect(() => {

    const isAuthenticated = sessionStorage.getItem("authenticated");

    if (!isAuthenticated) {
        navigate("/login");
    }
}, [navigate]);

return (
    <main className="flex flex-col text-center">
        <h1 className="font-serif text-white text-4xl font-bold">Admin Page</h1>
    </main>
);

};
