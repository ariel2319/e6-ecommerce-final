import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingScreen from '../components/LoadingScreen';
import { filterHeadlineThunk, filterProductsThunks, getNewProductThunk } from '../store/slice/productStore.slice';
import CardProduct from '../components/CardProduct';
import '../STYLES/styles.css'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Accordion, Col, ListGroup, Row } from 'react-bootstrap';

const Home = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.product)
  const [inputSearch, setInputSearch] = useState("")

  const [categoriesList, setCategoriesList] = useState([])

  useEffect(() => {
    dispatch(getNewProductThunk())

    axios
      .get(`https://e-commerce-api.academlo.tech/api/v1/products/categories`)
      .then(res => setCategoriesList(res.data.data.categories))
  }, [])
  /* console.log('list cat', categoriesList) */


  return (
    <div>
      <h1 className='title'>  TIENDA LA CHICHA </h1>
      <Row>
        {/* Categories */}
        <Col lg={3} md={7} xs={7}>
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            {/* <div className="categories-container"> */}

            <Accordion.Item eventKey="0">
              <Accordion.Header> <b> Categorys </b></Accordion.Header>
              <Accordion.Body>
                {
                  categoriesList.map(catList => (
                    <div key={catList.id}>
                      <ListGroup.Item style={{ cursor: "pointer" }}
                        onClick={() => dispatch(filterProductsThunks(catList.id))}> {catList.name} </ListGroup.Item>
                      <hr />
                    </div>
                  ))
                }
              </Accordion.Body>
            </Accordion.Item>


            {/* <ListGroup>
              {
                categoriesList.map(catList => (
                  <div key={catList.id}>
                    <ListGroup.Item style={{ cursor: "pointer" }}
                      onClick={() => dispatch(filterProductsThunks(catList.id))}> {catList.name} </ListGroup.Item>
                  </div>
                ))
              }
            </ListGroup> */}
            {/* </div> */}
          </Accordion>
        </Col>

        {/* Products */}
        <Col lg={9} md={10} xs={11}>
          <div className="search-container">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Product´s name"
                aria-label="Product´s name"
                aria-describedby="basic-addon2"
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
              />
              <Button
                onClick={() => dispatch(filterHeadlineThunk(inputSearch))}
                variant="outline-secondary"
                id="button-addon2">
                Search
              </Button>
            </InputGroup>
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
        </Col>
      </Row>





    </div>
  );
};

export default Home;