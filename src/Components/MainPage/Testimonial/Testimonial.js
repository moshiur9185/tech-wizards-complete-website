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
            <h4 >TESTIMONIAL</h4>
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
