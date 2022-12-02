import { useRef } from "react";

function TaskForm(text) {
	const { onSubmitFunction } = text;
	const inputElement    = useRef();

	function inputKeyPress(event) {
		if (event.key === "Enter") {
			addButton();
		}
	}

	function addButton() {
		if (inputElement.current.value === "") return;
		onSubmitFunction(inputElement.current.value);
		inputElement.current.value = "";
	}

	return (
		<div>
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
					/>
				</div>
				<div class="col">
					<label for="Select" class="form-label fw-bold">
						Horario de Atención
					</label>
					<select id="Select" class="form-select p-3">
						<option class="d-none">Elije una Opción</option>
						<option>08:00 - 14:00 hs.</option>
						<option>14:00 - 19:00 hs.</option>
						<option>19:00 - 22:00 hs.</option>
					</select>
				</div>
			</div>
			<div class="d-grid gap-3 ">
				<button
					class="btn btn-warning fw-bold mt-5"
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
