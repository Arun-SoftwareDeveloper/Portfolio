import React, { useState } from "react";
import bmc from "../Images/bmc-icon.png";
import "../Styles/BuyMeACoffee.css";

function BuyMeACoffee() {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleImageClick = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <div className="buymeacoffee-container">
      <div className="image-container" onClick={handleImageClick}>
        <img src={bmc} alt="Buy Me a Coffee" />
      </div>
      {popupVisible && (
        <div className="popup-container">
          <div className="popup">
            <button className="close-button" onClick={handleImageClick}>
              Close
            </button>
            <iframe
              title="Buy Me a Coffee"
              src="https://www.buymeacoffee.com/arunramasamy"
              width="700"
              height="300"
              style={{
                border: "none",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              }}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default BuyMeACoffee;
