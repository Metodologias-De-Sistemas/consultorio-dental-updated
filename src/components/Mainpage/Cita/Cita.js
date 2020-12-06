import React, { useState } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import isEmpty from "validator/lib/isEmpty";
import equals from "validator/lib/equals";
import { showErrorMsg, showSuccessMsg } from "../../../helpers/message";
import { showLoading } from "../../../helpers/loading";
import { crearTurno } from "../../../api/auth";
import { isAuthenticated } from "../../../helpers/auth";
import { getLocalStorage } from "../../../helpers/localStorage";

// import "./Signup.css";

const Cita = () => {
  const [formData, setFormData] = useState({
    dpfecha: null,
    observacion: "",
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

    const { fecha, observacion, horario } = formData;

    const strDate = moment(fecha).format("YYYY-MM-DD");
    //Client side validation
    if (
      equals(strDate, "Invalid date") ||
      isEmpty(observacion) ||
      isEmpty(horario)
    ) {
      setFormData({
        ...formData,
        errorMsg: "Todos los campos son requeridos.",
      });
    } else {
      // preparacion de estados a mandar al backend

      // datos a manadar al backend
      const data = {
        fecha: strDate,
        observacion,
        horario,
      };

      setFormData({
        ...formData,
        loading: true,
      });

      // http method request from api/auth.js
      crearTurno(data)
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

  //console.log(getLocalStorage("user"));

  const [imagen, setImagen] = useState("");
  const [imagenBase, setImagenBase] = useState("");

  const fileSelectedHandler = async (e) => {
    setImagen(e.target.files[0]);
    console.log(e.target.files[0]);
    //console.log(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    setImagenBase(base64);
  };

  const convertBase64 = (file) => {
    if (!file) {
      return null;
    } else {
      return new Promise((resolve, reject) => {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
          resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    }
  };

  /* 
    Lo que devuelve el isAuthenticated()
    DNI: "37070698"
    edad: 28
    email: "sara.elizabeth.ford23@gmail.com"
    fechaNacimiento: "23-11-1992"
    nombreCompleto: "Sara Elizabeth Ford"
    obraSocial: "INSSSEP"
    rol: 0
  */
  let nombreImagen = null;

  if (imagen === "") {
    nombreImagen = "Elegir Imagen";
  } else if (imagen === undefined) {
    nombreImagen = "Elegir Imagen";
  } else if (imagen === null) {
    nombreImagen = "Elegir Imagen";
  } else {
    nombreImagen = imagen.name;
  }

  // VIEWS
  const showSignupForm = () => (
    <>
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
            value={isAuthenticated().nombreCompleto}
            className="form-control"
            placeholder="Nombre Completo"
            type="text"
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
            value={isAuthenticated().email}
            className="form-control"
            placeholder="Email"
            type="email"
            disabled="true"
          />
        </div>

        {/* fecha de nacimiento*/}
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-birthday-cake fa-lg "></i>
            </span>
          </div>
          <input
            name="Fecha de Nacimiento"
            value={isAuthenticated().fechaNacimiento}
            className="form-control"
            placeholder="Fecha de Nacimiento"
            type="text"
            disabled="true"
          />
        </div>

        {/* D.N.I*/}
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-id-card"></i>
            </span>
          </div>
          <input
            name="DNI"
            value={isAuthenticated().DNI}
            className="form-control"
            placeholder="D.N.I"
            type="text"
            maxLength="8"
            disabled="true"
          />
        </div>

        {/* numero de telefono */}
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-phone-alt"></i>
            </span>
          </div>
          <input
            name="numDeTelefono"
            value={""}
            className="form-control"
            placeholder="Numero de Telefono"
            type="text"
            disabled="true"
          />
        </div>

        {/* Obra Social */}
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-star-of-life"></i>
            </span>
          </div>
          <input
            name="obraSocial"
            value={isAuthenticated().obraSocial}
            className="form-control"
            placeholder="Obra Social"
            type="text"
            readonly
            disabled="true"
          />
        </div>

        <hr className="w-100 border border-primary" />

        <h3 className="text-center">COMPLETAR LOS DATOS</h3>
        <hr className="w-50 border border-primary" />

        <br />
        {/* horario*/}
        <div className="form-group input-group">
          <div className="input-group-prepend ">
            <span className="input-group-text">
              <i className="fas fa-clock"></i>
            </span>
          </div>
          <select
            className="custom-select "
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
              <i className="fas fa-calendar-alt"></i>
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
        <div className="form-group input-group">
          <div className="input-group-prepend ">
            <span className="input-group-text">
              <i className="fas fa-pencil-alt"></i>
            </span>
          </div>
          <textarea
            className="form-control"
            style={{ resize: "none" }}
            rows="4"
            placeholder="Describa sus sintomas."
            value={observacion}
            name="observacion"
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Subit imagen */}
        <div className="custom-file mb-3">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={fileSelectedHandler}
          />
          <label className="custom-file-label" for="customFile">
            {nombreImagen}
          </label>
        </div>

        <div>
          <img src={imagenBase} height="100px"></img>
        </div>

        {/* signup button */}
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">
            Pedir Cita
          </button>
        </div>
        <p
          className="text-center text-white rounded py-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
          <i>
            "La doctora evaluara su pedido de cita, recibira un email si su
            pedido fue aceptado o rechazado. <br />
            Muchas gracias!"
          </i>
        </p>
      </form>
    </>
  );

  // RENDER
  return (
    <div className="signup-container container-fluid">
      <div className="row px-3 py-3">
        <div className="col-md-5 mx-auto align-self-center">
          {successMsg && showSuccessMsg(successMsg)}
          {errorMsg && showErrorMsg(errorMsg)}
          {showSignupForm()}
          {loading && showLoading()}
        </div>
      </div>
    </div>
  );
};
export default Cita;
