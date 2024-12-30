import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen/index";
import {useEffect, useState} from "react";

export default function Inventory() {
    const cloudinary = new Cloudinary({
        cloud: { cloudName: "dowgufc1f" }
    });

    const [inventory, setInventory] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchInventory() {
            const url = "http://localhost:3000/inventory";
            const response = await fetch(url);
            const results = await response.json();
            setInventory(results);
        }
        fetchInventory();
    }, []);

    if (!Array.isArray(inventory.inventoryItems)) {
        return <div className="text-white font-bold text-center">No inventory available</div>;
    }

    return (
        <div className="p-6">
            {error && <p>Error: {error}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {inventory.inventoryItems.map((item) => (
                    <div className="bg-white rounded-xl shadow-lg p-4" key={item._id}>
                        <AdvancedImage
                            className="max-h-40 max-w-40 self-center rounded-xl border-2 border-solid border-black"
                            cldImg={cloudinary.image(item.public_id)}
                        />
                        <div className="text-black font-serif font-bold text-sm text-center p-2">{item.title}</div>
                        <div className="text-black font-serif font-bold text-sm text-center">Price: ${item.price}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
