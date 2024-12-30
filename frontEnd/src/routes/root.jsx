import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-400 text-white">
            <div className="flex items-center justify-between px-6 py-6 sm:py-12">
                <img
                    className="w-32 h-auto sm:w-40 md:w-52 lg:w-60 xl:w-60"
                    src="./src/routes/assets/DragoPic.png"
                    alt="Dragon Picture"
                />
                <div className="text-center sm:text-left">
                    <h1 className="text-4xl sm:text-6xl font-bold font-serif">Drago's Moonwalks</h1>
                    <h3 className="text-xl sm:text-2xl my-4 font-serif text-center">Parties Fundraisers and Family Reunions</h3>
                </div>
            </div>
            <main className="p-6">
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
                <aside className=" w-full sm:w-1/4 p-6">
                    <NavLink to="/all">
                        <button className="bg-yellow-600 text-white w-full mb-4 py-2 px-4 rounded-full hover:bg-white hover:text-yellow-600 font-bold">
                            All
                        </button>
                    </NavLink>
                    <NavLink>
                        <button className="bg-yellow-600 text-white w-full mb-4 py-2 px-4 rounded-full hover:bg-white hover:text-yellow-600 font-bold">
                            Bouncy Houses & Moonwalks
                        </button>
                    </NavLink>
                    <NavLink>
                        <button className="bg-yellow-600 text-white w-full mb-4 py-2 px-4 rounded-full hover:bg-white hover:text-yellow-600 font-bold">
                            Tables & Chairs
                        </button>
                    </NavLink>
                    <NavLink>
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
