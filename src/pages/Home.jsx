import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingScreen from '../components/LoadingScreen';
import { filterProductsThunks, getNewProductThunk } from '../store/slice/productStore.slice';
import CardProduct from '../components/CardProduct';
import '../STYLES/styles.css'
import axios from 'axios';
import { Button } from 'react-bootstrap';

const Home = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.product)

  const [ categoriesList, setCategoriesList ] = useState ([])

  useEffect(() => {
    dispatch(getNewProductThunk())

    axios
    .get(`https://e-commerce-api.academlo.tech/api/v1/products/categories`)
    .then(res => setCategoriesList(res.data.data.categories))
  }, [])
console.log('list cat',categoriesList)

  return (
    <div>
      <h1> Home Page</h1>
<div className="categories-container">
{
  categoriesList.map(catList=>(
      <Button onClick={()=>dispatch(filterProductsThunks(catList.id))} /* onClick={()=>} */>
      {catList.name}
      </Button>
  ))
}

</div>
      <div className="container-products">
        {
          products.map(product => (
            <div key={product.id}>
              <CardProduct
                product={product}
              />
              {/* <Link to={`/productDetails/${product.id}`}>
                {product.title} <br />
            <img src={product.productImgs[0]} alt="" style={{width:'200px'}} />  
              </Link> */}
            </div>
          ))
        }
      </div>


    </div>
  );
};

export default Home;