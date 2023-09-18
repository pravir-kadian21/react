import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../../customIcons/StarRating";
import TimeToDeliver from "../../customIcons/TimeToDeliver";
import Rupees from "../../customIcons/Rupees";
import Shimmer from "../Shimmer";
import { MENU_API } from "../../utils/constants";
import OffersCard from "../OffersCard";
import Accordian from "../Accordian";
const RestrauntMenu = () => {
  const [resInfo, setResInfo] = useState({});
  const [offersInfo, setOffersInfo] = useState([]);
  const [menuAccordion, setMenuAccordion] = useState([]);

  const { resId } = useParams();

  const prepareAccordionData = (data) => {
    const { cards } = data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
    const resCategoryInfo = cards.map((card) => {
      console.log(card);
      const { title } = card?.card?.card;
      const { itemCards } = card?.card?.card;
      if (title && itemCards) return { title, itemCards, open: true };
      else return null;
    });
    const filteredResCategoryInfo = resCategoryInfo.filter((category) => {
      return category !== null;
    });
    setMenuAccordion(filteredResCategoryInfo);
  };

  const fetchMenu = async () => {
    const response = await fetch(`${MENU_API}${resId}`);
    const json = await response.json();
    const { data } = json;
    console.log(data);
    if (data?.cards) {
      const {
        name,
        cuisines,
        avgRatingString,
        totalRatingsString,
        areaName,
        sla,
        costForTwoMessage,
      } = data?.cards[0]?.card?.card?.info;
      const { offers } =
        data?.cards[1]?.card?.card?.gridElements?.infoWithStyle;
      console.log(offers);
      const { lastMileTravelString, deliveryTime } = sla;
      setResInfo({
        name,
        cuisines,
        avgRatingString,
        totalRatingsString,
        areaName,
        lastMileTravelString,
        costForTwoMessage,
        deliveryTime,
      });
      setOffersInfo(offers);
      prepareAccordionData(data);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const handleAccordianClick = (title) => {
    debugger;
    const updatedMenu = menuAccordion.map((item) => {
      if (item?.title === title) {
        return { ...item, open: !item.open };
      } else return item;
    });
    setMenuAccordion(updatedMenu);
  };

  console.log(menuAccordion);
  debugger;

  return Object.keys(resInfo || {}).length === 0 ? (
    <Shimmer />
  ) : (
    <div className="menu-container">
      <div className="res-menu-info">
        <div className="res-menu-name">
          <div className="name">{resInfo?.name}</div>
          <div className="info">{resInfo?.cuisines?.join(", ")}</div>
          <div className="info">
            {resInfo?.areaName}, {resInfo?.lastMileTravelString}
          </div>
        </div>
        <div className="res-menu-rating">
          <div className="star-rating">
            <StarRating fill="#3d9b6d" />
            <div className="avg-rating">{resInfo?.avgRatingString}</div>
          </div>
          <div className="total-rating">{resInfo?.totalRatingsString}</div>
        </div>
      </div>
      <div className="dashed-border" />
      <div className="time-and-cost">
        <div className="time">
          <div>
            <TimeToDeliver />
          </div>
          <div className="time-text">{resInfo?.deliveryTime || "--"} MINS</div>
        </div>
        <div className="cost">
          <div>
            <Rupees />
          </div>
          <div className="cost-text">{resInfo?.costForTwoMessage}</div>
        </div>
      </div>
      <div className="offers-container">
        {offersInfo.map((offer) => {
          return <OffersCard offer={offer?.info} />;
        })}
      </div>
      <div className="menu-accordian">
        {menuAccordion.map((accordian) => {
          return (
            <Accordian
              key={accordian?.title}
              open={accordian?.open}
              title={accordian?.title}
              itemCards={accordian?.itemCards || []}
              handleAccordianClick={handleAccordianClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestrauntMenu;
