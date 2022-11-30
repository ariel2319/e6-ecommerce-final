import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import './StyleCardProduct.css'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';


const CardProduct = ({ product }) => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container">
      <div className="card">

        <Link to={`/productDetails/${product.id}`}>

          <div className="face front-face">
            <div className="content">
              {/* <img src={product?.productImgs[0]} className='over' /> */}


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
                <button className='btn-add'>
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