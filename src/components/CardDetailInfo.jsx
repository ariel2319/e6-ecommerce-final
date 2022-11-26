import React from 'react';
import { Link } from 'react-router-dom';
import './StyleCardDetailInfo.css'

const CardDetailInfo = ({ product, relatedProducts }) => {
  return (
    <div>
      <div className="image-container">
        <img src={product?.productImgs[0]} className="image-product" />
      </div>
      <div className="detail-container">
        <h1>{product?.title}</h1>
        <p>Price {product?.price}</p>
        <p>Quantity</p>
        <button> ADD </button>
        <p>{product?.description}</p>
      </div>


      <div className="related-container">
        <h1>Related Products</h1>
        {
          relatedProducts.map(related => (

            <li key={related.id}>
              <Link to={`/productDetails/${related.id}`}>
                {related.title}
                <br />
                <img src={related.productImgs[0]} style={{width: '150px'}} 
                alt="" />
              </Link>
            </li>
          ))
        }

      </div>
    </div >
  );
};

export default CardDetailInfo;