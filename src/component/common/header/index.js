import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato-logo"
        className="header-logo"
      />

      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fa-solid fa-location-dot absolute-center location-icon"></i>
              <div>Jamshedpur</div>
            </div>
            <i className="fa-solid fa-caret-down"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchbar">
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              placeholder="Search for resturant, cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            alt="profile"
            className="header-profile-image"
          />
          <span className="header-surname">Fazle</span>
          <i className="fa-solid fa-chevron-down absolute-center profile-option-icon"></i>
        </div>
      </div>
    </div>
  );
};
export default Header;
