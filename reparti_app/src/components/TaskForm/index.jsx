import { useRef, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function TaskForm(props) {
	const { user } = useContext(AuthContext);
	const { onSubmitFunction } = props;

	const inputElement = useRef();
	const inputPrecio = useRef();
	const inputHorario = useRef();
	const inputName = useRef();
	const inputTower = useRef();
	const inputCondominio = useRef()

	function inputKeyPress(event) {
		if (event.key === "Enter") {
			addButton();
		}
	}

	function addButton() {
		if (inputElement.current.value === "") return;
		const element = [
			inputElement.current.value,
			inputPrecio.current.value,
			inputHorario.current.value,
			inputName.current.value,
			inputTower.current.value,
			inputCondominio.current.value,
		];
		onSubmitFunction(element);
		console.log(element);
		inputElement.current.value = "";
		inputPrecio.current.value = "";
		inputHorario.current.value = "";
	}

	return (
		<div>
			<div class="row mb-3">
				<div class="col">
					<label for="exampleInputNombres" class="form-label fw-bold">
						Nombres
					</label>
					<input
						disabled
						value={user.name}
						type="text"
						class="form-control p-3"
						placeholder="Nombres"
						aria-label="First name"
						ref={inputName}
					/>
				</div>
				<div class="col-2">
					<label for="" class="form-label fw-bold">
						Torre
					</label>
					<input
						disabled
						value={user.tower}
						type="text"
						class="form-control p-3"
						placeholder="Tower"
						aria-label="Last name"
						ref={inputTower}
					/>
				</div>
				<div class="col-4">
					<label for="" class="form-label fw-bold">
						Condominio
					</label>
					<input
						disabled
						value={user.condominio}
						type="text"
						class="form-control p-3"
						placeholder="Condominio"
						aria-label="Last name"
						ref={inputCondominio}
					/>
				</div>
			</div>
			<div class="row mb-3">
				<div class="col">
					<label for="exampleInputEmail1" class="form-label fw-bold">
						<i class="fa-solid fa-envelope"></i> Descripcion del servicio
					</label>
					<input
						id="input_task"
						type="text"
						className="form-control p-3"
						placeholder="Publica aqui ..."
						ref={inputElement}
						onKeyPress={inputKeyPress}
					/>
				</div>
			</div>
			<div class="row mb-3">
				<div class="col">
					<label for="Select" class="form-label fw-bold">
						Costo del RepartiDev
					</label>
					<input
						type="number"
						id="Select"
						class="form-control p-3"
						placeholder="S/."
						ref={inputPrecio}
					/>
				</div>
				<div class="col">
					<label for="Select" class="form-label fw-bold">
						Horario de Atención
					</label>
					<select ref={inputHorario} id="Select" class="form-select p-3">
						<option class="d-none">Elije una Opción</option>
						<option>08:00 - 14:00 hs.</option>
						<option>14:00 - 19:00 hs.</option>
						<option>19:00 - 22:00 hs.</option>
					</select>
				</div>
			</div>
			<div class="d-grid ">
				<button
					class="btn btn-warning fw-bold mt-5 p-3"
					type="button"
					id="button-addon2"
					onClick={addButton}
				>
					Publicar
				</button>
			</div>
		</div>
	);
}

export default TaskForm;
