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
            <div className=" grid grid-cols-5 gap-2 ">
                {inventory.inventoryItems.map((e) => (//react is hungry for keys
                    <div className="text-left flex flex-col p-4 bg-white border-5 border-black" key={e._id}>
                        <AdvancedImage className=" max-h-40 max-w-40" cldImg={cloudinary.image(e.public_id)}></AdvancedImage>
                        <div>{e.name}</div>
                        <div>{e.description}</div>
                        <div>price: ${e.price}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}