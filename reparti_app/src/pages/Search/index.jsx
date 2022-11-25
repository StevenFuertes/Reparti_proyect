import { useState, useEffect, useContext } from "react";
import { TaskCard } from "../../components";
import { CardUser } from "../../components"
import { get, update } from "../../services";
import { TaskModel } from "../../models/TaskModel";
import { AuthContext } from "../../context/AuthContext";

function Search() {
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

                <CardUser/>

                <div class="col-sm-12 col-md-9 col-lg-9 col-xl-9 p-5 rounded-3 bg-dark">
                    <h2 class=" text-warning text-center fw-bold ff-gotham display-4 mb-5">
                        Lista de <small class="text-muted"> Repartidores</small>
                    </h2>
                  <table class="table text-light">
                        <thead>
                            <tr>
                                <th scope="col">Torre</th>
                                <th scope="col">Repartidor</th>
                                <th scope="col">Last</th>
                                <th scope="col">Servicio</th>
                                <th scope="col">Whatsapp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {taskList.map((task, index) => (
                                <TaskCard
                                    key={index}
                                    task={task}
                                    getTasks={getTasks}
                                    updateTask={updateTask}
                                />
                            ))}
                        </tbody>
                    </table>


                </div>
            </div>
        </div>
    );
}

export default Search;
