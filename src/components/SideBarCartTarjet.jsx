import React from 'react';
import { Button } from 'react-bootstrap';
import './StyleSideBarCartTarjet.css'

const SideBarCartTarjet = ({ cartIto }) => {
  return (
    <div className='cart-product-container'>
      <div className='cart-brand'>
        {cartIto.brand}
      </div>
      <div className='cart-title'>
        {cartIto.title}
      </div>

      <div className='cart-amount'>
        <input
          type="text"
          value={cartIto.productsInCart.quantity}
        />

        <Button
          variant="light"
          style={{ padding: '0px', color: 'red' }}
        >
          <span className="material-symbols-outlined" >
            delete
          </span>
        </Button>
      </div>

      <div className='cart-total-price'>
        <span>
          Total:
        </span>
        <b>
          ${cartIto.price}
        </b>
      </div>
    </div>
  );
};

export default SideBarCartTarjet;