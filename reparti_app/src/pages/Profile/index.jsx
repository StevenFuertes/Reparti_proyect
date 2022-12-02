import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CardUser } from "../../components";

function Profile() {
  const { user } = useContext(AuthContext);
  
  useEffect(() => {
    
  }, []);

  return (
    <div className="container my-5">
      <div className="row">

      <CardUser/> 

        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9 p-5 bg-dark rounded-3 text-light">
          <h1 className="fw-bold text-center mb-5 display-4">
            Mi<span className="text-warning"> Perfil</span>
          </h1>
          <form className="px-4">
            <div className="row mb-3">
              <div className="col">
                <label for="exampleInputNombres" className="form-label fw-bold">
                  Nombres
                </label>
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Nombres"
                  aria-label="First name"
                  value={user.name}
                />
              </div>
              <div className="col">
                <label for="exampleInputApellidos" className="form-label fw-bold">
                  Apellidos
                </label>
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Apellidos"
                  aria-label="Last name"
                  value={user.lastName}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label for="exampleInputEmail1" className="form-label fw-bold">
                  <i className="fa-solid fa-envelope"></i> Email
                </label>
                <input
                  type="email"
                  className="form-control p-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  value={user.email}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label for="Select" className="form-label fw-bold">
                  Nombre del Condominio
                </label>
                <input value={user.condominio} className="form-control p-3"/>
              </div>
              <div className="col">
                <label for="exampleInputDni1" className="form-label fw-bold">
                  DNI
                </label>
                <input
                  type="text"
                  className="form-control p-3"
                  id="exampleInputDni1"
                  placeholder="DNI"
                  value={user.dni}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-sm-12 col-lg-6">
                <label for="exampleInputTel" className="form-label fw-bold">
                  Celular
                </label>
                <input
                  type="tel"
                  className="form-control p-3"
                  id="exampleInputTel"
                  aria-describedby="telHelp"
                  placeholder="Celular"
                  value={user.phone}
                />
              </div>
              <div className="col-sm-6 col-lg-3">
                <label for="exampleInputPassword1" className="form-label fw-bold ">
                  N° de Torre
                </label>
                <input
                  type="number"
                  className="form-control p-3"
                  id="exampleInputPassword1"
                  placeholder="Torre"
                  value={user.tower}
                />
              </div>
              <div className="col-sm-6 col-lg-3">
                <label for="exampleInputPassword1" className="form-label fw-bold ">
                  N° Dpto
                </label>
                <input
                  type="number"
                  className="form-control p-3"
                  id="exampleInputPassword1"
                  placeholder="Dpto"
                  value={user.dpto}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
