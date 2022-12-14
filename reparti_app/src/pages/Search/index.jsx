import { useState, useEffect, useContext } from "react";
import { TaskCard } from "../../components";
import { CardUser } from "../../components"
import { get, update } from "../../services";
import { TaskModel } from "../../models/TaskModel";


function Search() {
  
    const [taskList, setTaskList] = useState([]);

    async function getTasks() {
        const tasks = await get();
        const tasksModels = tasks.map((task) => {
            return new TaskModel(
                task.servicio,
                task.createdAt,
                task.doneAt,
                task.deletedAt,
                task.precio,
                task.horario,
                task.nameUser,
                task.tower,
                task.condominio,
                task.id,
            );
        });
        setTaskList(tasksModels)
    }

    async function updateTask(id, type) {
        const body =
            type === "done" ? { doneAt: new Date() } : { deletedAt: new Date() };
        await update(id, body);
        await getTasks();
    }

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div className="container my-5">
            <div className="row">

                <CardUser/>

                <div class="col-sm-12 col-md-9 col-lg-9 col-xl-9 p-5 rounded-3 bg-dark">
                    <h2 class=" text-white text-center fw-bold ff-gotham display-4 mb-5">
                        Lista de <span class="text-warning"> Repartidores</span>
                    </h2>
                  <table class="table text-light">
                        <thead>
                            <tr>
                                <th scope="col"><label>Torre</label> </th>
                                <th scope="col"><label>Reparti</label></th>
                                <th scope="col"><label>Precio</label></th>
                                <th scope="col"><label>Servicio</label></th>
                                <th scope="col"><label>Horario</label></th>
                                <th scope="col"><label>Whatsapp</label></th>
                                <th scope="col"><label></label></th>
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
