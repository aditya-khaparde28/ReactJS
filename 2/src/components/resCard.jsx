import { CDN_URL } from "../../utils/constant";
import resList from "../../utils/mockdata";

const RestaurantCard=(props)=>{
    const {resData}=props;
    
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0" }}>
            <img src={CDN_URL+resData.info.cloudinaryImageId} className="img"></img>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines}</h4>
            <h5>{resData.info.avgRating}</h5>
        </div>
    )
}

export default RestaurantCard