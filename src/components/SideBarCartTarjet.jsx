import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteCartThunk } from '../store/slice/cart.slice';
import './StyleSideBarCartTarjet.css'

const SideBarCartTarjet = ({ cartIto }) => {


  const dispatch = useDispatch()

  const deleteToCart = (id) => {
    alert('borrandooo')
    dispatch(deleteCartThunk(id))
  }

  return (
    <div className='cart-product-container'>
      <div className='cart-brand'>
        {cartIto.brand}
      </div>
      <div className='cart-title'>
        {cartIto.title}
      </div>

      <div className='cart-amount'>
        <div>  {cartIto.productsInCart.quantity} </div>


        <Button
          variant="light"
          style={{ padding: '0px', color: 'red' }}
          onClick={deleteToCart}
        >
          <span className="material-symbols-outlined" >
            delete
          </span>
        </Button>
      </div>

      <div className='cart-total-price'>
        <span>
          Sub Total:
        </span>
        <b>
          ${cartIto.price * cartIto.productsInCart.quantity}
        </b>
      </div>
    </div>
  );
};

export default SideBarCartTarjet;