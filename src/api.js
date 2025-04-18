import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

import api from './api';

// Para obtener productos
api.get('/productos')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Hubo un error!', error);
  });

// Para registrar un usuario
api.post('/register', {
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
