import { Link } from "react-router-dom";
import StarRating from "../../customIcons/StarRating";
import { RESTAURANT_IMG_BASE_URL } from "../../utils/constants";

const RestrauntCard = ({
  name,
  deliveryTime,
  rating,
  cost,
  cuisines,
  imageId,
}) => {
  return (
    <div className="res-card">
      <img src={RESTAURANT_IMG_BASE_URL + imageId} />
      <div className="res-name-rating">
        <div className="res-name">{name}</div>
        <div className="res-rating">
          <div>{rating}</div>
          <StarRating />
        </div>
      </div>
      <div className="res-type-price">
        <div className="res-type">
          {cuisines.join(", ").substring(0, 20)}...
        </div>
        <div className="res-price">{cost}</div>
      </div>
      <div className="res-delivery-time">{deliveryTime} mins</div>
    </div>
  );
};

export default RestrauntCard;
