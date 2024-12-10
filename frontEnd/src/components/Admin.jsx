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
    <body>
        <main>
            <h1>Admin Page</h1>
        </main>
    </body>
);

};
