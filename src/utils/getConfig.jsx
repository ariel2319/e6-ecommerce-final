const getConfig = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

export default getConfig


//llevo el token que tengo en el LS mediante la configuración