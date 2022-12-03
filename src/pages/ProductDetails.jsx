import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardDetailInfo from '../components/CardDetailInfo';
import CardProduct from '../components/CardProduct';
import { getNewProductThunk } from '../store/slice/productStore.slice';


const ProductDetails = () => {

  const { id } = useParams()
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getNewProductThunk())
  }, [])

  const newProduct = useSelector(state => state.product)

  /* para poder traer solo el producto que selecciono */
  const product = newProduct.find(product => product.id === Number(id))
  /* para poder obtener solo productos de la misma categoria y así tener productos relacionados */
  const relatedProducts = newProduct.filter(newRelatedProduct =>
    newRelatedProduct.category.id === product?.category.id
    && newRelatedProduct.id !== product.id
  )

  
  return (
    <div>
      
      <div>
        <CardDetailInfo
          product={product}
          relatedProducts={relatedProducts}
        />
      </div>
    </div>
  );
};

export default ProductDetails;