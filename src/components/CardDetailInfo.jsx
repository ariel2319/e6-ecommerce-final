import React from 'react';
import { Carousel, Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './StyleCardDetailInfo.css'

const CardDetailInfo = ({ product, relatedProducts }) => {

  return (
    <div>
      <Row>
        <Col lg={8}>
          <h1 style={{ fontSize: '1.7em', fontWeight: '600' }} >{product?.title}</h1>



          <div className="image-container">
            <Carousel fade interval={2000}>
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



          <div className="detail-container">
            <p> <b> Price: </b> <span className='price'> ${product?.price} </span></p>
            <p> <b> Quantity: "X" </b></p>
            <div className="btn-container">
              <button className='btn-add'>
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


                  <ListGroup.Item key={related.id}>
                    <Link to={`/productDetails/${related.id}`}>
                      {related.title}
                      <br />
                      <img src={related.productImgs[0]} style={{ width: '150px' }}
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