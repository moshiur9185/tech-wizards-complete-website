import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Review = () => {
  const [review, setReview] = useState({});

  const handleBlur = (e) => {
    const newReview = { ...review };
    newReview[e.target.name] = e.target.value;
    setReview(newReview);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", review.name);
    formData.append("profession", review.profession);
    formData.append("description", review.data);

    fetch("https://infinite-island-97956.herokuapp.com/addReview", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section>
      <Sidebar></Sidebar>
      <div className="container-fluid row">
        <div
          className="col-md-5 p-4 pr-5"
          style={{
            position: "absolute",
            left: 320,
            backgroundColor: "#F4FDFB",
          }}
        >
          <h5 className="text-brand">Review</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="profession"
                placeholder="Your profession"
              />
            </div>
            <div class="from-group">
              <textarea
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="data"
                placeholder="Description"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-brand mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Review;
