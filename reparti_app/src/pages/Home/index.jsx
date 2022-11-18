import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { TaskCard } from "../../components";
import { get, post, update } from "../../services";
import { TaskModel } from "../../models/TaskModel";
import { AuthContext } from "../../context/AuthContext";

function Home() {
    const { user } = useContext(AuthContext);
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
            type === "done"
                ? { doneAt: new Date() }
                : { deletedAt: new Date() };
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
                        <img width="80" class="img-fluid rounded mx-auto d-block" src="../images/usuario.png" alt="" />
                        <h2 className="text-warning fw-bold ff-gotham display-7">
                            Name<small class="text-dark"> LastName</small>
                        </h2>
                    </div>

                    <div className="list-group">
                        <Link
                            to="/profile_int"
                            className="list-group-item list-group-item-action active fw-bold text-center rounded-2 border border-none bg-success shadow"
                            aria-current="true">
                            Perfil
                        </Link>

                        <Link className="list-group-item list-group-item-action fw-bold mt-3 mb-5 rounded-2 shadow">Contáctanos</Link>
                    </div>

                    <div className="d-grid gap-2">
                        <button className="btn btn-danger mt-5 fw-bold" type="button">
                            Cerrar Sesión
                        </button>
                    </div>
                    <div className="mt-5">
                        {taskList.map((task, index) => (
                            <TaskCard
                                key={index}
                                task={task}
                                getTasks={getTasks}
                                updateTask={updateTask}
                            />
                        ))}
                    </div>
                </div>

                <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9 p-5 rounded-3 bg-dark">
                    <img src="../images/pexels-yan-krukov-6818161.jpg" width="900" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home;