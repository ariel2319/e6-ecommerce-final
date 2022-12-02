import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPurchasesThunk } from '../store/slice/purchases.slice';

const Purchases = () => {

  const dispatch = useDispatch();

  const purchases = useSelector(state => state.purchases)

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'short' }

  const date = (time) => {
    const newDate = new Date(time)
    return newDate
  }

  useEffect(() => {
    dispatch(getPurchasesThunk())
  }, [])

  return (
    <div>
      <h1>Purchases Page</h1>
      <ul>
        {
          purchases.map(purchase => (
            <li key={purchase.id}>
              {purchase.createdAt}
              {/* { date(purchase.createdAt) } */}
              
              {
                purchase.cart.products.map(product => (
                  <div key={product.id}>
                    <Link to={`/productDetails/${product.id}`}>
                      {product.title}
                    </Link>
                  </div>
                ))
              }

              <br />
            </li>
          ))
        }
        <hr />
      </ul>

    </div>
  );
};

export default Purchases;