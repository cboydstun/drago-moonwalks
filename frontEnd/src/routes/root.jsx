import { NavLink, Outlet } from "react-router-dom";
// import Inventory from "../components/Inventory";
// import CloudinaryComponent from "../components/CloudinaryComponent";
// import GalleryComponent from "../components/GalleryComponent";


export default function Root() {
    return(
      
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-500 to-green-400 text-right bg-auto">
        <img className="rounded-sm absolute top-6 left-6 w-60 h-auto sm:w-40 md:w-40 lg:w-52 xl:w-60"
            src="./src/routes/assets/DragoPic.png"
            alt="Dragon Picture"/>
        <header className="w-full">
            <h1 className="text-center text-white font-bold text-6xl font-serif">Drago's Moonwalks</h1>
            <h3 className="text-center text-white font-bold text-2xl my-4 font-serif">Parties Fundraisers and Family Reunions</h3>
        </header>
        <main className="p-6">
            <div className="flex flex-grow gap-x-4">
                <NavLink to="/contact">
                    <button className="bg-yellow-600 hover:bg-white hover:text-yellow-600 text-white font-bold py-1 px-4 rounded-full">Contact</button>
                </NavLink>
                <NavLink to="/booking">
                    <button className="bg-yellow-600 hover:bg-white hover:text-yellow-600 text-white font-bold py-1 px-4 rounded-full">Bookings & Availability</button>
                </NavLink>
                <NavLink to="/login">
                <button className="bg-red-600 hover:bg-white hover:text-red-600 text-white font-bold py-1 px-4 rounded-full">Admin</button>
                </NavLink>
            </div>
        </main>



        <div className="flex">
            <main className="text-left m-14 max-w-48">
                <NavLink to="/all">
                    <button className="bg-yellow-600 text-white rounded-full w-40 transition-transform transform hover:scale-105 hover:bg-white hover:text-yellow-600 m-1 mt-10 font-bold">All</button>
                </NavLink>
                <NavLink>
                    <button className="bg-yellow-600 text-white rounded-full w-40 transition-transform transform hover:scale-105 hover:bg-white hover:text-yellow-600 m-1 font-bold">Category</button>
                </NavLink>
                <NavLink>
                    <button className="bg-yellow-600 text-white rounded-full w-40 transition-transform transform hover:scale-105 hover:bg-white hover:text-yellow-600 m-1 font-bold">Category</button>
                </NavLink>
                <NavLink>
                    <button className="bg-yellow-600 text-white rounded-full w-40 transition-transform transform hover:scale-105 hover:bg-white hover:text-yellow-600 m-1 font-bold">Category</button>
                </NavLink>
                <NavLink>
                    <button className="bg-yellow-600 text-white rounded-full w-40 transition-transform transform hover:scale-105 hover:bg-white hover:text-yellow-600 m-1 font-bold">Category</button>
                </NavLink>
            </main>
            <Outlet></Outlet>
        </div>
    </div>
    )
}

