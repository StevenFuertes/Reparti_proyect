import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import index from "../../assets/index"

function TaskCard(props) {
	
	const { user } = useContext(AuthContext);

	const { task, updateTask } = props;

	function statusClass() {
		if (task.deletedAt !== null) {
			return "bg-danger";
		}
		if (task.doneAt !== null) {
			return "bg-success";
		}
		return;
	}

	async function createAlert(text) {
		const res = await Swal.fire({
			title: "Importante!!!",
			text,
			showCancelButton: true,
			showConfirmButton: true,
		});

		//ok => true
		// cancel => false
		return res.isConfirmed;
	}

	async function confirmUpdate() {
		const isConfirmed = await createAlert(
			"Estas seguro de confirmar que terminaste esta tarea?"
		);

		if (isConfirmed) {
			await updateTask(task.id, "done");
		}
	}

	async function confirmDestroy() {
		const isConfirmed = await createAlert(
			"Esta seguro de hacer esta acción, ya no hay vuelta atrás"
		);

		if (isConfirmed) {
			await updateTask(task.id, "delete");
		}
	}

	return (
		<tr>
			<th>
				<h5>{user.tower}</h5>
			</th>
			<td>
				<h5 type="text">{user.name}</h5>
			</td>
			<td>
				<h5 type="text">{user.lastName}</h5>
			</td>
			<th>
				<h5>{task.name}</h5>
			</th>
			<td>
			<a href="https://api.whatsapp.com/send?phone=+51985269246&text=Hola, Nececito mas informacion!" className=""><img width="25" className="img-fluid m-1" src={index.whatsapp1} alt="" /></a>
			</td>
			{/* ////////////// Timer de publicacion /////////////////// */}
			<span className="text-muted small col">
				{String(task.timeElapsed(task.createdAt))}
			</span>
		</tr>
	);
}

export default TaskCard;
