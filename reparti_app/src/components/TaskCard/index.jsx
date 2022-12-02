import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import index from "../../assets/index"
import "./index.css";

function TaskCard(props) {
	
	const { user } = useContext(AuthContext);
	const { task } = props;

	return (
		<tr>
			<th>
				<h5>00{user.tower}</h5>
			</th>
			<td>
				<h5 type="text">{user.name}</h5>
			</td>
			<td>
				<h5 type="text">S/. {task.precio}</h5>
			</td>
			<th>
				<h5>{task.servicio}</h5>
			</th>
			<th>
				<h5>{task.horario}</h5>
			</th>
			<td>
			<a href='https://api.whatsapp.com/send?phone=+51985269246&text=Hola, Nececito mas informacion!' className=""><img width="25" className="img-fluid m-1" src={index.whatsapp1} alt="" /></a>
			</td>
			<th className="text-muted small col hora">
				{String(task.timeElapsed(task.createdAt))}
			</th>
		</tr>
	);
}

export default TaskCard;
