import { useEffect, useState } from "react";
import RestaurantCard from "./resCard"

const RestaurantMenu=()=>{

    const[resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async()=>{
        const data=await fetch(
            ""
        );

        const json=await data.json();

        console.log();
    }
    return(
        <div className="menu">
            <h1>Name of the restaureant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
            </ul>
        </div>
    )
}
export default RestaurantCard;