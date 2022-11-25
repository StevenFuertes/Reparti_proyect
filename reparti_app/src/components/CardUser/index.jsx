import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import index from "../../assets/index";

function CardUser() {

  const { user, logout } = useContext(AuthContext);

  return (
    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 py-5 border-none rounded-start bg-light text-dark">
      <div className="d-grid justify-content-center py-5">
        <img
          width="80"
          className="img-fluid rounded mx-auto d-block"
          src={index.usuario}
          alt=""
        />
        <h2 className=" text-warning fw-bold ff-gotham display-7">
          {user.name}
          <small className="text-dark"> {user.lastName}</small>
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
        <Link
          to="/Contact"
          className="list-group-item list-group-item-action fw-bold mt-3 mb-5 rounded-2 shadow"
        >
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
  );
}

export default CardUser;
