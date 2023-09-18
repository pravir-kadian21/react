const OffersCard = ({ offer }) => {
  console.log(offer);
  const { header, couponCode, description } = offer;
  return (
    <div className="offer">
      <div className="offer-header">{header}</div>
      <div className="offer-description">
        {couponCode} | {description}
      </div>
    </div>
  );
};

export default OffersCard;
