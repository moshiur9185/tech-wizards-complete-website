import React from "react";
import HoverRating from "./HoverRating";

const TestimonialCard = ({ review }) => {
  return (
    <div className="col-md-4">
      <div style={{ borderRadius: "50px", height:"50vh"}} className="card shadow my-4 bg-secondary">
        <div className="card-body py-3 px-4">
          <div className="d-flex p-2">
            <div className=" pl-2">
              <h4 style={{ color: "rgb(28, 199, 193)" }}>{review.name}</h4>
              <h6 className="text-white">{review.profession}</h6>
            </div>
          </div>
          <p class="card-text text-white">{review.description}</p>
        </div>
        <div className="m-auto pb-3">
          <HoverRating />
        </div>  
      </div>
    </div>
  );
};

export default TestimonialCard;
