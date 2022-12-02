import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Outlet, Link } from "react-router-dom";
import index from "../../assets/index"
import "./index.css";

const MainLayout = () => {
  const { isAuth, logout, user } = useContext(AuthContext);

  if (!isAuth()) return <Navigate to="/login" />;

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link className="navbar-brand"><img src={index.logoNegro} alt="RepartiDev" width="200" height="80" /></Link>
                   
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="condominio" aria-current="page" href="#" >Condominio : "{user.condominio}"</div>
            
            <div class="navbar-nav ms-auto">
              <li class="nav-item dropdown">
                <Link className="nav-link dropdown-toggle fs-5" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                  RepartiDev
                </Link>
                <ul class="dropdown-menu">
                  <li><Link to="/Search" class="dropdown-item" >Buscar RepartiDev</Link></li>
                  <li><Link to="/Post" class="dropdown-item" >Publicar RepartiDev</Link></li>
                  <li className="nav-item">
                    <a href="" className="nav-link active text-danger" onClick={logout} > Logout </a>
                  </li>
                </ul>
              </li>
              <Link to="/home" class="btn btn-warning mx-1 my-1">Home</Link>
            </div>

          </div>

        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default MainLayout;