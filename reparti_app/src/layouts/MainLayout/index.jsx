import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Outlet, Link } from "react-router-dom";

const MainLayout = () => {
  const { isAuth, user, logout } = useContext(AuthContext);

  if (!isAuth()) return <Navigate to="/login" />;

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link className="navbar-brand"><img src="../images/LogoMakr-8kjolj (fondo negro).png" alt="RepartiDev" width="200" height="80" /></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">

              <li class="nav-item dropdown">
                <Link className="nav-link dropdown-toggle fs-5" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                  RepartiDev
                </Link>
                <ul class="dropdown-menu">
                  <li><a href="./delivery_list.html" class="dropdown-item" >Buscar RepartiDev</a></li>
                  <li><a href="./order_list.html" class="dropdown-item" >Publicar RepartiDev</a></li>
                  <li className="nav-item">
                    <a href="" className="nav-link active text-danger" onClick={logout} > Logout </a>
                  </li>
                </ul>
              </li>
              <button type="button" class="btn btn-warning mx-1 my-1">Home</button>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default MainLayout;