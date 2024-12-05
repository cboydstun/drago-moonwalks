import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
    return(
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-400 text-right">
        <div>
            <header>
                <h1 className="text-center text-white font-bold text-6xl">Drago's Moonwalks</h1>
                <h3 className="text-center text-white text-2xl my-4">Parties Fundraisers and Family Reunions</h3>
            </header>
            <main className="p-4">
                {/*button*/}
                <NavLink to="/inventory">
                    <button className="bg-red-600 hover:bg-white hover:text-red-600 text-white font-bold py-1 px-4 rounded-full mr-2" >Inventory</button> 
                </NavLink>
                <NavLink to="/login">
                <button className="bg-yellow-600 hover:bg-white hover:text-yellow-600 text-white font-bold py-1 px-4 rounded-full">Admin</button>
                </NavLink>
            <img 
                className="rounded-sm absolute top-6 left-6 w-60 h-auto sm:w-40 md:w-40 lg:w-52 xl:w-60"
                src="./assets/DragoPic.png"
                alt="Moonwalks For You!"></img>
            </main>
            <Outlet></Outlet>
        </div>
    </div>
    )
}