import { useEffect, useContext } from "react";
import { TaskForm, CardUser } from "../../components";
import { post } from "../../services";
import { TaskModel } from "../../models/TaskModel";
import { AuthContext } from "../../context/AuthContext";


function PostReparti() {
    const { user } = useContext(AuthContext);


    async function addTask(text,precio) {
        const newTask = new TaskModel(null, text, null, null, precio, user.id);
        await post(newTask);
        
    }

    useEffect(() => {
      
        // que provoca el []: Que se ejecute solo una vez
    }, []);


    return (
        <div className="container my-5">
            <div className="row">

                 <CardUser/>
                 
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
