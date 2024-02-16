import React from "react";
import "../../Assets/Css/Body.css";

const DualCardDisplay = ({ cardImages }) => {
  return (
    <div className="card-adjust">
      {cardImages.map((image) => (
        <a key={image.id} href="">
          <img
            className="w-[550.5px] h-[367px]"
            src={image.src}
            alt=""
          />
        </a>
      ))}
    </div>
  );
};

export default DualCardDisplay;
