import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingScreen from '../components/LoadingScreen';
import { getNewProductThunk } from '../store/slice/productStore.slice';
import Table from 'react-bootstrap/Table';
import CardProduct from '../components/CardProduct';


const Home = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.product)
  const pictures = useSelector(state => state.product.productImgs)

  useEffect(() => {
    dispatch(getNewProductThunk())
  }, [])


  return (
    <div>
      <h1> Home Page</h1>

      <CardProduct />

      {/* <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Status</th>
            <th>Img</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (

            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.category.name}</td>
              <td>${product.price}</td>
              <td>{product.status}</td>
              <td><img src={product.productImgs[0]} style={{ width: '150px', height: '150px' }} /></td>

            </tr>
          ))
          }
        </tbody>
      </Table> */}


    </div>
  );
};

export default Home;