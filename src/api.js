import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

import api from './api';

// Para obtener productos
api.get('/api/products/')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Hubo un error!', error);
  });

// Para registrar un usuario
api.post('api/register-cliente/', {
  username: 'nuevo_usuario',
  email: 'nuevo@correo.com',
  password: 'contraseña',
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Hubo un error!', error);
  });

export default api;
