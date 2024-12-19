import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen/index";
import {useEffect, useState} from "react";


export default function Inventory() {
    const cloudinary = new Cloudinary({
        cloud: {
          cloudName: "dowgufc1f" 
        }
      });

    const [inventory, setInventory] = useState([])
    const [error, setError] = useState("");

    useEffect(() => {
        try { //fetch inventory data
            async function fetchInventory() {
                const url = "http://localhost:3000/inventory";
        
                const response = await fetch(url);
                const results = await response.json();
                setInventory(results);
                console.log(results);
            }
            fetchInventory();
        } catch (error) {
            setError(error.message);
        }
    }, [])//empty array means that the code should only run once

    //this case must be present in order to allow inventory to load in
    if (!Array.isArray(inventory.inventoryItems)) {
        return <div className="text-white font-bold text-center">No inventory available</div>; // Handle non-array case gracefully (map() is not a function)
      }
    return(
        <div>
            {error && <p>Error: {error}</p>}
            <div className=" grid grid-cols-4 gap-2 mr-10 mb-10">
                {inventory.inventoryItems.map((e) => (//react is hungry for keys
                    <div className="text-left flex flex-col p-4 bg-white rounded-xl" key={e._id}>
                        <AdvancedImage className="size-full max-h-40 max-w-40 self-center rounded-xl border-2 border-solid border-black" cldImg={cloudinary.image(e.public_id)}></AdvancedImage>
                        <div className="text-black font-serif font-bold text-sm text-center p-2">{e.title}</div>
                        <div className="text-black font-serif font-bold text-sm text-center">Price: ${e.price}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}