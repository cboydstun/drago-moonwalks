import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
    return(
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-400 text-right">
        <div>
            <h1 className="text-center text-white font-bold">Drago's Moonwalks</h1>
            <h3 className="text-center text-white">Parties Fundraisers and Family Reunions</h3>
            <header className="p-4">
                {/*button*/}
                <NavLink to="/inventory">
                    <button className="bg-red-600 text-white font-bold py-1 px-4 rounded-full">Inventory</button> 
                </NavLink>
                <NavLink to="/admin">
                <button className="bg-yellow-600 text-white font-bold py-1 px-4 rounded-full">Admin</button>
                </NavLink>
            <img className="rounded-sm size-56"src="https://media.discordapp.net/attachments/1303146516294270996/1309332345635213394/image.png?ex=67413245&is=673fe0c5&hm=d27f00db3f87f1b7e08a3dedc6adc2daf61d9a7f8df0d4ffff33135f82e01f42&=&format=webp&quality=lossless&width=372&height=352"></img>
            </header>
            <Outlet></Outlet>
        </div>
    </div>
    )
}