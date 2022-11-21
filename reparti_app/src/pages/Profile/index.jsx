import { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { get, post, update } from "../../services";
import { TaskModel } from "../../models/TaskModel";
import index from "../../assets/index";

function Profile() {
  const { user, logout } = useContext(AuthContext);
  const [taskList, setTaskList] = useState([]);

  async function getTasks() {
    const tasks = await get();
    const tasksModels = tasks.map((task) => {
      return new TaskModel(
        task.id,
        task.name,
        task.createdAt,
        task.doneAt,
        task.deletedAt,
        task.userId
      );
    });
    const myUserTasks = tasksModels.filter((task) => {
      if (task.userId === user.id) return task;
    });
    setTaskList(myUserTasks);
  }

  async function addTask(text) {
    const newTask = new TaskModel(null, text, null, null, null, user.id);
    await post(newTask);
    await getTasks();
  }

  async function updateTask(id, type) {
    const body =
      type === "done" ? { doneAt: new Date() } : { deletedAt: new Date() };
    await update(id, body);
    await getTasks();
  }

  useEffect(() => {
    getTasks();
    // que provoca el []: Que se ejecute solo una vez
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
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
        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9 p-4 bg-dark rounded-3 text-light">
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
                <select id="Select" className="form-select p-3">
                  <option className="d-none">Elije una Opción</option>
                  <option>Las Alondras</option>
                  <option>Las Golondrinas</option>
                  <option>Las Garzas</option>
                </select>
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
