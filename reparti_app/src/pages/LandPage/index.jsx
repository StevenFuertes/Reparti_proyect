import { Navigate, Link } from "react-router-dom";
import { useState, useContext } from "react";
import React from "react";
import "./index.css";

const LandPage = () => {

    const cargarImagen = require.context("../../assets", true);

    return (
        <div className= "bg__land">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" >
                        <img src="../../assets/LogoMakr-8kjolj(fondo negro).png" alt="RepartiDev" width="200" height="80" />
                    </Link>
                    <Link className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                            <Link className="nav-link" href="#como_funciona">Como Funciona</Link>
                            <Link className="nav-link" href="#contacto">Servicios</Link>
                            <Link to="../Signup" type="button" className="btn btn-warning mx-1 my-1">Registrarse</Link>
                            <Link to="../login" type="button" className="btn btn-outline-warning mx-1 my-1">Iniciar Sesión</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <main>
                <div className="container text-center shadow my-4 p-5 rounded-3">
                    <div className="row ">

                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <h1 className=" text-warning fw-bold ff-gotham display-4">Pide o Reparte <small className="text-dark"> en tu Condominio desde</small></h1>
                            <img className="img-fluid mb-5" src="../../assets/LogoMakr-8kjolj.png" alt="RepartiDev" />
                            <h5 className="text-success text-center fs-4">Tus pedidos desde la comodidad de tu depa</h5>
                            <h5 className="text-info text-center fs-4">Tus repartos sin salir de tu condominio</h5>
                            <h5 className="text-dark text-center fs-4">RepartiDev te ayuda !!!</h5>
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <Link to="../SignUp" type="button" className="btn btn-warning p-2 my-3 fs-5"><img width="35" className="img-fluid m-1" src="../../assets/usuario.png" alt="" />  Registrate</Link>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <img className="img-fluid rounded-3 shadow" src="https://blog.nexoinmobiliario.pe/wp-content/uploads/2021/02/vivir-condominio.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://lh3.googleusercontent.com/p/AF1QipNFhLf2YtbQQYbI5imMyBBSXTlsYuMlsKQqtYOa=w1080-h608-p-no-v0" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://peru21.pe/resizer/FN4LJFbiPlqrcOkIBPMIQWLNWms=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/WAPUSGK3KZDSBKSFK7CIEGOELI.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://media.istockphoto.com/photos/lima-peru-modern-buildings-on-street-in-miraflores-district-picture-id1090476916" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="col text-center mt-5">
                    <a name="como_funciona" id="como_funciona"></a>
                    <h2 className="text-warning fw-bold ff-gotham display-4">Cómo funciona<small className="text-dark"> RepartiDev</small></h2>
                </div>

                <div className="container text-center bg-lighth my-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <img className="img-fluid rounded-3 shadow" src="https://i0.wp.com/goula.lat/wp-content/uploads/2020/07/delivery-2.jpg?resize=980%2C654&ssl=1" alt="" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <h4 className="text-success p-2">¿Deseas realizar un pedido dev?</h4>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Paso #1
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Paso #2
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Paso #3
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row my-5">

                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <img className="img-fluid rounded-3 shadow" src="https://pqs.pe/wp-content/uploads/2020/11/delivery-peru-800x531.jpg" alt="" />
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <h4 className="text-info p-2">¿Deseas realizar un reparto dev?</h4>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Paso #1
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Paso #2
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Paso #3
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
                            <small className="text-warning fw-bold ff-gotham display-4"> Contacto</small>
                        </div>
                        <div className="card-body">
                            <h2 className="text-warning fw-bold ff-gotham display-7">RepartiDev<small className="text-muted"> funciona 24x7</small></h2>
                            <p className="card-text text-muted fs-5">Pero nuestra canal de atención personalizada por whatsapp es de Lunes a Viernes de 9am a 5pm</p>
                            <a href="https://api.whatsapp.com/send?phone=+51985269246&text=Hola, Nececito mas informacion!" className="btn btn-warning fs-5 p-3 rounded-5 text-success"><img width="25" className="img-fluid m-1" src="../../assets/whatsapp (1).png" alt="" />   Whatsapp</a>
                        </div>

                    </div>
                </div>


                <div className="container text-white bg-dark rounded-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-3">
                            <img className="img-fluid" src="../../assets/LogoMakr-8kjolj (fondo negro).png" alt="" />
                            <p className="p-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, aspernatur quas modi veniam animi architecto sed voluptas soluta, repellat odio eveniet minus at. Nemo omnis fugit nihil veniam explicabo tempore!</p>
                            <h4 className="p-3">RUC: 10467062320</h4>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-3">
                            <h2 className="text-warning ff-gotham">Síguenos</h2>
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-center align-items-center">
                                    <img width="25" className="img-fluid m-2" src="../../assets/instagram.png" alt="" />
                                    RepartiDev
                                </li>
                                <li className="list-group-item d-flex justify-content-center align-items-center">
                                    <img width="25" className="img-fluid m-2" src="../../assets/facebook.png" alt="" />
                                    RepartiDev.Oficial
                                </li>
                                <li className="list-group-item d-flex justify-content-center align-items-center">
                                    <img width="25" className="img-fluid m-2" src="../../assets/youtube.png" alt="" />
                                    RepartiDevOficial
                                </li>
                                <li className="list-group-item d-flex justify-content-center align-items-center">
                                    <img width="25" className="img-fluid m-2" src="../../assets/tik-tok.png" alt="" />
                                    RepartiDevOficial
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default LandPage;