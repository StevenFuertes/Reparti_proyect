import { useEffect } from "react";
import { TaskForm, CardUser } from "../../components";
import { post } from "../../services";
import { TaskModel } from "../../models/TaskModel";

function PostReparti() {
    
    async function addTask(props) {
        const newTask = new TaskModel(props[0], null, null, null,props[1],props[2]);
        await post(newTask);     
    }
    useEffect(() => {  
    }, []);

    return (
        <div className="container my-5">
            <div className="row">

                 <CardUser/>
                 
                <div class="col-sm-12 col-md-9 col-lg-9 col-xl-9 p-4 bg-dark rounded-3 text-light">
                    <h1 class="fw-bold text-center mb-5 display-4">Publicar<span class="text-warning"> RepartiDev</span></h1>
                    <form class="px-4">
                        <TaskForm onSubmitFunction={addTask} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PostReparti;
