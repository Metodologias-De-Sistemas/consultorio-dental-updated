import React from "react";
import moment from "moment";
import muelita from "../../../assets/muelita.svg";
import BannerContactInfo from "../BannerSection/BannerContactInfo";

export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <div className="modal-body">
        <div className="mb-4" style={{ borderBottom: "1px solid #dee2e6" }}>
          <section id="bannerSection">
            <div className="container-fluid">
              <div className="row">
                <div className="col-4 my-auto border-right border-primary">
                  <BannerContactInfo />
                </div>
                <div className="col-4 my-auto">
                  <p>Dra. Elizabeth Sonrisa</p>
                  <p>Matricula Nacional N° 548324</p>
                </div>
                <div className="col-4">
                  <img
                    src={muelita}
                    alt="Imagen Representativa Sonrisa Feliz "
                    className="sonrisaBannerImage pb-2"
                    width="%100"
                    height="110px"
                    style={{ marginLeft: "100px" }}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <h5>
          <b>DETALLES DEL PACIENTE</b>
        </h5>
        <ul className="list-group mb-3">
          <li className="list-group-item">
            <b>Nombre:</b> {this.props.cita.nombreCompleto}
          </li>
          <li className="list-group-item">
            <b>DNI:</b> {this.props.cita.DNI}
          </li>
          <li className="list-group-item">
            <b>Edad:</b> {this.props.cita.edad}
          </li>
          <li className="list-group-item">
            <b>Email:</b> {this.props.cita.email}
          </li>
          <li className="list-group-item">
            <b>Obra Social:</b> {this.props.cita.obraSocial}
          </li>
        </ul>
        <br />
        <hr className="w-100 border border-primary" />
        <br />
        <h5 className="text-center">
          <b>HISTORIA CLINICA</b>
        </h5>
        <br />
        {this.props.cita.historiaClinica.map((item, index) => (
          <>
            <div className="card mb-2 border border-dark" key={index}>
              <div className="card-body">
                <h5 className="card-title">CITA N° {index}</h5>
                <hr className="w-100 border border-dark" />

                <div className="row">
                  <div className="col-6">
                    <p style={{ fontWeight: "400" }}>
                      <b>FECHA: </b>
                      {moment(item.fecha).format("DD-MM-YYYY")}
                    </p>
                  </div>
                  <div className="col-6">
                    <p style={{ fontWeight: "400" }}>
                      <b>HORA: </b> {item.horario} hs
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <p style={{ fontWeight: "400" }}>
                      <b>SINTOMAS: </b> {item.sintomas}
                    </p>
                  </div>
                  <div className="col-6">
                    <p style={{ fontWeight: "400" }}>
                      <b>PRESTACION: </b> {item.prestacion}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="w-100" style={{ border: "1px solid #dee2e6" }} />
          </>
        ))}
      </div>
    );
  }
}
