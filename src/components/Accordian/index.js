import { ChevronDown } from "../../customIcons/ChevronDown";
import { ChevronUp } from "../../customIcons/ChevronUp";
import { DISH_IMG_BASE_URL } from "../../utils/constants";

const Accordian = ({ open, title, itemCards, handleAccordianClick }) => {
  const updatedItemCards = open ? itemCards : [];
  return (
    <>
      <div className="category-title">
        <div className="category-title-name">
          {title} ({itemCards?.length})
        </div>
        {open ? (
          <div
            className="category-title-svg"
            onClick={() => handleAccordianClick(title)}
          >
            <ChevronUp />
          </div>
        ) : (
          <div
            className="category-title-svg"
            onClick={() => handleAccordianClick(title)}
          >
            <ChevronDown />
          </div>
        )}
      </div>
      <div className="thick-boundary" />
      <div className="category-menu-container">
        {updatedItemCards.map((item) => {
          const { name, imageId, price, description, defaultPrice } =
            item?.card?.info;
          const updatedPrice = price || defaultPrice;
          //   console.log(name);
          return (
            <>
              <div className="category-food">
                <div>
                  <div className="food-name">{name}</div>
                  <div className="food-price">₹ {updatedPrice / 100}</div>
                  <div className="food-des">{description}</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div className="food-img">
                    <img src={`${DISH_IMG_BASE_URL}${imageId}`} />
                  </div>
                  <button className="add-dish-btn">Add</button>
                </div>
              </div>
              <div className="thin-boundary" />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Accordian;
