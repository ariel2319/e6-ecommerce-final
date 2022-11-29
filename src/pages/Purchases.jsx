import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPurchasesThunk } from '../store/slice/purchases.slice';

const Purchases = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPurchasesThunk())
  }, [])

  return (
    <h1>Purchases Page</h1>
  );
};

export default Purchases;