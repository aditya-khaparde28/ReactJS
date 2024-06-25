import resList from "../../utils/mockdata";
import RestaurantCard from "./resCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body=()=>{


    const [listOfRestaurants,setListofRestaurant]=useState(resList);
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);
    const [searchText,setSeachText]=useState("");

    useEffect(()=>{
        fetchData();
    },[]);


    const fetchData=async ()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5678553&lng=73.9143637&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json=await data.json();

        console.log(json);
    
        //setListofRestaurant(json?.data?.cards[2]?.data?.cards);
        //setFilteredRestaurant(json?.data?.cards[2]?.data?.cards);
    };
    //condional rendering
    // if(listOfRestaurants==0){
    //     return <Shimmer />;
    // }
    
    return listOfRestaurants==0? <Shimmer/>:(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}
                    onChange={(e)=>{
                        setSeachText(e.target.value);
                    }}></input>
                    <button onClick={()=>{
                        console.log(searchText);
                        const filteredRestaurant=listOfRestaurants.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setListofRestaurant(filteredRestaurant)

                    }}>Search</button>
                </div>
            <button className="filter-btn"
            onClick={()=>{
                const filteredList=listOfRestaurants.filter(
                    (res)=>res.info.avgRating>4.5
                );
                setListofRestaurant(filteredList);
            }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {/* Paaging props */}
                {/* <RestaurantCard resName="Pizzahut"/> */}
                {/* <RestaurantCard resData={restObj}/> */}
                {listOfRestaurants.map((restaurant)=> (<RestaurantCard key ={restaurant.info.id}resData={restaurant}/>))}
            </div>
        </div>
    )
}
export default Body;