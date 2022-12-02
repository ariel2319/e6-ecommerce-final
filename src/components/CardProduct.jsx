import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import './StyleCardProduct.css'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createCartThunk, getCartThunk } from '../store/slice/cart.slice';


const CardProduct = ({ product }) => {

  const [index, setIndex] = useState(0);

  const dispatch = useDispatch()

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const addToCart = () => {
    const products = {
      id: product.id,
      quantity: 1,
    }
    /* console.log(products) */
    dispatch(createCartThunk(products))
  }


  return (
    <div className="container">
      <div className="card">

        <Link to={`/productDetails/${product.id}`}>

          <div className="face front-face">
            <div className="content">

              
              <Carousel
                fade
                interval={2000}
                activeIndex={index}
                onSelect={handleSelect}
                variant="dark"
                touch={true}
              >
                <Carousel.Item className='car-img-container'>
                  <img
                    className="d-block w-100 car-img"
                    src={product?.productImgs[0]}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item className='car-img-container'>
                  <img
                    className="d-block w-100 car-img"
                    src={product?.productImgs[1]}
                    alt="Second slide"
                  />
                </Carousel.Item>
              </Carousel>

            </div>
          </div>
        </Link>


        <div className="face back-face">
          <div className="content">
            <div className='content-price'>
              <div>
                <p> <b> Price: </b></p>
                <p className='price'> ${product?.price} </p>
              </div>
              <div className="btn-container">
                <button
                  className='btn-add'
                  onClick={addToCart}
                >
                  <i className="fa-solid fa-cart-plus"></i>
                </button>
              </div>
            </div>
            <div className='product-title'>
              <h4> {product?.title} </h4>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default CardProduct;