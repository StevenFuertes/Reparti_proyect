import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { TaskForm, TaskCard } from "../../components";
import { get, post, update } from "../../services";
import { TaskModel } from "../../models/TaskModel";
import { AuthContext } from "../../context/AuthContext";
import index from "../../assets/index";

function Contact() {
    const { user, logout } = useContext(AuthContext);
    const [taskList, setTaskList] = useState([]);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 py-5 border-none rounded-start bg-light text-dark">
                    <div class="d-grid justify-content-center py-5">
                        <img
                            width="80"
                            class="img-fluid rounded mx-auto d-block"
                            src={index.usuario}
                            alt=""
                        />
                        <h2 class=" text-warning fw-bold ff-gotham display-7">
                            {user.name}
                            <small class="text-dark"> {user.lastName}</small>
                        </h2>
                    </div>

                    <div className="list-group">
                        <Link
                            to="/perfil"
                            className="list-group-item list-group-item-action active fw-bold text-center rounded-2 border border-none bg-success shadow"
                            aria-current="true"
                        >
                            Perfil
                        </Link>
                        <Link className="list-group-item list-group-item-action fw-bold mt-3 mb-5 rounded-2 shadow">
                            Contáctanos
                        </Link>
                    </div>

                    <div className="d-grid gap-2">
                        <button
                            className="btn btn-danger mt-5 fw-bold"
                            type="button"
                            onClick={logout}
                        >
                            Cerrar Sesión
                        </button>
                    </div>
                </div>

                <div class="col-sm-12 col-md-9 col-lg-9 col-xl-9 p-5 rounded-3 bg-dark">
                    <h2 class=" text-warning text-center fw-bold ff-gotham display-4 mb-5">
                        Te <small class="text-muted"> Escuchamos</small>
                    </h2>
                    <div class="container text-center">
                        <div class="row">
                            <div class="col align-self-center border border-warning p-5 rounded-2 shadow mx-2 bg-light">
                                <h3>Conoce a Alvaro</h3>
                                Nuestro asistente virtual, el cual estará disponible las 24
                                horas del día, para poder ayudarte.
                            </div>
                            <div class="col align-self-center border border-warning p-5 rounded-2 shadow mx-2 bg-light">
                                <h4>Correo: consultas@repartidev.com</h4>
                                Escríbenos, estamos atentos a tus dudas o consultas para poder
                                resolverlas.
                            </div>
                        </div>
                    </div>
                    <div class="container text-center mt-5">
                        <div class="row">
                            <div class="col align-self-center border border-warning p-4 rounded-2 shadow mx-2 bg-light">
                                <h3>Call Center: 01-6111-6060</h3>
                                Lunes a Domingo de 10:00 a.m. a 7:00 p.m.
                            </div>
                            <div class="col align-self-center border border-success p-4 rounded-2 shadow mx-2 bg-light">
                                <h3>WhatsApp: 970 311 911</h3>
                                Conversemos, estamos en línea para ayudarte.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;
