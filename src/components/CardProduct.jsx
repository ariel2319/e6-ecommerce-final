import Button from 'react-bootstrap/Button';
import React from 'react';
import './StyleCardProduct.css'
import { Link } from 'react-router-dom';


const CardProduct = ({ product }) => {



  return (
    <div className="container">
      <div className="card">

      <Link to={`/productDetails/${product.id}`}>

        <div className="face front-face">
          <div className="content">
            <img src={product?.productImgs[0]} className='over' />
          </div>
        </div>

        <div className="face back-face">
          <div className="content">
            <div className='content-price'>
              <div>
                <p> <b> Price: </b></p>
                <p> ${product?.price} </p>
              </div>
              <div className="btn-container">
                <button className='btn-add'>
                  <i class="fa-solid fa-cart-plus"></i>
                </button> 
              </div>
            </div>
            <div className='product-title'>
              <h4> {product?.title} </h4>
            </div>
          </div>
        </div>

        </Link>

      </div>
    </div>
  );
};

export default CardProduct;