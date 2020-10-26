import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg } from '../../../helpers/message';
import { showLoading } from '../../../helpers/loading';
import { logearUsuario } from '../../../api/auth';
import { isAuthenticated, setAuthentication } from '../../../helpers/auth';

const Signin = () => {
  let history = useHistory();

  // creamos el estado del componente
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    errorMsg: false,
    loading: false,
  });

  // destructuramos el estado
  const { email, password, errorMsg, loading } = formData;

  // Event Handlers
  const handleChange = (evt) => {
    //console.log(evt);
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      errorMsg: '',
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    //client side validation
    if (isEmpty(email) || isEmpty(password)) {
      setFormData({
        ...formData,
        errorMsg: 'Todos los campos son requeridos.',
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: 'Email invalido.',
      });
    } else {
      const { email, password } = formData;
      const data = { email, password };

      setFormData({
        ...formData,
        loading: true,
      });

      // http method request from api/auth.js
      logearUsuario(data)
        .then((response) => {
          setAuthentication(response.token, {
            ...response.paciente,
            email: response.email,
          });
          // si esta autenticado y es admin, se redirige al admin dashboard
          if (isAuthenticated() && isAuthenticated().rol === 1) {
            console.log('Redirecting to admin dashboard');
            history.push('/admin/dashboard');
          } else {
            console.log('Redirecting to user dashboard/home/askDate'); // redirigimos al pedido de cita
            history.push('/user/cita');
          }
        })
        .catch((err) => {
          console.log('signin api function error', err);

          setFormData({
            ...formData,
            loading: false,
            errorMsg: err.msg,
          });
        });
    }
  };

  // metodo para mostrar el GUI del formulario
  const showSigninForm = () => (
    <form className="signup-form" onSubmit={handleSubmit} noValidate>
      {/* email */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-envelope"></i>
          </span>
        </div>
        <input
          name="email"
          value={email}
          className="form-control"
          placeholder="Email"
          type="email"
          onChange={handleChange}
        />
      </div>
      {/* password */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-lock"></i>
          </span>
        </div>
        <input
          name="password"
          value={password}
          className="form-control"
          placeholder="Crear contraseña"
          type="password"
          onChange={handleChange}
        />
      </div>
      {/* signin button */}
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block">
          Iniciar sesión
        </button>
      </div>
      {/* Dont have an account */}
      <p className="text-center text-black">
        No tiene una cuenta? <Link to="/signup">Registrarse</Link>
      </p>
    </form>
  );

  // RENDER
  return (
    <div className="signup-container container-fluid">
      <div className="row px-3 vh-100">
        <div className="col-md-5 mx-auto align-self-center">
          {errorMsg && showErrorMsg(errorMsg)}
          {showSigninForm()}
          {/* {JSON.stringify(formData)} */}
          {loading && showLoading()}
        </div>
      </div>
    </div>
  );
};

export default Signin;
