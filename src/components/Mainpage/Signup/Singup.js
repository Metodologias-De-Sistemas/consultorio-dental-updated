import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import { showErrorMsg, showSuccessMsg } from '../../../helpers/message';
import { showLoading } from '../../../helpers/loading';
import { registrarUsuario } from '../../../api/auth';
import './Signup.css';
import { isAuthenticated } from '../../../helpers/auth';

const Signup = () => {
  let history = useHistory();

  useEffect(() => {
    if (isAuthenticated() && isAuthenticated().rol === 1) {
      history.push('/admin/dashboard');
    } else if (isAuthenticated() && isAuthenticated().rol === 0) {
      history.push('/user/cita');
    }
  }, [history]);

  // creamos el estado del componente
  const [formData, setFormData] = useState({
    nombreCompleto: 'Diego Montaña',
    fechaNacimiento: null,
    DNI: '41499363',
    password: 'abc123',
    numDeTelefono: '5493624324413',
    email: 'diego@gmail.com',
    obraSocial: 'OSDE',
    password2: 'abc123',
    successMsg: false,
    errorMsg: false,
    loading: false,
  });

  // destructuramos el estado
  const {
    nombreCompleto,
    fechaNacimiento,
    DNI,
    password,
    numDeTelefono,
    email,
    obraSocial,
    password2,
    successMsg,
    errorMsg,
    loading,
  } = formData;

  //momentjs
  let stringFechaNacimiento = Moment(fechaNacimiento).format('yyyy-MM-DD');

  // Event Handlers
  const handleChange = (evt) => {
    //console.log(evt);
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      successMsg: '',
      errorMsg: '',
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    //Client side validation
    if (
      isEmpty(nombreCompleto) ||
      isEmpty(email) ||
      isEmpty(password) ||
      isEmpty(password2) ||
      equals(stringFechaNacimiento, 'Invalid date') ||
      isEmpty(DNI) ||
      isEmpty(numDeTelefono) ||
      isEmpty(obraSocial)
    ) {
      setFormData({
        ...formData,
        errorMsg: 'Todos los campos son requeridos.',
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: 'Email invalido.',
      });
    } else if (!equals(password, password2)) {
      setFormData({
        ...formData,
        errorMsg: 'Las contraseñas no coinciden.',
      });
    } else {
      // preparacion de estados a mandar al backend
      const {
        nombreCompleto,
        DNI,
        password,
        numDeTelefono,
        email,
        obraSocial,
      } = formData;

      // datos a manadar al backend
      const data = {
        nombreCompleto,
        fechaNacimiento: stringFechaNacimiento,
        DNI,
        password,
        numDeTelefono,
        email,
        obraSocial,
      };

      setFormData({
        ...formData,
        loading: true,
      });

      // http method request from api/auth.js
      registrarUsuario(data)
        .then((response) => {
          console.log('Axios signup success: ', response);
          setFormData({
            nombreCompleto: '',
            fechaNacimiento: '',
            DNI: '',
            password: '',
            numDeTelefono: '',
            email: '',
            obraSocial: '',
            password2: '',
            loading: false,
            successMsg: response.successMessage, //successMessage es un mensaje que viene desde el backend
          });

          setTimeout(() => {
            setFormData({
              successMsg: null, //successMessage es un mensaje que viene desde el backend
            });
          }, 4000);
        })
        .catch((err) => {
          console.log('Axios signup error: ', err);
          setFormData({
            ...formData,
            loading: false,
            errorMsg: err.msg,
          });
        });
    }
  };

  // VIEWS
  const showSignupForm = () => (
    <form className="signup-form" onSubmit={handleSubmit} noValidate>
      {/* Nombre Completo */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-user"></i>
          </span>
        </div>
        <input
          name="nombreCompleto"
          value={nombreCompleto}
          className="form-control"
          placeholder="Nombre Completo"
          type="text"
          onChange={handleChange}
        />
      </div>
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
      {/* password2 */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-lock"></i>
          </span>
        </div>
        <input
          name="password2"
          value={password2}
          className="form-control"
          placeholder="Confirmar Contraseña"
          type="password"
          onChange={handleChange}
        />
      </div>
      {/* Date Picker fecha de nac */}
      <div className="form-group input-group">
        <div className="input-group-prepend ">
          <span className="input-group-text">
            <i class="fas fa-birthday-cake fa-lg "></i>
          </span>
        </div>
        <DatePicker
          placeholderText="Fecha de Nacimiento"
          selected={fechaNacimiento}
          onChange={(date) =>
            setFormData({
              ...formData,
              fechaNacimiento: date,
            })
          }
          dateFormat="dd/MM/yyyy"
          maxDate={new Date()}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />
      </div>

      {/* D.N.I*/}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i class="fas fa-id-card"></i>
          </span>
        </div>
        <input
          name="DNI"
          value={DNI}
          className="form-control"
          placeholder="D.N.I"
          type="text"
          onChange={handleChange}
          maxLength="8"
        />
      </div>

      {/* numero de telefono */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i class="fas fa-phone-alt"></i>
          </span>
        </div>
        <input
          name="numDeTelefono"
          value={numDeTelefono}
          className="form-control"
          placeholder="Numero de Telefono"
          type="text"
          onChange={handleChange}
        />
      </div>

      {/* Obra Social */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i class="fas fa-star-of-life"></i>
          </span>
        </div>
        <input
          name="obraSocial"
          value={obraSocial}
          className="form-control"
          placeholder="Obra Social"
          type="text"
          onChange={handleChange}
        />
      </div>

      {/* signup button */}
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block">
          Registrarse
        </button>
      </div>
      {/* already have account */}
      <p className="text-center text-black">
        Ya tenes una cuenta?{' '}
        <Link to="/signin" className="bg-dark p-1 rounded">
          Iniciar sesión
        </Link>
      </p>
    </form>
  );

  // RENDER
  return (
    <div className="signup-container container-fluid">
      <div className="row px-3 vh-100">
        <div className="col-md-5 mx-auto align-self-center">
          {successMsg && showSuccessMsg(successMsg)}
          {errorMsg && showErrorMsg(errorMsg)}
          {showSignupForm()}
          {/* {JSON.stringify(formData)} */}
          {/* {JSON.stringify(formData.fechaNacimiento)}
          <br />
          {stringFechaNacimiento} */}
          {loading && showLoading()}
        </div>
      </div>
    </div>
  );
};

export default Signup;
