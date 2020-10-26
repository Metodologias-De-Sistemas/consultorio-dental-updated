import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import isEmpty from "validator/lib/isEmpty";
import equals from "validator/lib/equals";
import { showErrorMsg, showSuccessMsg } from "../../../helpers/message";
import { showLoading } from "../../../helpers/loading";
import { cita } from "../../../api/auth";
// import "./Signup.css";
import { isAuthenticated } from "../../../helpers/auth";

const Cita = () => {
  // let history = useHistory();

  // useEffect(() => {
  //   if (isAuthenticated() && isAuthenticated().role === 1) {
  //     history.push("/admin/dashboard");
  //   } else if (isAuthenticated() && isAuthenticated().role === 0) {
  //     history.push("/user/cita");
  //   }
  // }, [history]);

  // creamos el estado del componente
  // const [formData, setFormData] = useState({
  //   nombreCompleto: "Diego Montaña",
  //   fechaNacimiento: null,
  //   DNI: "41499363",
  //   numDeTelefono: "5493624324413",
  //   email: "diego@gmail.com",
  //   obraSocial: "OSDE",
  // });

  // // destructuramos el estado
  // const {
  //   nombreCompleto,
  //   fechaNacimiento,
  //   DNI,
  //   password,
  //   numDeTelefono,
  //   email,
  //   obraSocial,
  //   password2,
  //   successMsg,
  //   errorMsg,
  //   loading,
  // } = formData;

  const [formData, setFormData] = useState({
    dpfecha: null,
    observacion: "me duele la muela",
    horario: "",
    successMsg: false,
    errorMsg: false,
    loading: false,
  });

  // destructuramos el estado
  const {
    dpfecha,
    observacion,
    horario,
    successMsg,
    errorMsg,
    loading,
  } = formData;

  //momentjs
  let fecha = Moment(dpfecha).format("yyyy-MM-DD");

  // Event Handlers
  const handleChange = (evt) => {
    //console.log(evt);
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      successMsg: "",
      errorMsg: "",
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    //Client side validation
    if (
      equals(fecha, "Invalid date") ||
      isEmpty(observacion) ||
      isEmpty(horario)
    ) {
      setFormData({
        ...formData,
        errorMsg: "Todos los campos son requeridos.",
      });
    } else {
      // preparacion de estados a mandar al backend
      const { fecha, observacion, horario } = formData;

      // datos a manadar al backend
      const data = {
        fecha,
        observacion,
        horario,
      };

      setFormData({
        ...formData,
        loading: true,
      });

      // http method request from api/auth.js
      cita(data)
        .then((response) => {
          console.log("Axios signup success: ", response);
          setFormData({
            fecha: null,
            observacion: "",
            horario: "",
            loading: false,
            successMsg: response.data.successMessage, //successMessage es un mensaje que viene desde el backend
          });

          setTimeout(() => {
            setFormData({
              successMsg: null, //successMessage es un mensaje que viene desde el backend
            });
          }, 4000);
        })
        .catch((err) => {
          console.log("Axios signup error: ", err);
          setFormData({
            ...formData,
            loading: false,
            errorMsg: err.response.data.errorMessage,
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
          value={""}
          className="form-control"
          placeholder="Nombre Completo"
          type="text"
          // onChange={handleChange}
          disabled="true"
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
          value={""}
          className="form-control"
          placeholder="Email"
          type="email"
          // onChange={handleChange}
          disabled="true"
        />
      </div>

      {/* fecha de nacimiento*/}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i class="fas fa-birthday-cake fa-lg "></i>
          </span>
        </div>
        <input
          name="Fecha de Nacimiento"
          value={null}
          className="form-control"
          placeholder="Fecha de Nacimiento"
          type="text"
          // onChange={handleChange}
          disabled="true"
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
          value={""}
          className="form-control"
          placeholder="D.N.I"
          type="text"
          // onChange={handleChange}
          maxLength="8"
          disabled="true"
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
          value={""}
          className="form-control"
          placeholder="Numero de Telefono"
          type="text"
          // onChange={handleChange}
          disabled="true"
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
          value={""}
          className="form-control"
          placeholder="Obra Social"
          type="text"
          // onChange={handleChange}
          readonly
          disabled="true"
        />
      </div>

      <br />
      <h3 className="text-center">Completar los Datos.</h3>

      {/* horario*/}
      <div className="form-group input-group">
        <div className="input-group-prepend ">
          <span className="input-group-text">
            <i class="fas fa-clock"></i>
          </span>
        </div>
        <select
          class="custom-select "
          id="inlineFormCustomSelect"
          value={horario}
          onChange={handleChange}
          name="horario"
        >
          <option value=""> Elija Horario de la cita</option>
          <option value="8">MAÑANA | 08:00hs - 09:00hs </option>
          <option value="9">MAÑANA | 09:00hs - 10:00hs </option>
          <option value="10">MAÑANA | 10:00hs - 11:00hs </option>
          <option value="11">MAÑANA | 11:00hs - 12:00hs </option>
          <option value="16">TARDE᲼᲼᲼ | 16:00hs - 17:00hs </option>
          <option value="17">TARDE᲼᲼᲼ | 17:00hs - 18:00hs </option>
          <option value="18">TARDE᲼᲼᲼ | 18:00hs - 19:00hs </option>
        </select>
      </div>

      {/* Date Picker fecha cita*/}
      <div className="form-group input-group">
        <div className="input-group-prepend ">
          <span className="input-group-text">
            <i class="fas fa-calendar-alt"></i>
          </span>
        </div>
        <DatePicker
          placeholderText="Elija Fecha de la cita."
          selected={dpfecha}
          onChange={(date) =>
            setFormData({
              ...formData,
              dpfecha: date,
            })
          }
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
        />
      </div>

      {/* sintomas */}
      <div class="form-group input-group">
        <div className="input-group-prepend ">
          <span className="input-group-text">
            <i class="fas fa-pencil-alt"></i>
          </span>
        </div>
        <textarea
          class="form-control"
          style={{ resize: "none" }}
          rows="4"
          placeholder="Describa sus sintomas."
          value={observacion}
          name="observacion"
          onChange={handleChange}
        ></textarea>
      </div>

      {/* signup button */}
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block">
          Pedir Cita
        </button>
      </div>

      <p className="text-center text-dark bg-warning rounded">
        La doctora evaluara su pedido de cita, recibira un email si su pedido
        fue aceptado o rechazado. <br />
        Muchas gracias!
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
          {JSON.stringify(formData.dpfecha)}
          {<br />}
          {<h1>{horario}</h1>}
          {loading && showLoading()}
        </div>
      </div>
    </div>
  );
};
export default Cita;
