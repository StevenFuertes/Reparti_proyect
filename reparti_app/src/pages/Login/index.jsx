import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./index.css";
import index from "../../assets/index"

const Login = () => {
  const { login, isAuth } = useContext(AuthContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
 
    if (!user.email || !user.password) {
      Swal.fire({
        title: "Error",
        text: "Completa el correo y password",
        icon: "error",
      });
      return;
    }

    const inicio = login(user.email, user.password);

    if (!inicio) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Usuario o password erroneos",
      });
    }
  };

  if (isAuth()) {
    return <Navigate to="/home" />;
  }

  return (

    <div className="container mt-1 bg__login">
      <div className="row text-bg-light rounded-2">
        <div className="col p-5">
          <Link to="../">
            <img
              src={index.logoBlanco}
              className="img-fluid"
              width="150"
              alt="..."
            />
          </Link>
          <h1 className="fw-bold text-center my-5 display-4">
            Bienvenido de <span className="text-warning">Vuelta</span>
          </h1>
          <div className="mb-4">
            <label for="exampleInputEmail1" className="form-label fw-bold ">
              <i className="fa-solid fa-envelope"></i> Email
            </label>
            <input
              className="form-control p-3"
              type="email"
              placeholder="Ingresa tu Email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-2">
            <label for="exampleInputPassword1" className="form-label fw-bold">
              Contraseña
            </label>
            <input
              className="form-control p-3"
              type="password"
              placeholder="Ingresa tu Contraseña"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-5">
            <Link >¿Olvidaste tu contraseña?</Link>
          </div>
          <button className="btn btn-primary fw-bold p-3 col-12" onClick={handleLogin}>
            Ingresar
          </button>
          <Link
            className="btn btn-warning fw-bold p-3 col-12 mt-3"
            to="/signup"
          >
            Registro
          </Link>
        </div>
        <div className="col img-1 d-none d-lg-block rounded-end"></div>
      </div>
    </div>

  );
};

export default Login;
