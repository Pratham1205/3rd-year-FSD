import React from "react";
import "./card.css";

const card = () => {
  return (
    <div>
      <div class="card" style={{width: "18rem;"}}>
        <p>Dish: </p>
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">
            Rate: 
          </p>
        </div>
      </div>
    </div>
  );
};

export default card;
