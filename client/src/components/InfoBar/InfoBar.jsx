import React from "react";

import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";

import "./InfoBar.css";

const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="letInnerContainer">
        <img src={onlineIcon} alt="online image" className="onlineIcon" />
        <h3>{room}</h3>
      </div>

      <div className="rightInnerContainer">
        <a href="/"> <img src={closeIcon} alt="close image" /> </a>
      </div>
    </div>
  );
};

export default InfoBar;
