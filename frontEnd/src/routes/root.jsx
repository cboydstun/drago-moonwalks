import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
    return(
    <div>
        <div>
            <header>
                {/*button*/}
                <NavLink to="/inventory">
                    <button>inventory</button> 
                </NavLink>
                <NavLink to="/admin">
                <button>Admin</button>
                </NavLink>
            </header>
            <Outlet></Outlet>
        </div>
    </div>
    )
}