import React from 'react';

const Rating = ({ratingVal, revVal, color}) => {
  return (
    <div className="rating">
      {/* 1st Star */}
      <span>
        <i
          style={{color}}
          className={
            ratingVal >= 1
              ? 'fa-solid fa-star'
              : ratingVal >= 0.5
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        ></i>
      </span>
      {/* 2nd Star */}
      <span>
        <i
          style={{color}}
          className={
            ratingVal >= 2
              ? 'fa-solid fa-star'
              : ratingVal >= 1.5
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        ></i>
      </span>
      {/* 3rd Star */}
      <span>
        <i
          style={{color}}
          className={
            ratingVal >= 3
              ? 'fa-solid fa-star'
              : ratingVal >= 2.5
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        ></i>
      </span>
      {/* 4th Star */}
      <span>
        <i
          style={{color}}
          className={
            ratingVal >= 4
              ? 'fa-solid fa-star'
              : ratingVal >= 3.5
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        ></i>
      </span>
      {/* 5th Star */}
      <span>
        <i
          style={{color}}
          className={
            ratingVal >= 5
              ? 'fa-solid fa-star'
              : ratingVal >= 4.5
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        ></i>
      </span>
      <span>{revVal && revVal}</span>
    </div>
  );
};

// Rating.propTypes = {
//   ratingVal: PropTypes.number.isRequired,
//   revVal: PropTypes.string.isRequired,
//   color: PropTypes.string,
// };

export default Rating;
