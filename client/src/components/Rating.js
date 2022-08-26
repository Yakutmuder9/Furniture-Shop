import { useState } from "react";

const Rating = ({ value, text }) => {
  const [rating, setRating] = useState(1)

  const setRatingHandler = (e) => {
    console.log(e)
    console.log(e.target.value)
    setRating(e.target.value)
  }


  return (
    <div className="rating">
      <span className="material-symbols-outlined">
        star
      </span>
      <div onClick={(e) => setRatingHandler(e)} className="review-stars flex justify-self-start rating mb-6 ml-1">
        <i className={rating >= 1 ? 'fas fa-star' : rating >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'} value="1"></i>
        <i className={rating >= 2 ? 'fas fa-star' : rating >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'} value="2"></i>
        <i className={rating >= 3 ? 'fas fa-star' : rating >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'} value="3"></i>
        <i className={rating >= 4 ? 'fas fa-star' : rating >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'} value="4"></i>
        <i className={rating >= 5 ? 'fas fa-star' : rating >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'} value="5"></i>
      </div>
      {/* <span class="material-symbols-outlined">
        grade
      </span>
      <i
        className={
          value >= 1
            ? "fas fa-star"
            : value >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
        }
      ></i>
      <i
        className={
          value >= 2
            ? "fas fa-star"
            : value >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
        }
      ></i>
      <i
        className={
          value >= 3
            ? "fas fa-star"
            : value >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
        }
      ></i>
      <i
        className={
          value >= 4
            ? "fas fa-star"
            : value >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
        }
      ></i>
      <i
        className={
          value >= 5
            ? "fas fa-star"
            : value >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
        }
      ></i>

      <span>{text && text}</span> */}
    </div>
  );
};

export default Rating;
