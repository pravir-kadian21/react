import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestrauntCard from "../RestrauntCard";
import Shimmer from "../Shimmer";

const Body = () => {
  const [restraunts, setRestraunts] = useState([]);
  const [searchResText, setSearchResText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const { cards } = json?.data;

    setRestraunts(
      cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterTopRatedRestraunts = () => {
    const topRatedRestraunts = restraunts.filter((restraunt) => {
      const { avgRating } = restraunt?.info;
      return avgRating > 4;
    });
    setFilteredRes(topRatedRestraunts);
  };

  const showAllRestraunts = () => {
    fetchData();
  };

  const handleSearchResClick = () => {
    const searchedRes = restraunts.filter((res) => {
      const { name } = res?.info;
      return name.toUpperCase().includes(searchResText.toUpperCase());
    });
    setFilteredRes(searchedRes);
  };

  return restraunts?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="top-body-section">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchResText}
            onChange={(e) => setSearchResText(e.target.value)}
            placeholder="Search For Restraunts"
          />
          <button className="search-btn" onClick={handleSearchResClick}>
            Search
          </button>
        </div>
        <div className="filter-btns">
          <div className="top-rated-restraunts">
            <button onClick={filterTopRatedRestraunts}>
              Top Rated Restraunts
            </button>
          </div>
          <div className="all-restraunts">
            <button onClick={showAllRestraunts}>All Restraunts</button>
          </div>
        </div>
      </div>
      <div className="res-container">
        {filteredRes.map((res) => {
          const {
            id,
            name,
            avgRating,
            costForTwo,
            cuisines,
            cloudinaryImageId,
          } = res?.info;
          const { deliveryTime } = res?.info?.sla;
          return (
            <Link to={`/restrauntMenu/${id}`}>
              <RestrauntCard
                key={id}
                name={name}
                deliveryTime={deliveryTime}
                rating={avgRating}
                cost={costForTwo}
                cuisines={cuisines}
                imageId={cloudinaryImageId}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
