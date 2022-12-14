import { Link } from "react-router-dom";
import { UserModel } from "../../models/UserModel";
import { postUser } from "../../services";
import { useNavigate } from "react-router-dom";
import "./index.css";

function SignUp() {
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newUser = new UserModel(
      data.get("firstName"),
      data.get("lastName"),
      data.get("email"),
      data.get("password"),
      data.get("imageProfile"),
      data.get("createdAt"),
      data.get("id"),
      data.get("dni"),
      data.get("phone"),
      data.get("tower"),
      data.get("dpto"),
      data.get("condominio")
    );
    await postUser(newUser);
    history("/login");
  };
  return (
    <div className="container">
      <div className="row text-bg-light rounded-2">
        <div className="col p-4 ">
          <h1 className="fw-bold text-center my-5 display-4">
            Bien<span className="text-warning">venido</span>
          </h1>
          <form className="px-4" onSubmit={handleSubmit}>
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
                  id="firstName"
                  name="firstName"
                  required
                />
              </div>
              <div className="col">
                <label
                  for="exampleInputApellidos"
                  className="form-label fw-bold"
                >
                  Apellidos
                </label>
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Apellidos"
                  aria-label="Last name"
                  id="lastName"
                  name="lastName"
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label className="form-label fw-bold">
                  <i className="fa-solid fa-envelope"></i> Email
                </label>
                <input
                  type="email"
                  className="form-control p-3"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="col">
                <label
                  className="form-label fw-bold"
                >
                  Contrase??a
                </label>
                <input
                  type="password"
                  className="form-control p-3"
                  placeholder="Contrase??a"
                  id="password"
                  name="password"
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label for="condominio" className="form-label fw-bold">
                  Nombre del Condominio
                </label>
                <select id="condominio" name="condominio" className="form-select p-3" required>
                  <option className="d-none">Elije una Opci??n</option>
                  <option>Las Alondras</option>
                  <option>Las Golondrinas</option>
                  <option>Las Garzas</option>
                </select>
              </div>
              <div className="col">
                <label className="form-label fw-bold">
                  DNI
                </label>
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="DNI"
                  id="dni"
                  name="dni"
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-sm-12 col-lg-6">
                <label className="form-label fw-bold">
                  Celular
                </label>
                <input
                  type="text"
                  className="form-control p-3"
                  aria-describedby="telHelp"
                  placeholder="Celular"
                  id="phone"
                  name="phone"
                  required
                />
              </div>
              <div className="col-sm-6 col-lg-3">
                <label className="form-label fw-bold ">
                  N?? de Torre
                </label>
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Torre"
                  id="tower"
                  name="tower"
                  required
                />
              </div>
              <div className="col-sm-6 col-lg-3">
                <label
                  className="form-label fw-bold "
                >
                  N?? Dpto
                </label>
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Dpto"
                  id="dpto"
                  name="dpto"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary fw-bold p-3 my-4 col-12"
            >
              Registrarme
            </button>
            <Link to="/login" >Ya tienes cuenta?</Link>
          </form>
        </div>
        <div className="col-5 img-1 d-none d-lg-block rounded-end"></div>
      </div>
    </div>
  );
}

export default SignUp;