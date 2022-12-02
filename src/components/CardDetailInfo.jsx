import React, { useState } from 'react';
import { Carousel, Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createCartThunk } from '../store/slice/cart.slice';
import './StyleCardDetailInfo.css'

const CardDetailInfo = ({ product, relatedProducts }) => {

  const [amount, setAmount] = useState(0)

  const dispatch = useDispatch()

  const addToCart = () => {
    const products = {
      id: product.id,
      quantity: amount,
    }
    /* console.log(products) */
    dispatch(createCartThunk(products))
  }

  const deleteToCart = () => {

  }


  return (
    <div>
      <Row>
        <Col lg={8}>
          <h1 style={{ fontSize: '1.7em', fontWeight: '600' }} >{product?.title}</h1>



          <div className="image-container">
            <Carousel fade interval={2000} variant="dark">
              <Carousel.Item className='image-content'>
                <img
                  className="d-block w-100 image-product"
                  src={product?.productImgs[0]}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item className='image-content'>
                <img
                  className="d-block w-100 image-product"
                  src={product?.productImgs[1]}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item className='image-content'>
                <img
                  className="d-block w-100 image-product"
                  src={product?.productImgs[2]}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>



          <div className="detail-container" >
            <div>
              <b>
                Price:
              </b>
              <span className='price'>
                ${product?.price}
              </span>
            </div>
            <div>
                <b>
                  Quantity:
                </b>
                <input
                  style={{ width: '60px' }}
                  type="number"
                  min={0}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
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

          <p style={{ textAlign: "justify" }}>{product?.description}</p>
        </Col>


        <Col lg={1}></Col>


        <Col lg={3}>
          <div className="related-container">
            <h1>Related Products</h1>
            <ListGroup variant="flush">
              {
                relatedProducts.map(related => (


                  <ListGroup.Item key={related.id} style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                    <Link to={`/productDetails/${related.id}`}>
                      {related.title}
                      <br />
                      <img src={related.productImgs[0]} style={{ height: '200px', objectFit: 'contain' }}
                        alt="" />
                    </Link>
                  </ListGroup.Item>
                ))
              }
            </ListGroup>
          </div>
        </Col>
      </Row>

    </div >
  );
};

export default CardDetailInfo;