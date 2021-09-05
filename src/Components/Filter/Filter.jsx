import ReactStars from "react-rating-stars-component";
import React from "react";

function Filter({ handleChange, ratingChanged, toggleAddMovie }) {
  return (
    <div>
      <div className="md-form mt-0 d-flex">
        <div className="filter col">
          <input
            className="form-control"
            type="text"
            onChange={handleChange}
            placeholder="Search"
            aria-label="Search"
          />{" "}
          <ReactStars
            count={10}
            onChange={ratingChanged}
            size={30}
            activeColor="#ffd700"
            isHalf={true}
          />
        </div>
        <button
          className="btn btn-outline-primary"
          onClick={() => toggleAddMovie()}
        >
          Add a movie
        </button>
      </div>
    </div>
  );
}

export default Filter;
