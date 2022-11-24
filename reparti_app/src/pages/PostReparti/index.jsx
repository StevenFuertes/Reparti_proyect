import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { TaskForm } from "../../components";
import { post } from "../../services";
import { TaskModel } from "../../models/TaskModel";
import { AuthContext } from "../../context/AuthContext";
import index from "../../assets/index";

function PostReparti() {
    const { user, logout } = useContext(AuthContext);


    async function addTask(text) {
        const newTask = new TaskModel(null, text, null, null, null, user.id);
        await post(newTask);
        
    }

    useEffect(() => {
      
        // que provoca el []: Que se ejecute solo una vez
    }, []);


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

                <div class="col-sm-12 col-md-9 col-lg-9 col-xl-9 p-4 bg-dark rounded-3 text-light">
                    <h1 class="fw-bold text-center mb-5 display-4">Publicar<span class="text-warning"> RepartiDev</span></h1>
                    <form class="px-4">
                        <div class="row mb-3">
                            <div class="col">
                                <label for="exampleInputNombres" class="form-label fw-bold">Nombres</label>
                                <input disabled value={user.name} type="text" class="form-control p-3" placeholder="Nombres" aria-label="First name"/>
                            </div>
                            <div class="col">
                                <label for="exampleInputApellidos" class="form-label fw-bold">Apellidos</label>
                                <input disabled value={user.lastName} type="text" class="form-control p-3" placeholder="Apellidos" aria-label="Last name"/>
                            </div>
                        </div>

                        <TaskForm onSubmitFunction={addTask} />


                    </form>


                </div>

            </div>
        </div>
    );
}

export default PostReparti;
