import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { checkOutCartThunk, getCartThunk } from '../store/slice/cart.slice';
import SideBarCartTarjet from './SideBarCartTarjet';

const SideBarCart = ({ show, handleClose }) => {

  const dispatch = useDispatch();

  const cartProduct = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(getCartThunk())
  }, [])


  return (
    <div>

      <Offcanvas show={show} onHide={handleClose} backdrop="static" placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> Cart </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          {cartProduct.map(cartIto => (
            <div key={cartIto.id}>

              <SideBarCartTarjet
                cartIto={cartIto}
              />

            </div>
          ))
          }

          <div>Total: </div>
          <Button onClick={()=>dispatch(checkOutCartThunk())}>
            Checkout
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SideBarCart;