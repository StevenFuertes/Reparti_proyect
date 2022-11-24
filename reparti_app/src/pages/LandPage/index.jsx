import { Navigate, Link } from "react-router-dom";
import { useState, useContext } from "react";
import React from "react";
import "./index.css";
import index from "../../assets/index";

const LandPage = () => {
  return (
    <div className="bg__land">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand">
            <img
              src={index.logoNegro}
              alt="RepartiDev"
              width="200"
              height="80"
            />
          </Link>
          <Link
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link active" aria-current="page" href="#">
                Home
              </Link>
              <a className="nav-link" href="#como_funciona">
                Como Funciona
              </a>
              <a className="nav-link" href="#contacto">
                Servicios
              </a>
              <Link
                to="../Signup"
                type="button"
                className="btn btn-warning mx-1 my-1"
              >
                Registrarse
              </Link>
              <Link
                to="../login"
                type="button"
                className="btn btn-outline-warning mx-1 my-1"
              >
                Iniciar Sesión
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="container text-center shadow my-4 p-5 rounded-3">
          <div className="row ">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <h1 className=" text-warning fw-bold ff-gotham display-4">
                Pide o Reparte{" "}
                <small className="text-dark"> en tu Condominio desde</small>
              </h1>
              <img
                className="img-fluid mb-5"
                src={index.logoBlanco}
                alt="RepartiDev"
              />
              <h5 className="text-success text-center fs-4">
                Tus pedidos desde la comodidad de tu depa
              </h5>
              <h5 className="text-info text-center fs-4">
                Tus repartos sin salir de tu condominio
              </h5>
              <h5 className="text-dark text-center fs-4">
                RepartiDev te ayuda !!!
              </h5>
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <Link
                  to="../SignUp"
                  type="button"
                  className="btn btn-warning p-2 my-3 fs-5"
                >
                  <img
                    width="30"
                    className="img-fluid m-1"
                    src={index.usuario}
                    alt=""
                  />{" "}
                  Registrate
                </Link>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <img
                className="img-fluid rounded-3 shadow"
                src="https://blog.nexoinmobiliario.pe/wp-content/uploads/2021/02/vivir-condominio.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={index.condominio_car1}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={index.condominio_car2}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={index.condominio_car3}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="col text-center mt-5">
          <a name="como_funciona" id="como_funciona"></a>
          <h2 className="text-warning fw-bold ff-gotham display-4">
            Cómo funciona<small className="text-dark"> RepartiDev</small>
          </h2>
        </div>

        <div className="container text-center bg-lighth my-5">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <img
                className="img-fluid rounded-3 shadow"
                src="https://i0.wp.com/goula.lat/wp-content/uploads/2020/07/delivery-2.jpg?resize=980%2C654&ssl=1"
                alt=""
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <h4 className="text-success p-2">
                ¿Deseas realizar un pedido dev?
              </h4>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      👉🏼 Paso N°1
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>✅ Buscar un RepartiDev disponible.</strong> En la
                      Lista de RepartiDev podras encontrar a los RepartDev
                      disponibles según el horario que desees.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      👉🏼 Paso N° 2
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>✅ Dar click en el ícono de Whatsapp</strong>seras
                      redirigido a una comunicación con el RepartiDev elegido, a
                      fin poder tener una atención personalizada.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="true"
                      aria-controls="collapseThree"
                    >
                      👉🏼 Paso N° 3
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>
                        ✅ Disfrutar del pedido o servicio solicitado al
                        RepartiDev
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <img
                className="img-fluid rounded-3 shadow"
                src="https://pqs.pe/wp-content/uploads/2020/11/delivery-peru-800x531.jpg"
                alt=""
              />
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <h4 className="text-info p-2">
                ¿Deseas realizar un reparto dev?
              </h4>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseFour"
                    >
                      👉🏼 Paso N° 1
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>✅ Ser un RepartiDev</strong>, dar click en
                      Publicar RepartiDev en la barra de menú.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      👉🏼 Paso N° 2
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>✅ Ingresar tu informacion</strong>, llena el
                      formulario y estaras listo para que te contacten y
                      soliciten tus servicios.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      👉🏼 Paso #3
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>✅ Gana dinero siendo un RepartiDev</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border border-warning border-2 opacity-50 mt-5" />
          </div>
          <div className="card text-center shadow">
            <div className="card-header bg-dark">
              <Link name="contacto" id="contacto"></Link>
              <small className="text-warning fw-bold ff-gotham display-4">
                {" "}
                Contacto
              </small>
            </div>
            <div className="card-body">
              <h2 className="text-warning fw-bold ff-gotham display-7">
                RepartiDev<small className="text-muted"> funciona 24x7</small>
              </h2>
              <p className="card-text text-muted fs-5">
                Pero nuestro canal de atención personalizada por whatsapp es de
                Lunes a Viernes de 9am a 5pm
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=+51985269246&text=Hola, Nececito mas informacion!"
                className="btn btn-warning fs-5 p-3 rounded-5 text-success"
              >
                <img
                  width="25"
                  className="img-fluid m-1"
                  src={index.whatsapp1}
                  alt=""
                />{" "}
                Whatsapp
              </a>
            </div>
          </div>
        </div>

        <div className=" text-white bg-dark rounded-3">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 p-5">
              <img className="img-fluid" src={index.logoNegro} alt="" />
              <p className="m-3 fs-5">
                📣 Pensado para poder unir pedidos y RepartiDev desde la
                comodidad de tu Condominio.{" "}
                <strong className="text-warning">
                  📲 ¡Pides o repartes sin salir de tu condominio¡ 📦
                </strong>
              </p>
              <h4 className="p-3">RUC: 10467062320</h4>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 p-5">
              <h2 className="text-warning ff-gotham">Síguenos</h2>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-center align-items-center">
                  <img
                    width="25"
                    className="img-fluid m-2"
                    src={index.instagram}
                    alt=""
                  />
                  RepartiDev
                </li>
                <li className="list-group-item d-flex justify-content-center align-items-center">
                  <img
                    width="25"
                    className="img-fluid m-2"
                    src={index.facebook}
                    alt=""
                  />
                  RepartiDev.Oficial
                </li>
                <li className="list-group-item d-flex justify-content-center align-items-center">
                  <img
                    width="25"
                    className="img-fluid m-2"
                    src={index.youtube}
                    alt=""
                  />
                  RepartiDevOficial
                </li>
                <li className="list-group-item d-flex justify-content-center align-items-center">
                  <img
                    width="25"
                    className="img-fluid m-2"
                    src={index.tik_tok}
                    alt=""
                  />
                  RepartiDevOficial
                </li>
              </ul>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 p-5 bg-dark">
              <h2 class="text-warning text-center ff-gotham">
                Atención al Cliente
              </h2>
              <div className=" text-center">
                <div className="text-white my-2 bg-dark">
                  <h5>📠 Call Center: 01-6111-6060</h5>
                  Lunes a Domingo de 10:00 a.m. a 7:00 p.m.
                </div>
                <div className="text-white mt-5 bg-dark">
                  <h5>📩 consultas@repartidev.com</h5>
                  Escríbenos, estamos atentos a tus dudas o consultas
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandPage;
