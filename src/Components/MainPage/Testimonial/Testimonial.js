import React, { useEffect, useState } from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";


const Testimonial = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
      fetch('https://infinite-island-97956.herokuapp.com/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
  },[]);


  return (
    <section>
      <div className="container">
        <div className="row d-flex justify-content-between mt-5">
          <div className="col text-center">
            <h5 style={{ color: "rgb(28, 199, 193)" }}>TESTIMONIAL</h5>
          </div>
        </div>
        <div className="row">
          {reviews.map(review => (
            <TestimonialCard review={review}></TestimonialCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
