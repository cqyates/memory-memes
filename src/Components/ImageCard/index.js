
import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card">
      <span onClick={() => props.shuffleCards(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} width="170" height="170" />
      </div>
      </span>
    </div>
  );
}

export default ImageCard;