import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-400 text-white">
            <div className="flex items-center justify-between px-6 relative">
                <img
                    className=" h-auto sm:w-16 md:w-28 lg:w-60 xl:w-64"
                    src="./src/routes/assets/DragoPic.png"
                    alt="Dragon Picture"
                />
                <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center">
                    <h1 className="sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif">Drago's Moonwalks</h1>
                    <h3 className="text-xl sm:text-2xl my-4 font-serif">Parties, Fundraisers, and Family Reunions</h3>
                </div>
            </div>
            <main>
                <div className="flex flex-wrap justify-center gap-4">
                    <NavLink to="/contact">
                        <button className="bg-yellow-600 hover:bg-white hover:text-yellow-600 text-white font-bold py-1 px-6 rounded-full">
                            Contact
                        </button>
                    </NavLink>
                    <NavLink to="/booking">
                        <button className="bg-yellow-600 hover:bg-white hover:text-yellow-600 text-white font-bold py-1 px-6 rounded-full">
                            Bookings & Availability
                        </button>
                    </NavLink>
                    <NavLink to="/login">
                        <button className="bg-red-600 hover:bg-white hover:text-red-600 text-white font-bold py-1 px-6 rounded-full">
                            Admin
                        </button>
                    </NavLink>
                </div>
            </main>
            <div className="flex flex-col sm:flex-row justify-between mt-10">
                <aside className="sm:w-36 md:w-44 lg:w-52 p-6">
                    <NavLink to="/all">
                        <button className="bg-yellow-600 text-white w-full mb-4 py-1 px-6 rounded-full hover:bg-white hover:text-yellow-600 font-bold">
                            All
                        </button>
                    </NavLink>
                    <NavLink to="/moonwalks">
                        <button className="bg-yellow-600 text-white w-full mb-4 py-2 px-4 rounded-full hover:bg-white hover:text-yellow-600 font-bold">
                            Bouncy Houses & Moonwalks
                        </button>
                    </NavLink>
                    <NavLink to="/tablesAndChairs">
                        <button className="bg-yellow-600 text-white w-full mb-4 py-2 px-4 rounded-full hover:bg-white hover:text-yellow-600 font-bold">
                            Tables & Chairs
                        </button>
                    </NavLink>
                    <NavLink to="/appliances">
                        <button className="bg-yellow-600 text-white w-full mb-4 py-2 px-4 rounded-full hover:bg-white hover:text-yellow-600 font-bold">
                            Appliances
                        </button>
                    </NavLink>
                </aside>
                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
