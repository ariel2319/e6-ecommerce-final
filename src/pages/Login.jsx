import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import '../STYLES/styles.css'


const Login = () => {

  const { register, handleSubmit } = useForm()

  const [userData, setUserData] = useState([])


  const navigate = useNavigate();

  const submit = data => {
    axios
      .post(`https://e-commerce-api.academlo.tech/api/v1/users/login`, data)
      .then(res => {
        navigate('/')
        console.log('res .then', res)
        localStorage.setItem("token", res.data.data.token) //guardo el token de mi login en el LS
        localStorage.setItem('firstName', res.data.data.user.firstName)
        localStorage.setItem('lastName', res.data.data.user.lastName)
      })
      .catch(error => {
        if (error.response?.status === 404) {
          alert('Credenciales Inconrrectas')
        } else {
          console.log(error.response?.data)
        }
      })
  }



  useEffect(() => {
    axios
      .get(`https://e-commerce-api.academlo.tech/api/v1/users/login`)
      .then(res => setUserData(res.data.data))
  }, [])

  const quitUser = () => {
    localStorage.removeItem('firstName')
    localStorage.removeItem('lastName')
    localStorage.removeItem('token')
    navigate('/login')
  }

  const capitalize = (name) => {
    const newName = localStorage.getItem(`${name}`).charAt(0).toUpperCase() + localStorage.getItem(`${name}`).slice(1);

    return newName
  }
  /* const firstName = localStorage.getItem('firstName').charAt(0).toUpperCase() + localStorage.getItem('firstName').slice(1);
  const lastName = localStorage.getItem('lastName').charAt(0).toUpperCase() + localStorage.getItem('lastName').slice(1); */

  return (

    (localStorage.getItem('token') === null) ?

      < Form onSubmit={handleSubmit(submit)} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" {...register('email')} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" {...register('password')} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form >

      :
      <div>
        <div>
          <h1 style={{filter: 'drop-shadow(1px 1px 2px #eb6864)'}}>
            Welcome {capitalize('firstName')} !
            </h1>
        </div>
        <div className='login-container'>

          <img src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" style={{ width: '200px' }} />

          <div style={{ marginBottom: '10px' }}>
            <b>
              {capitalize('firstName')} {capitalize('lastName')}
            </b>
          </div>

          <Button
            title='Log Out'
            onClick={quitUser}
          >
            <i className="fa-solid fa-user-large-slash"></i>
          </Button>


        </div>
      </div>

  );
};

export default Login;