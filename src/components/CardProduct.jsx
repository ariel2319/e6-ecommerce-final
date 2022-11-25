import React from 'react';
import './StyleCardProduct.css'


const CardProduct = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="face front-face">
          <div className="content">
            <img src="https://wallpapercave.com/wp/wp2763465.jpg" alt="" />
          </div>
        </div>
        <div className="face back-face">
          <div className="content">
            <p> Price </p>
            <p> $XXXXX </p>
            <button> CAR </button>
            <h4> BACK - Product Name </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;