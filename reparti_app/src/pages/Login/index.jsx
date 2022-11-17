import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./index.css";

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
    //* Si ambos campos estan llenos se guarda en localStorage
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
    return <Navigate to="/" />;
  }

  return (
    <div className="container mt-5 bg__login">
      <div className="row text-bg-light rounded-2">
        <div className="col p-5">
          <a href="../landing_page/index.html">
            <img
              src="../images/LogoMakr-8kjolj.png"
              className="img-fluid"
              width="150"
              alt="..."
            />
          </a>

          <h1 className="fw-bold text-center my-5 display-4">
            Bienvenido de <span className="text-warning">Vuelta</span>
          </h1>
          <form className="px-4">
            <div className="mb-4">
              <label for="exampleInputEmail1" className="form-label fw-bold ">
                <i className="fa-solid fa-envelope"></i> Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control p-3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Ingresa tu Email"
                value={user.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-2">
              <label for="exampleInputPassword1" className="form-label fw-bold">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                className="form-control p-3"
                id="exampleInputPassword1"
                placeholder="Ingresa tu Contraseña"
                value={user.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-5">
              <a href="">¿Olvidaste tu contraseña?</a>
            </div>
            <button
              onClick={handleLogin}
              type="submit"
              className="btn btn-primary fw-bold p-3 col-12"
            >
              Iniciar Sesión
            </button>
                <Link className="btn btn-warning fw-bold p-3 col-12 mt-3" to="/signup">Crear una Cuenta</Link> 

          </form>
        </div>
        <div className="col img-1 d-none d-lg-block rounded-end"></div>
      </div>
    </div>
  );
};

export default Login;
