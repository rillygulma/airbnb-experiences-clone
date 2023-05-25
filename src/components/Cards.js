import React from "react";
import Star from "../images/star.png";

export default function Card(props) {
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.card.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={`images/${props.card.coverImg}`} className="card-images" alt=" " />

      <div className="info">
        <img src={Star} className="card-star" alt="" />
        <span>{props.card.stats.rating}</span>
        <span className="gray">
          ({props.card.stats.reviewCount}) •
        </span>
        <span className="gray"> {props.card.location}
        </span>
      </div>

      <div className="info">
        <div>
          <p>{props.card.title}</p>
        </div>

        <div>
          <span>
            <b>From ${props.card.price}</b>
          </span>
          <span>/ person</span>
        </div>
      </div>
    </div>
  );
}
