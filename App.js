import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://icon-library.com/images/order-food-online-icon/order-food-online-icon-5.jpg" />
        <div className="logo-text">Order Giant</div>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          imageId
        }
      />
      <div className="res-name-rating">
        <div className="res-name">{name}</div>
        <div className="res-rating">
          <div>{rating}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFFFFF"
            width="0.8rem"
            height="0.8rem"
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
            class="sc-rbbb40-0 fauQLv"
          >
            <title>star-fill</title>
            <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path>
          </svg>
        </div>
      </div>
      <div className="res-type-price">
        <div className="res-type">{cuisines.join(", ")}</div>
        <div className="res-price">₹{cost / 100} for one</div>
      </div>
      <div className="res-delivery-time">{deliveryTime} mins</div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
      <div className="res-container">
        {resList.map((res) => {
          const {
            id,
            name,
            deliveryTime,
            avgRating,
            costForTwo,
            cuisines,
            cloudinaryImageId,
          } = res?.data;
          return (
            <RestrauntCard
              key={id}
              name={name}
              deliveryTime={deliveryTime}
              rating={avgRating}
              cost={costForTwo}
              cuisines={cuisines}
              imageId={cloudinaryImageId}
            />
          );
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
